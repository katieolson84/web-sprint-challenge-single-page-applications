import React from 'react'
import styled from 'styled-components'

const OrderInfo = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-content: center;
    text-align: center;
    width: 100%;
    height: 100vh;

    background-image: url("https://images.unsplash.com/photo-1590534247854-e97d5e3feef6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
    font-family: Arial, Helvetica, sans-serif;
    
    h2{
    font-size: 4rem;
    font-weight: bold;
    color: white;
    text-shadow: 1px 1px 1px gray;
    }
    .formContainer{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        width: 30%;
        border: 1px solid white;
    }
    .formInputs{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2%;
        color: white;
        font-size: 1.8rem;
    }
    .dropdown{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        color: white;
        font-size: 1.8rem;   
    }
     #quantity{
         width: 22rem;
     }   
    }
    .btns h4{
        font-family: Arial, Helvetica, sans-serif;
        margin:2%;
    }

    .formInputs label{
        line-height: 26px;
        display: flex;
        flex-direction: column;
        text-align: left;
    }
    
    .formInputs input{
        height: 20px;
        width: 23rem;
        margin: 1%;
    }
    .termsCheckbox{
        width: 40rem;
    }
    .termsCheckbox input{
        width: 1.5rem;
    }

    button{
        padding: 1%;
        margin: 3%;
        font-size: 1.5rem;
    }
    .error{
        color: red;
    }
`

const PizzaForm = (props) => {
    const {values, change, disabled, errors, orders } = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        let orderId = orders.length;
        let order = { "orderId": orderId, "size": values.size, "sauce": values.sauce, "toppings": values.toppings, "substitue": values.substitute, "total": values.total };
        order.push(order);
        this.props.history.push('/order/' + orderId);
        // submit()
    };
    

    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target;
        const newValue = type === "checkbox" ? checked : value;
        values.total = 0;
        if (values.pizzaSize === "small"){
            values.total += 5;
                
        }
        else if (values.pizzaSize === "medium"){
            values.total += 7;
            
        }
        else if (values.pizzaSize === "large"){
            values.total += 11;
            
        }
        else if (values.pizzaSize  === "exlarge"){
            values.total += 15;
            
        }else{
            values.total = 0;
        }
        if(values.substitute === true) {
            values.total += 2
        }
        values.total = values.total * values.quantity;
        change(name, newValue);
    };
    

    return (
        <OrderInfo>
            <div className="formTitle">
                    <h2>Build Your Own Pizza</h2>
                    
                </div>
            <form className="formContainer" onSubmit={onSubmit}>
                

                <div className="formInputs">
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            onChange={onChange}
                            value={values.name}
                            placeholder="Enter Name"
                        />
                        {errors.name.length > 0 ? ( <p className='error' > {errors.name} </p> ) : null }
                    </label>

                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            onChange={onChange}
                            value={values.email}
                            placeholder="Enter Email"
                        />
                        {errors.email.length > 0 ? ( <p className='error' > {errors.email} </p> ) : null }
                    </label>
                </div>
                    
                <div className="dropdown">
                    {/* Quantity */}
                <label>
                    Quantity:
                        <input
                            id="quantity"
                            type="number"
                            name="quantity"
                            min="1"
                            max="2"
                            onChange={onChange}
                            value={values.quantity}
                            placeholder="Select Quantity"
                        />
                    </label>
                    {/* Size */}
                    <label>
                        Pick Your Size:
                        <select
                            name="pizzaSize"
                            onChange={onChange}
                            value={values.pizzaSize}>
                            <option
                            value="">--Select Size--</option>
                            <option
                            value="small">Small-10 inch, 6 slices</option>
                            <option
                            value="medium">Medium-12 inches, 8 slices</option>
                            <option
                            value="large">Large-14 inches, 10 slices</option>
                            <option
                            value="exlarge">ExLarge-18 inches, 12 slices</option>
                        </select>
                        {errors.pizzaSize.length > 0 ? ( <p className='error' > {errors.pizzaSize} </p> ) : null }
                    </label>
                </div>
                <div className="checkbox">
                    
                    <p>All pizzas are made on our homemade, handtossed crust!</p>
                    {/* Substitutions */}
            
                    <h4>Need a gluten free option?</h4>
                
                    <label>
                        
                        <input 
                            type="checkbox"
                            name="substitute"
                            checked={values.substitute}
                            onChange={onChange}
                            />
                            Gluten Free Crust (+ $2.00)
                    </label>
                </div>
                    {/* Sauce */}
                <div className="dropdown">
                    <label>
                        Pick Your Sauce
                        <select
                            name="sauce"
                            onChange={onChange}
                            value={values.sauce}>
                            <option>--Select Sauce--</option>
                            <option>Original Red</option>
                            <option>Alfredo</option>
                            <option>Garlic Ranch</option>
                            <option>Buffalo</option>
                            <option>BBQ</option>
                            <option>No Sauce</option>
                        </select>
                        {errors.sauce.length > 0 ? ( <p className='error' > {errors.sauce} </p> ) : null }
                    </label>
                </div>
                {/* toppings checkbox */}
                <div className="termsCheckbox">
                    <h4>Choose Your Toppings:</h4>
                
                    <label>
                        <input 
                            type="checkbox"
                            name="pepperoni"
                            checked={values.pepperoni}
                            onChange={onChange}
                            />
                            Pepperoni
                    </label>

                    <label>
                        <input 
                            type="checkbox"
                            name="bacon"
                            checked={values.bacon}
                            onChange={onChange}
                            />
                            Bacon
                    </label>

                    <label>
                        <input 
                            type="checkbox"
                            name="spicySausage"
                            checked={values.spicySausage}
                            onChange={onChange}
                            />
                            Spicy Sausage
                    </label>

                    <label>
                        <input 
                            type="checkbox"
                            name="grilledChicken"
                            checked={values.grilledChicken}
                            onChange={onChange}
                            />
                            Grilled Chicken
                    </label>

                    <label>
                        <input 
                            type="checkbox"
                            name="redOnion"
                            checked={values.redOnion}
                            onChange={onChange}
                            />
                            Red Onion
                    </label>

                    <label>
                        <input 
                            type="checkbox"
                            name="dicedWhiteOnion"
                            checked={values.dicedWhiteOnion}
                            onChange={onChange}
                            />
                            Diced White Onion
                    </label>

                    <label>
                        <input 
                            type="checkbox"
                            name="greenPepper"
                            checked={values.greenPepper}
                            onChange={onChange}
                            />
                            Green Pepper
                    </label>

                    <label>
                        <input 
                            type="checkbox"
                            name="dicedTomatoes"
                            checked={values.dicedTomatoes}
                            onChange={onChange}
                            />
                            Diced Tomatoes
                    </label>

                    <label>
                        <input 
                            type="checkbox"
                            name="blackOlives"
                            checked={values.blackOlives}
                            onChange={onChange}
                            />
                            Black Olives
                    </label>

                    <label>
                        <input 
                            type="checkbox"
                            name="artichokeHearts"
                            checked={values.artichokeHearts}
                            onChange={onChange}
                            />
                            Artichoke Hearts
                    </label>

                    <label>
                        <input 
                            type="checkbox"
                            name="pineapple"
                            checked={values.pineapple}
                            onChange={onChange}
                            />
                            Pineapple
                    </label>

                </div>
                <div className="formInputs">
                    <label>
                        Special Instructions:
                        <input
                            type="textarea"
                            name="instructions"
                            onChange={onChange}
                            value={values.instructions}
                            placeholder="Enter special instructions here"
                            
                        />
                    </label>
                </div>
                <div>
                <button className="submit" disabled={disabled} >Add to Order ${values.total}</button>
                </div>
            </form>
        </OrderInfo>
    )
}

export default PizzaForm

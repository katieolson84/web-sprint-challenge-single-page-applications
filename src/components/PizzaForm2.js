import React from 'react'
import styled from 'styled-components'
import { Route, Link, useHistory } from 'react-router-dom'
import Pizza from './Pizza2'

const OrderInfo = styled.div`
    *{
    font-size: 62.5%;
    }
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
    width: 100vw;
    height: 100vh;

    .background{
    background-image: url("https://images.unsplash.com/photo-1544982503-9f984c14501a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: fit-content;
    }

    .nav-links{
    font-size: 3rem;
    display: flex;
    justify-content: flex-end;
    padding-top: .5rem;
    margin-right: 4rem;
    }

    .home{
    text-decoration: none;
    color: white;
    text-shadow: 1px 1px 1px gray;
    }
    
    .formTitle{
    font-size: 6rem;
    font-weight: bold;
    color: white;
    text-shadow: 1px 1px 1px gray;
    font-family: Arial, Helvetica, sans-serif;
    }

    .formContainer{
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
        width: 100%;
        /* border: 1px solid white; */
        align-self: center;
    }
    .formContent{
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-content: center;
        width: 45%;
        padding: 1rem;
        background-color: #ffffff;
        opacity: 0.7;
        margin-bottom: 2rem;
    }

    .formInputs{
        align-items: center;
        text-align: left;
        color: black;
        font-size: 1.8rem; 
        width:100%; 
    }

    #textInput{
        height: 38px;
        font-size: 1.4rem;
        color: black;
        width: 100%; 
    }

    select, input{
      width:100%;
      box-sizing:border-box;
    }

    .dropdown{
        color: black;
        font-size: 1.8rem;   
        text-align: left;
        margin: .2rem;
    }
     #dropdown{
        display: flex;
        flex-direction: column;
        justify-content: left;
        width: 100%;
        padding: .2rem;
        font-size: 1.5rem;
        margin: .3rem 0;  
     }   

    p{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.3rem;
        align-self: center;
        align-content: center;
    }
    .subtitle{
        font-size: 1.4rem;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        display: flex;
        flex-direction: column;  
    }

    h4{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.2rem;
    }

    .subtitle2{
        font-size: 1.5rem;
    }

    .formInputs label{
        line-height: 2.6rem;
        display: flex;
        flex-direction: column;
        text-align: left;
    }
    
    .formInputs input{
        /* height: 20vh; */
        width: 23rem;
    }
    
    .checkbox{
        display: flex;
        flex-direction: column;
        /* flex-wrap: wrap; */
        align-content: flex-start;
        text-align: left;
        width: 40rem;
        font-size: 1.6rem;
    }

    .checkbox input{
        /* position: static; */
        /* display: flex;
        flex-direction: column; */
        width: 1.5rem;
        margin-left: 3rem;
    }

    button{
        padding: 1rem;
        margin: 2rem;
        font-size: 1.5rem;
    }
    .error{
        font-size: 1.1rem;
        color: red;
    }
    @media(max-width: 400px){
        .nav-links{
        font-size: 2rem;
        justify-content: center;
        margin-right: 0rem;
    }  
        .formTitle{
        font-size: 4rem;
        }   
        .formContent{
        width: 78%;
        padding: 1rem;
        margin-bottom: 1rem;
    }
    .checkbox{
        width: 15rem;
        font-size: 1.6rem;
    }
    .checkbox input{
        width: 1.5rem;
        margin-left: .5rem;
    }
    }
    @media(max-width: 768px){
        .formContent{
        width: 89%;
        padding: 1rem;
        margin-bottom: 1rem;
    }
}
`

const PizzaForm = (props) => {
    const {values, change, disabled, errors, submit } = props;

    const history = useHistory();
    const routeToOrderForm = () => {
        history.push('/order');
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        // orders.map((orders) => {
        //     return <Pizza key={orders.id} details={orders}/>
        //   })
          

        //   this.props.history.push('/order');

        // let orderId = orders.length;
        // let order = { "name": values.name, "size": values.size, "sauce": values.sauce, "toppings": values.toppings, "substitue": values.substitute, "total": values.total };
        // orders.push(order);
        // this.props.history.push('/order/');
        // console.log("/orders/")
        submit()
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
        <div className="background">
            <div className="nav-links">
                <Link className="home" to="/">Home</Link>
            </div>
            <div className="formTitle">
                    <h2>Build Your Own Pizza</h2>
                    
                </div>
            <form className="formContainer" onSubmit={onSubmit}>
                <div className="formContent">

                <div className="formInputs">
                    <label>
                        Name:
                        <input
                            id="textInput"
                            type="text"
                            name="name"
                            onChange={onChange}
                            value={values.name}
                            
                        />
                        {errors.name.length > 0 ? ( <p className='error' > {errors.name} </p> ) : null }
                    </label>
                </div>
                <div className="formInputs">
                    <label>
                        Email:
                        <input
                            id="textInput"
                            type="email"
                            name="email"
                            onChange={onChange}
                            value={values.email}
                            
                        />
                        {errors.email.length > 0 ? ( <p className='error' > {errors.email} </p> ) : null }
                    </label>
                </div>
                    
                <div className="dropdown">
                    {/* Quantity */}
                    <label>
                    Quantity:
                        <input
                            id="dropdown"
                            type="number"
                            name="quantity"
                            min="1"
                            max="2"
                            onChange={onChange}
                            value={values.quantity}
            
                        />
                    </label>
                </div>
                <div className="dropdown">
                    {/* Size */}
                    <label>
                        Pick Your Size:
                        <select
                            id="dropdown"
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
                {/* Sauce */}
                <div className="dropdown">
                    <label>
                        Pick Your Sauce
                        <select
                            id="dropdown"
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
                <p>All pizzas are made on our homemade, hand-tossed crust!<br></br><br></br>
                    {/* Substitutions */}
            
                    <span className="subtitle">Need a gluten free option?</span></p>
                <div className="checkbox">
                    <label>
                    
                        <input 
                            id="checkbox"
                            type="checkbox"
                            name="substitute"
                            checked={values.substitute}
                            onChange={onChange}
                            />
                            Gluten Free Crust(+ $2.00)
                    </label>
                </div>
                    
                {/* toppings checkbox */}
                <p className="subtitle2">Choose Your Toppings:</p>
                <div className="checkbox">
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
                            id="textInput"
                            type="textarea"
                            name="instructions"
                            onChange={onChange}
                            value={values.instructions}
                            
                            
                        />
                    </label>
                </div>
                
                <div>
                <button className="submit" disabled={disabled} onClick={routeToOrderForm} >Add to Order ${values.total}</button>
                </div>
                </div>
            </form>
        </div>
        <Route path={"/order"}>
        <Pizza
        values={values}/>
        </Route>
    </OrderInfo>

    
    )
}

export default PizzaForm

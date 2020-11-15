// import React, {useState, useEffect} from "react";
// import {Form, Col, Row} from 'react-bootstrap';
// import * as yup from "yup"; 
// import axios from "axios";
// // import Pizza from './Pizza'
// import schema from '../validation/formSchema';
// import { useHistory } from "react-router-dom";



// //declaring initial state
//     const initialFormValues = {
//         name: "",
//         email: "",
//         pizzaSize: "",
//         sauce: "",
//         pepperoni: false,
//         sausage: false,
//         bacon: false,
//         spicySausage: false,
//         grilledChicken: false,
//         redOnion: false,
//         dicedWhiteOnion: false,
//         greenPepper: false,
//         dicedTomatoes: false,
//         blackOlives: false,
//         artichokeHearts: false,
//         pineapple: false,
//         substitute: false,
//         quantity: "",
//         instructions: "",
//         total: 0,
//     };

//     const initialFormErrors = {
//         name: "",
//         email: "",
//         pizzaSize: "",
//         sauce: "",
//         quanity: "",
//     }

//     const initialOrder = [];
//     const initialDisabled = true;

//     export default function PizzaForm() {
//     const [order, setOrder] = useState(initialOrder); 
//     const [formValues, setFormValues] = useState(initialFormValues); 
//     const [formErrors, setFormErrors] = useState(initialFormErrors);
//     const [disabled, setDisabled] =useState(initialDisabled);
    
//     const postNewOrder = (newOrder) => {
//         axios
//         .post("https://reqres.in/api/users", newOrder)
//         .then(res => {
//             setOrder(res.data);
//             setFormValues(initialFormValues);
//         })
//         .catch(err => {
//             console.log("Oops, something went wrong!", err);
//         });
//     };

//     const inputChange = (name, value) => {
//         yup
//           .reach(schema, name)
//           .validate(value)
//           .then(() => {
//             setFormErrors({
//               ...formErrors, [name]: "",
//             });
//           })
//           .catch((err) => {
//             setFormErrors({
//               ...formErrors, [name] : err.errors[0],
//             });
//           });
//           setFormValues({
//             ...formValues, [name]: value,
//           });
//       };
    
    
      
//     const onSubmit = (evt) => {
//         evt.preventDefault();
//         const newOrder = {
//             name: formValues.name.trim(),
//             email: formValues.email.trim(),
//             pizzaSize: formValues.pizzaSize,
//             sauce: formValues.sauce,
//             toppings: ["pepperoni", "sausage", "bacon", "spicySausage", "grilledChicken", "redOnion", "dicedWhiteOnion", "greenPepper", "dicedTomatoes", "blackOlives", "artichokeHearts", "pineapple", ].filter((toppings) => formValues[toppings]),
//             substitute: formValues.substitute,
//             instructions: formValues.instructions.trim()
//         };
//         postNewOrder(newOrder);
//   };
        
    

//     const history = useHistory();
//         const routeToOrder = event => {
//         history.push("/Order");
    
//     useEffect(() => {
//         schema.isValid(formValues)
//         .then((valid) => {
//             setDisabled(!valid);
//         });
//     }, [formValues])
//     }
    
    

//     // const onSubmit = (evt) => {
//     //     evt.preventDefault();
//     //     // formSubmit()
//     //     // let orderId = order.length;
//     //     // let orderDetails = {"orderId": orderId, "pizzaSize": formValues.pizzaSize, "sauce": formValues.sauce, "toppings": formValues.toppings, "substitute": formValues.substitute, "total": formValues.total};
//     //     // history.push("/pizza")
//     //         formSubmit()
//     //     }
        

//     const onChange = (evt) => {
//         const {name, value, checked, type} =evt.target;
//         const newValue = type === "checkbox" ? checked : value;
        
//         formValues.total= 0
//         if (formValues.pizzaSize === "small"){
//             formValues.total += 5;
                
//         }
//         else if (formValues.pizzaSize === "medium"){
//             formValues.total += 7;
            
//         }
//         else if (formValues.pizzaSize === "large"){
//             formValues.total += 11;
            
//         }
//         else if (formValues.pizzaSize  === "exlarge"){
//             formValues.total += 15;
            
//         }else{
//             formValues.total = 0;
//         }
//         if(formValues.substitute === true) {
//             formValues.total += 2
//         }
//         formValues.total = formValues.total * formValues.quantity;
        
//         inputChange(name, newValue)
//         };
    
//     return (
//     <div>
//         <div className="title">
//             Build Your Own Pizza
//         </div>
//         <img src="https://images.unsplash.com/photo-1572455021453-7d0b208ae250?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" alt="pizza"/>
        
//         <Form onSubmit={onSubmit}>
//     {/* Name */}
//         <Form.Group as={Row} controlId="formHorizontalName">
//             <Form.Label column sm={2}>
//             Name
//             </Form.Label>
//             <Col sm={10}>
//             <Form.Control 
//                 name= "name" 
//                 type="text" 
//                 placeholder="Enter Name"
//                 onChange={onChange}
//                 value={formValues.name} />
//                 {formErrors.name.length > 0 ? <p className="error">{formErrors.name}</p>: null}
//             </Col>
//         </Form.Group>
// {/* Email */}
//         <Form.Group as={Row} controlId="formHorizontalEmail">
//             <Form.Label column sm={2}>
//             Email:
//             </Form.Label>
//             <Col sm={10}>
//             <Form.Control 
//             type="email" 
//             name="email"
//             onChange={onChange}
//             value={formValues.email}
//             placeholder="Enter Valid Email" />
//             {formErrors.email.length > 0 ? <p className="error">{formErrors.email}</p>: null}
//             </Col>
//         </Form.Group>
//         <Form.Group as={Row} controlId="formHorizontalQuantity">
//         <Col sm={{ span: 3, offset: 2 }}>
//             <Form.Control 
//                 name= "quantity" 
//                 type="number" 
//                 min="1"
//                 max="10"
//                 placeholder="Select Quantity"
//                 onChange={onChange}
//                 value={formValues.quantity} />
//             </Col>
//         </Form.Group>
// {/* Size */}
//         <Form.Group as={Row} controlId="formHorizontalSize">
//             <Form.Label column sm={2}>
//             Choose your size:
//             </Form.Label>
//             <Col sm={10}>
//             <Form.Control 
//                 as="select"
//                 name="pizzaSize" 
//                 onChange={onChange}>
//                 {/* // value={formValues.pizzaSize}> */}
//                 <option value="">--Select Size--</option>
//                 <option value="small">Small-10 inch, 6 slices</option>
//                 <option value="medium">Medium-12 inches, 8 slices</option>
//                 <option value="large">Large-14 inches, 10 slices</option>
//                 <option value="exlarge">ExLarge-18 inches, 12 slices</option>
//             </Form.Control>
//             {formErrors.pizzaSize.length > 0 ? <p className="error">{formErrors.pizzaSize}</p>: null}
//             </Col>
//         </Form.Group>
//         {/* substitute*/}
// <Form.Group as={Row} controlId="formHorizontalCheck">
//         <Form.Label column sm={2}>
//             Substitutions
//         </Form.Label>
//             <Col sm={10}>
//             <Form.Check 
//                 type="checkbox"
//                 name="substitute"
//                 onChange={onChange}
//                 value="gluten"
//                 label="Gluten Free Crust (+ $2.00)" />
//             </Col>
//         </Form.Group>
// {/* Sauce */}
//         <Form.Group as={Row} controlId="formHorizontalSauce">
//             <Form.Label column sm={2}>
//             Choose your sauce:
//             </Form.Label>
//             <Col sm={10}>
//             <Form.Control 
//                 as="select"
//                 name="sauce" 
//                 onChange={onChange}
//                 value={formValues.sauce}>
//                 <option>--Select Sauce--</option>
//                 <option>Original Red</option>
//                 <option>Alfredo</option>
//                 <option>Garlic Ranch</option>
//                 <option>Buffalo</option>
//                 <option>BBQ</option>
//                 <option>No Sauce</option>
//             </Form.Control>
//             {formErrors.sauce.length > 0 ? <p className="error">{formErrors.sauce}</p>: null}
//             </Col>
//         </Form.Group>
// {/* Toppings Checkbox */}
//         <Form.Group as={Row} controlId="formHorizontalCheck">
//         <Form.Label column sm={2}>
//             Choose your Toppings:
//         </Form.Label>
//             <Col sm={10}>
//             <Form.Check 
//                 type="checkbox"
//                 name="pepperoni"
//                 onChange={onChange}
//                 value={formValues.pepperoni}
//                 label="Pepperoni" />
//             <Form.Check 
//                 type="checkbox"
//                 name="sausage"
//                 onChange={onChange}
//                 value={formValues.sauasage}
//                 label="Sausage" />
//             <Form.Check 
//                 type="checkbox"
//                 name="bacon"
//                 onChange={onChange}
//                 value={formValues.bacon}
//                 label="Bacon" />
//             <Form.Check 
//                 type="checkbox"
//                 name="spicySausage"
//                 onChange={onChange}
//                 value={formValues.spicySausage}
//                 label="Spicy Sausage" />
//             <Form.Check 
//                 type="checkbox"
//                 name="grilledChicken"
//                 onChange={onChange}
//                 value={formValues.grilledChicken}
//                 label="Grilled Chicken" />
//             <Form.Check 
//                 type="checkbox"
//                 name="redOnion"
//                 onChange={onChange}
//                 value={formValues.redOnion}
//                 label="Red Onion" />
//             <Form.Check 
//                 type="checkbox"
//                 name="dicedWhiteOnion"
//                 onChange={onChange}
//                 value={formValues.dicedWhiteOnion}
//                 label="Diced White Onion" />
//             <Form.Check 
//                 type="checkbox"
//                 name="greenPepper"
//                 onChange={onChange}
//                 value={formValues.greenPepper}
//                 label="Green Pepper" />
//             <Form.Check 
//                 type="checkbox"
//                 name="dicedTomatoes"
//                 onChange={onChange}
//                 value={formValues.dicedTomatoes}
//                 label="Diced Tomatoes" />
//             <Form.Check 
//                 type="checkbox"
//                 name="blackOlives"
//                 onChange={onChange}
//                 value={formValues.blackOlives}
//                 label="Black Olive" />
//             <Form.Check 
//                 type="checkbox"
//                 name="artichokeHearts"
//                 onChange={onChange}
//                 value={formValues.artichokeHearts}
//                 label="Artichoke Hearts" />
//             <Form.Check 
//                 type="checkbox"
//                 name="pineapple"
//                 onChange={onChange}
//                 value={formValues.pineapple}
//                 label="Pineapple" />
            
//             </Col>
//         </Form.Group>

// {/* Special Instructions */}
//         <Form.Group controlId="exampleForm.ControlTextarea1">
//         <Form.Label>
//             Special instructions
//         </Form.Label>
//         <Form.Control 
//             as="textarea" rows={3} 
//             onChange={onChange}
//             value={formValues.instructions}
//             name="instructions"
//             />
//         </Form.Group>
//         <Form.Group as={Row}>
//             <Col sm={{ span: 10, offset: 2 }}>
//             <button 
//             disabled={disabled}
//             onClick={routeToOrder}>Add to Order ${formValues.total}</button>
//             </Col>
//         </Form.Group>
//         </Form>
//         {/* <div>
//             {order.map((order) => {
//                 return <Pizza key={order.id} details={order}/>
//             })}
//         </div> */}
        
//     </div>
//     );
// }
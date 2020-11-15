// import React, { useState, useEffect } from 'react';
// import Pizza from './Pizza2';
// import PizzaForm from './PizzaForm2';

// import axios from 'axios';
// import schema from '../validation/formSchema';
// import * as yup from 'yup';
// import styled from 'styled-components'

// const OrderContainer = styled.div`
//   box-sizing: border-box;
//   display: flex;
//   justify-content: center;
//   align-content: center;
//   text-align: center;
//   width: 100%;

//   .container{
//     display:flex;
//     flex-direction: column;
//     /* border: 2px gray solid;
//     border-radius: 5px;
//     box-shadow: 5px 5px 5px gray; */
//     margin: 1%;
//     width: 80%;
//     align-items: center;
//     height: fit-content;
//     /* background-color: #E0E0E0; */
//   }

//   h1{
//     font-size: 3rem;
//     font-family: Arial, Helvetica, sans-serif;
//     color: #404040;
    
//   }
// `
// const initialFormValues = { 
//     name: "",
//     email: "",
//     pizzaSize: "",
//     sauce: "",
//     pepperoni: false,
//     sausage: false,
//     bacon: false,
//     spicySausage: false,
//     grilledChicken: false,
//     redOnion: false,
//     dicedWhiteOnion: false,
//     greenPepper: false,
//     dicedTomatoes: false,
//     blackOlives: false,
//     artichokeHearts: false,
//     pineapple: false,
//     substitute: false,
//     quantity: "",
//     instructions: "",
//     total: 0,
// };

// const initialFormErrors = {
//     name: "",
//     email: "",
//     pizzaSize: "",
//     sauce: "",
//     quanity: "",
// }
// const initialOrder = [];
// const initialDisabled = true;

// const Order = () => {
//   const [order, setOrder] = useState(initialOrder);
//   const [formValues, setFormValues] = useState(initialFormValues);
//   const [formErrors, setFormErrors] = useState(initialFormErrors);
//   const [disabled, setDisabled] = useState(initialDisabled); //boolean

//   // const getUsers = () => {
//   //   axios
//   //     .get('https://reqres.in/api/users')
//   //     .then(res => {
//   //       setUser(res.data.data);
//   //     })
//   //     .catch((err) => {
//   //       debugger;
//   //       console.log(err);
//   //     })
//   // }

//   const postNewOrder = (newOrder) => {
//     axios
//       .post('https://reqres.in/api/users', newOrder)
//       .then((res) => {
//         setOrder([...order, res.data]);
//         console.log(res.data)
//         setFormValues(initialFormValues); //resets form
//       })
//       .catch((err) => {
//         debugger;
//         console.log(err);
//       });
//   };

//   const inputChange = (name, value) => {
//     yup
//       .reach(schema, name)
//       .validate(value)
//       .then(() => {
//         setFormErrors({
//           ...formErrors, [name]: "",
//         });
//       })
//       .catch((err) => {
//         setFormErrors({
//           ...formErrors, [name] : err.errors[0],
//         });
//       });
//       setFormValues({
//         ...formValues, [name]: value,
//       });
//   };


//   const formSubmit = () => {
//     const newOrder= {
//       name: formValues.name.trim(),
//       email: formValues.email.trim(),
//       pizzaSize: formValues.pizzaSize,
//       sauce: formValues.sauce,
//       toppings: ["pepperoni", "sausage", "bacon", "spicySausage", "grilledChicken", "redOnion", "dicedWhiteOnion", "greenPepper", "dicedTomatoes", "blackOlives", "artichokeHearts", "pineapple", ].filter((toppings) => formValues[toppings]),
//       substitute: formValues.substitute,
//       instructions: formValues.instructions.trim()
//     };
//    postNewOrder(newOrder)
//   };

//   // useEffect(()=> {
//   //   getUsers();
//   // }, []);

//   useEffect(() => {
//     schema.isValid(formValues)
//     .then((valid)=> {
//       setDisabled(!valid);
//     });
//   }, [formValues])

//   return (
//     <OrderContainer>
//       <div className="container">
        
//         <PizzaForm
//           order={order}
//           values={formValues}
//           change={inputChange}
//           submit={formSubmit} //changed this form FormSubmit
//           disabled={disabled}
//           errors={formErrors}
//           />
//         {order.map((order) => {
//           return <Pizza key={order.id} details={order}/>
//         })}
//       </div>
//     </OrderContainer>
//   )
// }

// export default Order





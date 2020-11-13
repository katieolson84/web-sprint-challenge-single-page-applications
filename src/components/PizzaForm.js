import React, {useState, useEffect} from "react";
import {Form, Col, Row, Button} from 'react-bootstrap'
import * as yup from "yup"; 
import axios from "axios";

export default function PizzaForm() {
//declaring initial state
    const initialFormState = {
        name: "",
        email: "",
        pizzaSize: "",
        sauce: "",
        toppings: "",
        substitute: "",
        instructions: "",
        quantity: "",
    };

    //temp state to set state
    const [order, setOrder] = useState([]); 
    //server error
    const [serverError, setServerError] = useState(""); 
    //managing state for form inputs
    const [formState, setFormState] = useState(initialFormState); 
    //form cannot be submitted if there are any errors
    const [isButtonDisabled, setIsButtonDisabled] =useState(false);
    //managing state for errors
    const [errors, setErrors] = useState(initialFormState);

    //schema used to validate inputs
    const formSchema = yup.object().shape({
        name: yup
        .string()
        .required("Please provide a name for your order"),
        email: yup
        .string()
        .email("Must be a valid email address")
        .required(),
        pizzaSize: yup.string().oneOf('Small-10 inch, 6 slices', 'Medium-12 inches, 8 slices', 'Large-14 inches, 10 slices', 'ExLarge-18 inches, 12 slices' )
        .required(),
        sauce: yup.string().oneOf('Original Red', 'Alfredo', 'Garlic Ranch', 'Buffalo','BBQ', 'No Sauce')
        .required()
    });

    const validateChange = e => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrors({ ...errors, [e.target.name]: ""});
            })
            .catch(err => {
                console.log("error!", err);
                setErrors({ ...errors, [e.target.name]: err.errors[0]});
            });
    };

    //this will validate the entire form and if valid, turn submit button on
    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            console.log("valid?", valid);
            setIsButtonDisabled(!valid);
        })
    }, [formState]);

    const formSubmit = e => {
        e.preventDefault();

    axios
        .post('https://reqres.in/api/users', formState)
        .then(response => {
            setOrder(response.data.data)
            setFormState({
                name: "",
                email: "",
                pizzaSize: "",
                sauce: "",
                toppings: "",
                substitute: "",
                instructions: "",
                quantity: "",
            });

            setServerError(null);
        })
        .catch(err => {
            setServerError("Oops, something went wrong!");
        });
    };
    
    const inputChange = e => {
        // e.persist();
        const newFormData = {
            ...formState, [e.target.name]:
             e.target.type === "checkbox" ? e.target.checked : e.target.value};
             validateChange(e);
             setFormState(newFormData);
        };

    return (
        <Form onSubmit={formSubmit}>
            {serverError ? <p className="error">{serverError}</p>: null}
{/* Name */}
        <Form.Group as={Row} controlId="formHorizontalName">
            <Form.Label column sm={2}>
            Name
            </Form.Label>
            <Col sm={10}>
            <Form.Control 
                id= "name" 
                name= "name" 
                type="text" 
                placeholder="Enter Name"
                onChange={inputChange}
                value={formState.name} />
                {errors.name.length > 0 ? <p className="error">{errors.name}</p>: null}
            </Col>
        </Form.Group>
{/* Email */}
        <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
            Email:
            </Form.Label>
            <Col sm={10}>
            <Form.Control 
            type="email" 
            name="email"
            onChange={inputChange}
            value={formState.email}
            placeholder="Enter Valid Email" />
            {errors.email.length > 0 ? <p className="error">{errors.email}</p>: null}
            </Col>
        </Form.Group>
{/* Size */}
        <Form.Group as={Row} controlId="formHorizontalSize">
            <Form.Label column sm={2}>
            Choose your size:
            </Form.Label>
            <Col sm={10}>
            <Form.Control 
                as="select"
                name="pizzaSize" 
                onChange={inputChange}
                value={formState.pizzaSize}>
                <option>--Select Sauce--</option>
                <option>Small-10 inch, 6 slices</option>
                <option>Medium-12 inches, 8 slices</option>
                <option>Large-14 inches, 10 slices</option>
                <option>ExLarge-18 inches, 12 slices</option>
            </Form.Control>
            {errors.pizzaSize.length > 0 ? <p className="error">{errors.pizzaSize}</p>: null}
            </Col>
        </Form.Group>
{/* Sauce */}
        <Form.Group as={Row} controlId="formHorizontalSauce">
            <Form.Label column sm={2}>
            Choose your sauce:
            </Form.Label>
            <Col sm={10}>
            <Form.Control 
                as="select"
                name="sauce" 
                onChange={inputChange}
                value={formState.sauce}>
                <option>--Select Sauce--</option>
                <option>Original Red</option>
                <option>Alfredo</option>
                <option>Garlic Ranch</option>
                <option>Buffalo</option>
                <option>BBQ</option>
                <option>No Sauce</option>
            </Form.Control>
            {errors.sauce.length > 0 ? <p className="error">{errors.sauce}</p>: null}
            </Col>
        </Form.Group>
{/* Toppings Checkbox */}
        <Form.Group as={Row} controlId="formHorizontalCheck">
        <Form.Label column sm={2}>
            Choose your Toppings:
        </Form.Label>
            <Col sm={10}>
            <Form.Check 
                type="checkbox"
                name="toppings"
                onChange={inputChange}
                value={formState.toppings}
                label="Pepperoni" />
            <Form.Check 
                type="checkbox"
                name="toppings"
                onChange={inputChange}
                value={formState.toppings}
                label="Sausage" />
            <Form.Check 
                type="checkbox"
                name="toppings"
                onChange={inputChange}
                value={formState.toppings}
                label="Bacon" />
            <Form.Check 
                type="checkbox"
                name="toppings"
                onChange={inputChange}
                value={formState.toppings}
                label="Spicy Sausage" />
            <Form.Check 
                type="checkbox"
                name="toppings"
                onChange={inputChange}
                value={formState.toppings}
                label="Grilled Chicken" />
            <Form.Check 
                type="checkbox"
                name="toppings"
                onChange={inputChange}
                value={formState.toppings}
                label="Red Onion" />
            <Form.Check 
                type="checkbox"
                name="toppings"
                onChange={inputChange}
                value={formState.toppings}
                label="Diced White Onion" />
            <Form.Check 
                type="checkbox"
                name="toppings"
                onChange={inputChange}
                value={formState.toppings}
                label="Green Pepper" />
            <Form.Check 
                type="checkbox"
                name="toppings"
                onChange={inputChange}
                value={formState.toppings}
                label="Diced Tomatoes" />
            <Form.Check 
                type="checkbox"
                name="toppings"
                onChange={inputChange}
                value={formState.toppings}
                label="Black Olive" />
            <Form.Check 
                type="checkbox"
                name="toppings"
                onChange={inputChange}
                value={formState.toppings}
                label="Artichoke Hearts" />
            <Form.Check 
                type="checkbox"
                name="toppings"
                onChange={inputChange}
                value={formState.toppings}
                label="Pineapple" />
            <Form.Check 
                type="checkbox"
                name="toppings"
                onChange={inputChange}
                value={formState.toppings}
                label="Extra Cheese" />
            <Form.Check 
                type="checkbox"
                name="toppings"
                onChange={inputChange}
                value={formState.toppings}
                label="Three Cheese" />
            <Form.Check 
                type="checkbox"
                name="toppings"
                onChange={inputChange}
                value={formState.toppings}
                label="No Cheese" />
            </Col>
        </Form.Group>
{/* Substitutions */}
<Form.Group as={Row} controlId="formHorizontalCheck">
        <Form.Label column sm={2}>
            Substitutions
        </Form.Label>
            <Col sm={10}>
            <Form.Check 
                type="checkbox"
                name="substitute"
                onChange={inputChange}
                value={formState.substitute}
                label="Gluten Free Crust (+ $2.00)" />
            <Form.Check 
                type="checkbox"
                name="substitute"
                onChange={inputChange}
                value={formState.substitute}
                label="Cauliflower Crust (+ $2.00)" />
            </Col>
        </Form.Group>
{/* Special Instructions */}
        <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>
            Special instructions
        </Form.Label>
        <Form.Control 
            as="textarea" rows={3} 
            onChange={inputChange}
            value={formState.instructions}
            name="instructions"
            />
        </Form.Group>

        <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
            <Button 
            disabled={isButtonDisabled}
            type="submit">Sign in</Button>
            </Col>
        </Form.Group>
        </Form>
    );
}
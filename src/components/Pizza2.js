import React from 'react'
import styled from 'styled-components'

const OrderCard = styled.div`
    border: 1px black solid;
    border-radius: 5px;
    box-shadow: 2px 3px 3px gray;
    margin: 2%;
    padding: 2%;
    background-color: #404040;
    color: white;
    width: 40%;
    height: fit-content;
`

const Pizza = ({values}) => {

    if (!values) {
        return <h3>Loading new user information...</h3>
    }
    return (
        <OrderCard>
            <div className= 'orderContainer'>
                <div className="orderInfo">
                    <h2>Thank you, {values.name}! Your pizza is on its way!</h2>
                    <p>Your order details have been sent to: {values.email}</p>
                    <p>Your {values.pizzaSize} pizza with {values.sauce} and </p>
                    {/* {details.toppings} */}
                </div>
            </div>
        </OrderCard>
    )
}

export default Pizza

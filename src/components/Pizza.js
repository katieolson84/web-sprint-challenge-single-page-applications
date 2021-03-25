import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const OrderCard = styled.div`
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

    .orderContainer{
    background-image: url("https://images.unsplash.com/photo-1590534247854-e97d5e3feef6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
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

    .orderInfo{
        background-color: #ffffff;
        opacity: 0.6;
        height: 50vh;
    }

    .orderCard{
        /* margin-top: 7rem; */
        color: black;
        width: 100%;
        padding-top: 2rem;
    }
    .orderCard h2{
        font-size: 3rem;
    }
    .orderCard p{
        font-size: 1.8rem;
    }
    @media(max-width: 400px){
    .nav-links{
        font-size: 2rem;
        justify-content: center;
        margin-right: 0rem;
    }  
        .orderInfo{
        height: 50vh;
    }
    .formTitle{
    font-size: 4rem;
    }
    .orderCard{
        margin-top: 6rem;
    }
    .orderCard h2{
        font-size: 2rem;
    }
    .orderCard p{
        font-size: 1.5rem;
    }
}
`

const Pizza = (props) => {
    const {values} = props;
    
    if (!values) {
        return <h3>Loading new user information...</h3>
    }
    return (
        <OrderCard>
            <div className= 'orderContainer'>
                <div className="nav-links">
                    <Link className="home" to="/">Home</Link>
                </div>
                <div className="formTitle">
                    <h2>Thank you, {values.name}!</h2>
                    
                </div>
                <div className="orderInfo">
                    <div className="orderCard">
                        <h2>Our cooks have recieved your order!</h2>
                        <p>Your order details have been sent to: {values.email}</p>
                        <p>Your total is $ {values.total}.</p>
                        <p>Your {values.pizzaSize} pizza is being prepared now!</p>
                        <p>Your substutions: {values.substitute}</p>
                    </div>
                </div>
            </div>
        </OrderCard>
    )
}

export default Pizza

import React from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomeContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-content: center;
  text-align: center;
  width: 100%;
  height: 100vh;
  
  .home-wrapper{
    background-image: url("https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
}
.nav-links{
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  justify-content: flex-end;
  padding: 2%;
  margin-right: 7rem;
}

.orderNow{
  color: white;
  padding: 0%1%;
  text-shadow: 1px 1px 1px gray;
}
.home{
  color: white;
  padding: 0%1%;
  text-shadow: 1px 1px 1px gray;
}
  .transbox{
    background-color: #ffffff;
    opacity: 0.6;
  }

  .store-header{
    font-size: 8rem;
    font-weight: bold;
    color: black;
    text-shadow: 1px 1px 1px gray;
    margin-top: 8rem;
    
  }
  .home-page-info{
    color: black;
    font-size: 3rem;
    text-shadow: 1px 1px 1px gray;
    padding-bottom: 8px;
  }

  .md-button{
    width: 15%;
    align-self: center;
    font-size: 1.9rem;
    border-radius: 5px;
    color: white;
    text-shadow: 1px 1px 1px gray;
    background-color: #FB9E1A;
    padding: 1%1%;
    border-color: white;
    margin-top: 40px;
  }
  .footer{
    display: flex;
    color: white;
    justify-content: center;
    margin-top: 8rem;
    font-size: 2rem;
  }
  .footer p{
    padding: 1%1%;
    text-shadow: 1px 1px 1px gray;
  }
`
function Home(props) {
    console.log('Home', props)
    return(
        <HomeContainer>
            <div className="home-wrapper">
            <div className="nav-links">
                <Link className="home" to="/">Home</Link>
                <Link className="orderNow" to="/pizza">Order Now</Link>
            </div>
                <div className="transbox">
                    <h1 className="store-header">Lambda Eats</h1>
                    <div className="home-page-info">
                        <p>We deliver to all of Utah County!</p> 
                    </div>
                </div>
                <Link to="/pizza">
                    <button className="md-button order-button"> 
                Order Now!
                </button></Link>
                <footer className="footer">
                    <p>Contact us at: 801-555-5555</p> 
                </footer>
            </div>
        </HomeContainer>
    )
}
export default Home
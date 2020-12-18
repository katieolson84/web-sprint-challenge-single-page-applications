import React from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomeContainer = styled.div`
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
  
  .home-wrapper{
    background-image: url("https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
    }
    .transbox{
        background-color: #ffffff;
        opacity: 0.6;
        height: 35vh;
    }
    .store-header{
        font-size: 8rem;
        font-weight: bold;
        color: black;
        text-shadow: 1px 1px 1px gray;
        margin:0; 
        margin-top: 7rem; 
        padding: 0;
    }
    .home-page-info{
        color: black;
        font-size: 4rem;
        text-shadow: 1px 1px 1px gray;
        margin: 0;
    }

  .md-button{
    width: 20vw;
    align-self: center;
    font-size: 1.8rem;
    border-radius: 5px;
    color: white;
    text-shadow: 1px 1px 1px gray;
    background-color: #FB9E1A;
    padding: 1rem;
    border-color: white;
    margin-top: 6rem;
    text-align: center;
  }
  .footer{
    display: flex;
    color: white;
    justify-content: center;
    margin-top: 10rem;
    font-size: 4rem;
  }
  .footer p{
    /* padding: 2rem; */
    text-shadow: 1px 1px 1px gray;
  }
  @media(max-width: 768px){
    .transbox{
        height: 30vh;
    }
    .store-header{
        font-size: 6rem;
        margin-top: 12rem; 
        padding: 0;
    }

    .home-page-info{
    font-size: 4rem;
    margin: 0;
    }
    .md-button{
        margin-top: 1rem;
        width: 40vw;
    }
    .footer{
    margin-top: 4rem;
    font-size: 3rem;
  }
  }
  @media(max-width: 400px){
    .transbox{
        height: 38vh;
    }
    .orderNow{
        display: none;
    }
    .home{
        display: none;
    }
    .store-header{
        font-size: 5rem;
        margin-top: 10rem;
    }
    .home-page-info{
        font-size: 3rem;
    }
    .md-button{
        width: 50vw;
        margin-bottom: 0rem;
    }
    .footer{
    margin-top: 1rem;
    font-size: 2.8rem;
    }
}
`
function Home(props) {
    console.log('Home', props)
    return(
    <HomeContainer>
        <div className="home-wrapper">
            <div className="transbox">
                <h3 className="store-header">Lambda Eats</h3>
                <div className="home-page-info">
                    <p>We deliver to all of Utah County!</p> 
                </div>
            </div>
            <Link to="/pizza">
                <button className="md-button order-button"> 
                Order Now!
                </button>
            </Link>
            <div className="footer">
                <p>Contact us at: 801-555-5555</p> 
            </div>
        </div>
    </HomeContainer>
    )
}
export default Home
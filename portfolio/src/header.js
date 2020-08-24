import React, { useState } from 'react';
import styled from 'styled-components'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import insta_logo from "./instagram_logo.png";
import tuchong_logo from "./tuchong_logo.png"
import mail from "./email_icon.png"

const Top = styled.div`
    display: flex;
    align-items: center;
    @media only screen and (max-width: 500px) {
        flex-direction: column;
    }
`
const Name = styled.h1`
    margin-left: 13.5%;
    font-size: 34px;
    color:grey;
    font-family: 'Varta', sans-serif;
    @media only screen and (max-width: 500px) {
        font-size: 25px;
        margin-left: 0
    }

`
const Item = styled.div`
    margin: 14px;

    @media screen and (max-width: 600px) {
        margin: 3px;
        color: grey;

    }
`

const Social = styled.div`  
    margin-left:auto;
    margin-right:12%;
    @media screen and (max-width: 600px) {
        display: absolute;
        top: 0;
    
}`



const Header = () => {
    const url = window.location.href.split("/")
    const lastItem = "/" + url[url.length - 1]
    console.log(lastItem)
    const [selected, setSelected] = useState(lastItem)

    return <Top>
           <Name>Lydiaslens</Name>
            <Item>
                <Link  to="/" onClick={() => setSelected("/")} className={selected === "/"? "item_underlined" : "item"}>Photography</Link>
            </Item>
            <Item>
                <Link to="/about" onClick={() => setSelected("/about")} className={selected === "/about"? "item_underlined" : "item"}>About</Link>
            </Item>

        <Social>
            <a  target="_blank" href="https://www.instagram.com/lydiaslens/">
            <img src={insta_logo} style={{width:22, margin: "14px"}} />
            </a>
            <a href="mailto:aidyl889@gmail.com">
            <img src={mail} style = {{width:22, margin: "14px"}}/>
            </a>

        </Social>

        
        </Top> 
}

export default Header
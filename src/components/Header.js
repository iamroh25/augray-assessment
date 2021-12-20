import React from 'react'
import styled from 'styled-components'
import logo from "../images/logo.png"

function Header() {
    return (
        <Nav>
            <NavMenu>
                <a>
                    <img src = {logo}/>
                </a>
                <a> 
                    <span> SOS </span>
                </a>
                <a> 
                    <span> Meet Bodhi </span>
                </a>
                <a> 
                    <span> Experts </span>
                </a>
                <a> 
                    <span> My Wellness </span>
                </a>
                <a> 
                    <span> Assessment </span>
                </a>
                <a> 
                    <span> My Sessions </span>
                </a>
                <a> 
                    <span> More </span>
                </a>
                <a> 
                    <span> Login </span>
                </a>
                
            </NavMenu>

            
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
height:76px;
width:1440px;
background:#090b13;
display:flex;
align-items:center;
`
const NavMenu = styled.div`
display:flex;
flex:1;
margin-left:50px;
align-items:center;
a{
    display:flex;
    align-items:center;
    padding:0 40px;
    cursor:pointer;
    
}

span{
    font-size:13px;
    letter-spacing:1.42px;
    position:relative;
    
}
img {
    padding-left:2px;
    padding-right:120px;
}

`

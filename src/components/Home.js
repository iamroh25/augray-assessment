import React from 'react'
import styled from 'styled-components'
import '../App.css';
import image1 from "../images/heartpic.png"
import image2 from "../images/career.png"
import image3 from "../images/self.png"
import image4 from "../images/explore.png"
import button from "../images/button.png"





function Home() {
    return (
        <div className = "parentdiv">
            <Container >

                <p>-----  GET HELP. GET BETTER.  -----</p>
                <h1>A Place To Feel Better,
                    Wherever You Go!</h1>  
                <span>How may I help you today?</span>
                <div className = "images">
                    <div className = "hearticon1">
                        <img src= {image1} className = "hearticon"
                                />
                            <p className = "hearttext">Relationship</p>
                            <span className = "hearttext1">Advice</span> 
                            
                        
                    </div>
                    <div className = "careericon1">
                        <img src= {image2} className = "careericon"
                                />
                            <p className = "careertext">Career</p>
                            <span className = "careertext1">Counselling</span> 
                            
                        
                    </div>
                    <div className = "selficon1">
                        <img src= {image3} className = "selficon"
                                />
                            <p className = "selftext">Self</p>
                            <span className = "selftext1">Improvement</span> 
                            
                        
                    </div>
                    <div className = "exploreicon1">
                        <img src= {image4} className = "exploreicon"
                                />
                            <p className = "exploretext">Explore</p>
                            <span className = "exploretext1">More</span> 
                            
                        
                    </div>

                </div>
                <img src = {button} className = "button"/>
                
            </Container>

            <div>
                <p className = "hayd">How are you doing?</p>
            </div>

        </div>
            
            
        
    )
}

export default Home

const Container=styled.div`
height:684px;
width:1440px;
align-items:center;
justify-content:center;
  


p{
    color:red;
    width: 450px;
    height: 19px;
    margin: 155px 140px 24px 189px;
    padding-left:50px;
    object-fit: contain;
    letter-spacing:2px;
    
}
h1{
  width: 504px;
  height: 110px;
  margin: 0px 149px 48px 189px;
  padding-left:0px;
  object-fit: contain;
  font-family: Montserrat;
  font-size: 45px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: rgba(0, 0, 0, 0.75);
}
span{
    width: 214px;
    height: 19px;
    margin: 48px 294px 23.9px 334px;
    object-fit: contain;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #f36326;
}
`





import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components'

const Column = styled.div`
  width: 25%;
  position: relative;
  display: inline-block;
  margin: 1px;
  line-height: 0px;

@media only screen and (max-width: 700px) {
    width: 90%;
    position: relative;
    display: inline-block;
    margin-left: 5px;
}`

const Overlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    transition: .5s ease;
    ${Column}:hover & {
      opacity: 0.7;
    }  
    @media only screen and (max-width: 700px) {
      opacity: 0.25;
}`

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`

const Image = styled.img`
    width:inherit;
    height:500px;
    object-fit: cover;
  @media only screen and (max-width: 700px) {
    height: 200px;
}`

  const Text = styled.h2`
    font-family: 'Varta', sans-serif;
    color: black;
    opacity: 1;

  `


class Photo extends React.Component {

  render(){
    var category = this.props.cat;
    var url = "./photography/".concat(category);
    var divClassName = "column"
    var textClassName = "text-block"
    var overlayClassName = "overlay"

  return (
      <Column>
      <Link to={url}>
          <ImageContainer>
          <Image src={this.props.src}/>
          </ImageContainer>

          <Overlay>
            <div className={textClassName}>
              <Text>{this.props.category}</Text>
            </div>
          </Overlay>

      </Link>
        </Column>

    )
}
}

export default Photo

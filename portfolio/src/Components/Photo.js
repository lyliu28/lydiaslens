import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components'


const Column = styled.div`
  width: 40%;
  position: relative;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  margin: 5px;
  line-height: 0px;

@media only screen and (max-width: 500px) {
    width: 400px;
    position: relative;
    display: inline-block;
    margin-left: 5px;
}`

const ImageContainer = styled.div`
  grid-column: {this.props.id} / 3;
  grid-row: 1;
`
const Image = styled.img`
    width:100%
`

class Photo extends React.Component {

  render(){
  return (
      <Column>
      <ImageContainer>          
        <Image src={this.props.src}/>
</ImageContainer>
      </Column>

    )
}
}

export default Photo

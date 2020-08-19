import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Element } from 'react-scroll'
import styled from 'styled-components'


const Column = styled.div` 
display: flex;
flex-direction: column;
  position: relative;
  display: inline-block;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 90%
  `
const Image = styled.img`
width: 90%

`


class CatPhotoLarge extends React.Component {

  render(){

    return (
      <Element name= {String(this.props.id)} className="element">

      <Column>

        <Image src={this.props.src}/>
            <div className={"textClassName"}>
              <h2>{this.props.id}</h2>
            </div>
      
      </Column>

      </Element>

    )
  }
}

export default CatPhotoLarge

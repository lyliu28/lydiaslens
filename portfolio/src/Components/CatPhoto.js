import React, { setState } from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import styled from 'styled-components'
import ImageModal from './ImageModal'

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    height: inherit;
    overflow: hidden;
`

const Modal = styled.div`
    position: fixed;
    z-index: 1;
    padding-top: 3%;
    padding-bottom: 2%;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    overflow: auto;
    background-color: white;
    @media only screen and (max-width: 500px) {
      padding: 10px;
    }
  `

const Image = styled.img`
    width:inherit;
    height:300px;
    object-fit: cover;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
      -webkit-transition: transform 0.5s ease-in-out;
    }
    @media only screen and (max-width: 500px) {
      height: 200px;
  }`

const LargeImage = styled.img`
    height:95%;
    @media only screen and (max-width: 500px) {
      padding-top: 1%;
      width: 100%;
      height: auto;
  }`

const Column = styled.div`
    width: 39%;
    position: relative;
    display: inline-block;
    margin: 1px;
    @media only screen and (max-width: 500px) {
      width: 90%;
      position: relative;
      display: inline-block;
      margin-left: 5px;
  }`
const Caption = styled.div`
    text-align: center;
    padding: 20px 16px;
    color: black;
    color:grey;
    font-family: 'Varta', sans-serif;
`
const Close = styled.span`
    color: #cdd0d1;
    position: absolute;
    top: 30px;
    right: 30px;
    font-size: 45px;
    font-weight: bold;
    opacity: 0.7;
    &:hover {
      opacity: 0.9;
      color: #cdd0d1;
      text-decoration: none;
      cursor: pointer;
    }

    @media only screen and (max-width: 500px) {
      top: 30px;
      right: 20px;

`

class CatPhoto extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isOpen: false}
  }

  render(){
    
    var id = this.props.id;
    return (
        this.state.isOpen ? 
        <Modal>
            <Close onClick={ () => {          
              this.setState({isOpen: false})}}>&times;
            </Close>
            <LargeImage src= {this.props.src}/>
            <Caption>{this.props.title}</Caption> 
        </Modal>
      :       
      // <Link activeClass="active" to={String(id)} spy={true} smooth={true} duration={50} >
      <Column>

        <ImageContainer>
            
            <Image src={this.props.src} onClick = {() => { 
                    this.setState({isOpen: true})

                }}
            />
            
        </ImageContainer>
        </Column>

      // </Link>

    )

  }
}

export default CatPhoto


import React, {useState} from 'react'
import ReactDOM from "react-dom"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import styled from 'styled-components'

const Image = styled.img`
    width:inherit;
    height:700px;
    cursor: pointer;
`

const Out = styled.div`

`

const Modal = styled.div`
    position: fixed;
    z-index: 1;
    padding: 50px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: white;
`

/* The Close Button */
const Close = styled.span`
    color: black;
    position: absolute;
    top: 10px;
    right: 25px;
    font-size: 35px;
    font-weight: bold;
    &:hover {
        opacity: 0.7;
        color: #999;
        text-decoration: none;
        cursor: pointer;
      }
`


const ImageModal = (props) => {
    const [isOpen, setIsOpen] = useState(true)
    return <div style = {isOpen && {"display": "block"}}>
        <Modal>
          <Close onClick={ () => setIsOpen(false)}>&times;</Close>

          <Image src={props.src}/>
        </Modal>
        </div>
}

export default ImageModal
import React from "react"
import styled from "styled-components"

const Container = styled.div`
    text-align: center;
    padding-bottom: 20px;
    font-size: 15px;
    color:grey;
    font-family: 'Varta', sans-serif;
`

const Copyright = () => {
    return <Container> <p> © Lydia Liu Photography</p></Container>
}

export default Copyright
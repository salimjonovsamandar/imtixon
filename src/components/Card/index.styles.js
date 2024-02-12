import styled from "styled-components";

const Card = styled.div`
width: 190px;
    height: 254px;
    background: #07182E;
    position: relative;
    display: flex;
    place-content: center;
    place-items: center;
    overflow: hidden;
    border-radius: 20px;
    &::before{
        content: '';
    position: absolute;
    width: 100px;
    background-image: linear-gradient(180deg, rgb(0, 183, 255), rgb(255, 48, 255));
    height: 130%;
    animation: rotBGimg 3s linear infinite;
    transition: all 0.2s linear;
    }
    &::after{
    content: '';
    position: absolute;
    background: #07182E;
    inset: 5px;
    border-radius: 15px;
    }
    
`
const Text = styled.h2`
z-index: 1;
    color: white;
    font-size: 2em;
`
    
export {Card, Text }
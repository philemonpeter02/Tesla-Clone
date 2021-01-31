import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import ButtonSmall from './ButtonSmall'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Item = ({ title, desc, backgroundImg, leftBtnText, leftBtnLink, rightBtnText, rightBtnLink, twoButtons, first, last}) => {
    return (
        <Items style={{ backgroundImage: `url(${backgroundImg})`}}>
            <ItemContainer>
                <ItemText>
                    <p>{title}</p>
                    <ItemTextDes>
                        <p>{desc}</p>
                    </ItemTextDes>
                </ItemText>
                <ItemLowerThird>
                    <ItemButtons>
                        <Button imp='primary' text={leftBtnText} link={leftBtnLink} />
                        {
                        twoButtons && (
                            <Button imp='secondary' text={rightBtnText} link={rightBtnLink} />
                        )
                        }
                    </ItemButtons>
                    <ItemButtonsSmall>
                    
                    <ButtonSmall imp='primary' text={leftBtnText} link={leftBtnLink} />
                        {
                        twoButtons && (
                            <ButtonSmall imp='secondary' text={rightBtnText} link={rightBtnLink} />
                        )
                        }
                    </ItemButtonsSmall>
                {first && (
                    <ItemExpand>
                    <ExpandMoreIcon fontSize="large" />

                    </ItemExpand>
                )}
                {last && (
                    <ItemExpand>
                    <p>Tesla © 2021.</p>
                    <p>&nbsp;Clone Developed By Phil.</p>

                    </ItemExpand>
                )}
                </ItemLowerThird>
            </ItemContainer>
            
        </Items>
    )
}

export default Item
const Items = styled.div`
height: 100vh;
width: 100%;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
display: flex;
justify-content: center;
scroll-snap-align: start;
`
const ItemContainer = styled.div`
width: 40vw;
display: flex;
flex-direction: column;
align-items: center;
@media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
}
`
const ItemText = styled.div`
margin-top: 20%;
display: flex;
flex-direction: column;
font-size: 42px;
color: #393c41;
align-items: center;
flex: 1;
white-space: nowrap;
@media screen and (max-width: 1080px) {
    font-size: 38px;
    margin-top: 40%;
}
@media screen and (max-width: 768px) {
    font-size: 32px;
    white-space: normal;
}
@media screen and (max-width: 360px) {
    font-size: 24px;
    
}
`
const ItemTextDes = styled.div`
font-weight: 1;
font-size: 14px;
color: #5c5e62;

`
const ItemLowerThird = styled.div`
margin-bottom: 5%;
display: flex;
flex-direction: column;
`
const ItemButtons = styled.div`
display: flex;
@media screen and (max-width: 534px) {
    display: none;
}
`
const ItemButtonsSmall = styled.div`
display: none;
@media screen and (max-width: 534px) {
    display: block;
}
`
const ItemExpand = styled.div`
color: #000;
font-size: 3rem!important;
width: 100%;
margin-top: 3%;
text-align: center;
justify-content: center;
display: flex;

p{
    margin-top: 20%;
    font-size: 0.8rem;
}
`
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Accessories from '../assets/Desktop-Accessories.jpg'
import ModelS from '../assets/Desktop-ModelS.jpeg'
import Model3 from '../assets/Desktop-Model3.jpeg'
import ModelX from '../assets/Desktop-ModelX.jpeg'
import ModelY from '../assets/Desktop-ModelY.jpeg'
import SolarPanels from '../assets/Desktop-SolarPanels.jpeg'
import SolarRoof from '../assets/Desktop-SolarRoof.jpeg'
import Item from "../components/Item"
import styled from 'styled-components'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ItemsContainer>
      <Item 
        title="Model S"
        desc="Order Online for Touchless Delivery"
        descLink=""
        backgroundImg={ModelS}
        leftBtnText="CUSTOM ORDER"
        leftBtnLink=""
        rightBtnText="EXISTING INVENTORY"
        rightBtnLink=""
        twoButtons="true"
        first
      />
      <Item 
        title="Model Y"
        desc="Order Online for Touchless Delivery"
        descLink=""
        backgroundImg={ModelY}
        leftBtnText="CUSTOM ORDER"
        leftBtnLink=""
        rightBtnText="LEARN MORE"
        rightBtnLink=""
        twoButtons="true"
      />
      <Item 
        title="Model 3"
        desc="Order Online for Touchless Delivery"
        descLink=""
        backgroundImg={Model3}
        leftBtnText="CUSTOM ORDER"
        leftBtnLink=""
        rightBtnText="EXISTING INVENTORY"
        rightBtnLink=""
        twoButtons="true"
      />
      <Item 
        title="Model X"
        desc="Order Online for Touchless Delivery"
        descLink=""
        backgroundImg={ModelX}
        leftBtnText="CUSTOM ORDER"
        leftBtnLink=""
        rightBtnText="EXISTING INVENTORY"
        rightBtnLink=""
        twoButtons="true"
      />
      <Item 
        title="Lowest Cost Solar Panels in America"
        desc="Money-back guarantee"
        descLink=""
        backgroundImg={SolarPanels}
        leftBtnText="ORDER NOW"
        leftBtnLink=""
        rightBtnText="LEARN MORE"
        rightBtnLink=""
        twoButtons="true"
      />
      <Item 
        title="Solar for New Roofs"
        desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        descLink=""
        backgroundImg={SolarRoof}
        leftBtnText="ORDER NOW"
        leftBtnLink=""
        rightBtnText="LEARN MORE"
        rightBtnLink=""
        twoButtons="true"
      />
      <Item 
        title="Accessories"
        backgroundImg={Accessories}
        leftBtnText="ORDER NOW"
        leftBtnLink=""
        footerDes="Tesla © 2021"
        last
      />
    </ItemsContainer>
  </Layout>
)

export default IndexPage

const ItemsContainer = styled.div`
scroll-snap-type: y mandatory;
overflow: auto;
height: 100vh; 
`
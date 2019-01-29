import React from 'react'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Header from '../components/Header'

const IndexPage = () => (
  <div>
   <div className="HeaderContainer">
      <Header />
   </div>
   <div className="Gallery">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
   </div>
   <Footer/>
  </div>
)

export default IndexPage

import React from 'react'
import Header from '../components/header'
import Card from '../components/Card';
import Footer from '../components/Footer';

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

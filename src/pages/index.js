import React from 'react'
import Header from '../components/header'
import Card from '../components/Card';
import Footer from '../components/Footer';

const IndexPage = () => (
  <div>
   <div className="Header">
      <Header />
   </div>
   <div className="CardContainer">
      <Card 
       title="Title"
       image={require('../Images/New-York-Horizon/Cover.jpg')} 
      />
      <Card 
        title="Title"
        image={require('../Images/New-York-Horizon/Cover.jpg')} 
      />
      <Card 
        title="Title"
        image={require('../Images/New-York-Horizon/Cover.jpg')} 
      />
      <Card 
        title="Title"
        image={require('../Images/New-York-Horizon/Cover.jpg')} 
      />
      <Card 
        title="Title"
        image={require('../Images/New-York-Horizon/Cover.jpg')} 
      />
      <Card 
        title="Title"
        image={require('../Images/New-York-Horizon/Cover.jpg')} 
      />
   </div>
   <Footer />
  </div>
)

export default IndexPage

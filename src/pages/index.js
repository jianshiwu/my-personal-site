import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card';
import Footer from '../components/Footer';

const IndexPage = () => (
  <div>
   <div className="HeaderContainer">
      <Header />
   </div>
   <div className="Gallery">
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
   <Footer/>
  </div>
)

export default IndexPage

import React from 'react'
import Header from '../components/header'
import Card from '../components/Card';
import Footer from '../components/Footer';

const IndexPage = () => (
  <div>
   <div className="Header">
      <Header />
   </div>
   <div className="CardColumn1">
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
   <Footer 
    logo={require('../Images/Social-Logos/Twitter_Logo_Blue.png')}
   />
  </div>
)

export default IndexPage

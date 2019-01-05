import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import Card from '../components/Card';

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
  </div>
)

export default IndexPage

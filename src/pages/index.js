import React from 'react'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Header from '../components/Header';


const IndexPage = () => (
  <div>
   <Header/>
   <div className="GalleryContainer">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
   </div>
   <Footer/>
  </div>
)

export default IndexPage

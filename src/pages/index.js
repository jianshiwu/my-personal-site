import React from 'react'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Head from '../components/Head'




const IndexPage = () => (
  <div>
   <Head/>
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

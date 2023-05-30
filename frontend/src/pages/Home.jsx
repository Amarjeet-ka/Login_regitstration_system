import React, { Fragment } from 'react'
import Navigation from '../components/navbar/Navbar'
import Homegrid from '../components/homegrid/Homegrid'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

export default function Home() {
  return (
   <Fragment>
   <Navigation/>
    <Header/>

    <Homegrid />
    <Footer/>
   </Fragment>     

  )
}

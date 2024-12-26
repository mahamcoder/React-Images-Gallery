import React from 'react'
import Navbar from '../Componnets/Navbar'
import Categories from '../Componnets/Categories'
import ClothItem from '../Componnets/ClothItem'
import Cart from '../Componnets/Cart'

const Home = () => {
  return (
    <>
     <Navbar/>
     <Categories/>
     <ClothItem/>
     {/* <Cart/> */}
    </>
  )
}

export default Home

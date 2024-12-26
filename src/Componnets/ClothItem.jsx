import React from 'react'
import Card from './Card'


const ClothItem = () => {
    const Data = [
        {
          
          title: "Stylish Jacket",
          price: 2500,
          imageUrl: "/images/shirts1.jpg",
          rating: 4.5,
        },
        {
         
          title: "Elegant Dress",
          price: 3200,
          imageUrl: "/images/summer1.jpg",
          rating: 4.7,
        },
        {
          
          title: "Casual Shirt",
          price: 1500,
          imageUrl: "/images/shrt2.jpg",
          rating: 4.2,
        },
        {
          
          title: "Formal Blazer",
          price: 4500,
          imageUrl: "/images/winter2.jpg",
          rating: 4.8,
        },
        {
         
          title: "Denim Jeans",
          price: 2000,
          imageUrl: "/images/winter1.jpg",
          rating: 4.3,
        },
        {
         
          title: "Summer Shorts",
          price: 1200,
          imageUrl: "/images/summer3.jpg",
          rating: 4.1,
        },
        {
          
          title: "Cozy Hoodie",
          price: 3000,
          imageUrl: "/images/jeans 2.jpg",
          rating: 4.6,
        },
        {
          
          title: "Classic T-Shirt",
          price: 1000,
          imageUrl: "/images/summer2.jpg",
          rating: 4.0,
        },
        {
          
          title: "Woolen Sweater",
          price: 3500,
          imageUrl: "/images/girl1.jpg",
          rating: 4.7,
        },
        {
          
          title: "Chic Skirt",
          price: 2800,
          imageUrl: "/images/girl2.jpg",
          rating: 4.4,
        },
      ];
     
    return (
        <div className='p-6 mt-6 flex gap-14 flex-wrap '>
            {
                Data.map((items, index) => {
                    return (
                        <Card key={index} Data={items}/>
                    )
                })
            }


        </div>
    )
}

export default ClothItem

import React from 'react'
import './Products-Images.css'

function ProductsImages() {
    return (
    <div className='container-images'>
        <h2>Our Products</h2> 
        <div className='images'>
            <img src="/src/assets/pic_1.jpg" alt="pic_1" />
            <img src="/src/assets/pic_2.jpg" alt="pic_2" />
            <img src="/src/assets/pic_3.jpg" alt="pic_3" />
            <img src="/src/assets/pic_4.jpg" alt="pic_4" />    
        </div>
    </div>
    )
}

export default ProductsImages
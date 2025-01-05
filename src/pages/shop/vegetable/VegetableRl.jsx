import React from 'react'
import ProductCard from '../../../Component/productcard/ProductCard';


const VegetableRl = () => {
    const vegproducts = [
        { id: 1, name: 'cucumber 1Kg', price: 160.00, image: 'https://cdn.pixabay.com/photo/2022/07/06/14/04/cucumber-7305231_1280.png' },
        { id: 2, name: 'Tamato 1Kg', price: 75.00, image: 'https://cdn.pixabay.com/photo/2016/03/05/22/06/tomatoes-1239177_1280.jpg' },
        { id: 3, name: 'Capsicum ', price: 62.00, image: 'https://cdn.pixabay.com/photo/2017/07/03/18/15/pepper-2468510_1280.png' },
        { id: 4, name: 'Carot 250g', price: 65.00, image: 'https://cdn.pixabay.com/photo/2014/12/21/23/34/carrot-575529_1280.png' },
        { id: 5, name: 'Red Chilly 250g', price: 65.00, image: 'https://cdn.pixabay.com/photo/2012/04/05/00/41/peppers-25384_1280.png' },
        { id: 6, name: 'Broccoli 250g', price: 65.00, image: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/broccoli-1238250_1280.jpg' },
        { id: 7, name: 'patato 1Kg', price: 160.00, image: 'https://cdn.pixabay.com/photo/2017/02/02/21/29/pumpkin-2033907_1280.png' },
        { id: 8, name: 'Cabbage 1Kg', price: 75.00, image: 'https://cdn.pixabay.com/photo/2021/01/20/15/41/cabbage-5934708_1280.png' },
        { id: 9, name: 'Radish ', price: 62.00, image: 'https://cdn.pixabay.com/photo/2014/12/22/00/02/radish-576640_1280.png' },
        { id: 10, name: 'Cherry 250g', price: 65.00, image: 'https://cdn.pixabay.com/photo/2013/07/13/11/41/pepper-158473_1280.png' },
        { id: 11, name: 'Pears 250g', price: 65.00, image: 'https://img.freepik.com/premium-psd/potato-isolated-transparent-background_191095-46754.jpg?size=626&ext=jpg&ga=GA1.1.14885984.1706803175&semt=ais_hybrid' },
        { id: 12, name: 'Strawberry 250g', price: 65.00, image: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/broccoli-1238250_1280.jpg' },
    ];
  return (
    <>
        <div className="product-grid">
         {vegproducts.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
    </div>
    </>
  )
}

export default VegetableRl

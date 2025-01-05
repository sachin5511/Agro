import React from 'react'
import ProductCard from '../../../../Component/productcard/ProductCard';


const FruitsRl = (props) => {

    const products = [
        { id: 1, name: 'Apple 1Kg', price: 160.00, image: 'https://www.liveorganic.co.in/cdn/shop/files/apples_a12f9930-4700-479c-8edd-d5f8a3f8290a_220x@2x.jpg?v=1697945159' },
        { id: 2, name: 'Grapes 1Kg', price: 75.00, image: 'https://cdn.pixabay.com/photo/2024/04/05/09/01/ai-generated-8676957_1280.png' },
        { id: 3, name: 'Banana 1 dozen', price: 62.00, image: 'https://cdn.pixabay.com/photo/2014/12/21/23/39/bananas-575773_1280.png' },
        { id: 4, name: 'Cherry 250g', price: 65.00, image: 'https://cdn.pixabay.com/photo/2012/04/15/20/53/cherries-35288_1280.png' },
        { id: 5, name: 'Pears 250g', price: 65.00, image: 'https://cdn.pixabay.com/photo/2012/04/26/19/35/pears-42897_1280.png' },
        { id: 6, name: 'Strawberry 250g', price: 65.00, image: 'https://cdn.pixabay.com/photo/2012/04/18/12/54/strawberry-36949_1280.png' },
    ];

    

    if(props.lowtoHighHandler==="lowtohigh"){
      products.sort((a, b) => a.price - b.price);
    }

    if(props.hightoLowhHandler==="hightolow"){
      products.sort((a, b) => b.price - a.price);
    }
  return (
    <div className="product-grid">
         {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
    </div>
  )
}

export default FruitsRl

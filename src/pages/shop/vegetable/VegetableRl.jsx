import React, { useCallback, useMemo, useState } from 'react';
import ProductCard from '../../../Component/card/ProductCard';
import ReactPaginate from 'react-paginate';
import '../../../styles/vegetable.css';

const VegetableRl = ({
  lowtoHighHandler,
  hightoLowHandler,
  searchItemData,
}) => {
   // eslint-disable-next-line 
  const vegproducts = [
    {
      id: 1,
      name: 'cucumber 1Kg',
      price: 160.0,
      image:
        'https://cdn.pixabay.com/photo/2022/07/06/14/04/cucumber-7305231_1280.png',
    },
    {
      id: 2,
      name: 'Tamato 1Kg',
      price: 75.0,
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/22/06/tomatoes-1239177_1280.jpg',
    },
    {
      id: 3,
      name: 'Capsicum ',
      price: 62.0,
      image:
        'https://cdn.pixabay.com/photo/2017/07/03/18/15/pepper-2468510_1280.png',
    },
    {
      id: 4,
      name: 'Carrot 250g',
      price: 65.0,
      image:
        'https://cdn.pixabay.com/photo/2014/12/21/23/34/carrot-575529_1280.png',
    },
    {
      id: 5,
      name: 'Red Chilly 250g',
      price: 65.0,
      image:
        'https://cdn.pixabay.com/photo/2012/04/05/00/41/peppers-25384_1280.png',
    },
    {
      id: 6,
      name: 'Broccoli 250g',
      price: 65.0,
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/broccoli-1238250_1280.jpg',
    },
    {
      id: 7,
      name: 'Potato 1Kg',
      price: 160.0,
      image:
        'https://cdn.pixabay.com/photo/2017/02/02/21/29/pumpkin-2033907_1280.png',
    },
    {
      id: 8,
      name: 'Cabbage 1Kg',
      price: 75.0,
      image:
        'https://cdn.pixabay.com/photo/2021/01/20/15/41/cabbage-5934708_1280.png',
    },
    {
      id: 9,
      name: 'Radish ',
      price: 62.0,
      image:
        'https://cdn.pixabay.com/photo/2014/12/22/00/02/radish-576640_1280.png',
    },
    {
      id: 10,
      name: 'Cherry 250g',
      price: 65.0,
      image:
        'https://cdn.pixabay.com/photo/2013/07/13/11/41/pepper-158473_1280.png',
    },
    {
      id: 11,
      name: 'Pears 250g',
      price: 65.0,
      image:
        'https://img.freepik.com/premium-psd/potato-isolated-transparent-background_191095-46754.jpg?size=626&ext=jpg&ga=GA1.1.14885984.1706803175&semt=ais_hybrid',
    },
    {
      id: 12,
      name: 'Strawberry 250g',
      price: 65.0,
      image:
        'https://cdn.pixabay.com/photo/2016/03/05/19/02/broccoli-1238250_1280.jpg',
    },
    {
      id: 13,
      name: 'Lettuce 500g',
      price: 70.0,
      image:
        'https://cdn.pixabay.com/photo/2018/05/01/07/07/lettuce-3365286_1280.jpg',
    },
    {
      id: 14,
      name: 'Pumpkin 1Kg',
      price: 100.0,
      image:
        'https://cdn.pixabay.com/photo/2017/02/02/21/29/pumpkin-2033907_1280.png',
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;

  const sortedFilteredProducts = useMemo(() => {
    let result = [...vegproducts];

    // Apply sorting
    if (lowtoHighHandler === 'lowtohigh') {
      result.sort((a, b) => a.price - b.price);
    } else if (hightoLowHandler === 'hightolow') {
      result.sort((a, b) => b.price - a.price);
    }

    // Apply filtering
    if (searchItemData.trim() !== '') {
      result = result.filter((vegproducts) =>
        vegproducts.name.toLowerCase().startsWith(searchItemData.toLowerCase())
      );
    }

    return result;
  }, [lowtoHighHandler, hightoLowHandler, searchItemData, vegproducts]);

  // Memoized pagination logic
  const currentItems = useMemo(() => {
    const offset = currentPage * itemsPerPage;
    return sortedFilteredProducts.slice(offset, offset + itemsPerPage);
  }, [currentPage, sortedFilteredProducts]);

  const pageCount = Math.ceil(sortedFilteredProducts.length / itemsPerPage);

  // Stable function reference for page change
  const handlePageChange = useCallback(({ selected }) => {
    setCurrentPage(selected);
  }, []);

  return (
    <div>
      <div className="product-grid">
        {currentItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <ReactPaginate
        previousLabel={'← Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        previousLinkClassName={'prev-button'}
        nextLinkClassName={'next-button'}
        disabledClassName={'disabled'}
        activeClassName={'active'}
      />
    </div>
  );
};
export default VegetableRl;

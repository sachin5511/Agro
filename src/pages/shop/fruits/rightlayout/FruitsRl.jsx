import React, { useState, useMemo, useCallback, useContext } from 'react';
import ProductCard from '../../../../Component/card/ProductCard';
import ReactPaginate from 'react-paginate';
import products from '../../../../Fruitsproduct';


const FruitsRl = ({ lowtoHighHandler, hightoLowHandler, searchItemData }) => {

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;
  
  const sortedFilteredProducts = useMemo(() => {
    let result = [...products];

    // Apply sorting
    if (lowtoHighHandler === 'lowtohigh') {
      result.sort((a, b) => a.price - b.price);
    } else if (hightoLowHandler === 'hightolow') {
      result.sort((a, b) => b.price - a.price);
    }

    // Apply filtering
    if (searchItemData.trim() !== '') {
      result = result.filter((product) =>
        product.name.toLowerCase().startsWith(searchItemData.toLowerCase())
      );
    }

    return result;
  }, [lowtoHighHandler, hightoLowHandler, searchItemData]);

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

export default FruitsRl;

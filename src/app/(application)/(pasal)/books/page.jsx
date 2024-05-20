'use client';

import useGetAllProducts from '@/app/home/_hooks/getAllProducts';
import PageLoadingOverlay from '@/components/common/pageLoadingOverlay';
import ProductCards from '@/components/common/productCards';

export default function BooksPage() {
  const { data: getAllApparel, isLoading } = useGetAllProducts({
    category: 'books',
  });
  return (
    <div
      className={`${
        !isLoading && 'grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'
      }`}
    >
      {isLoading ? (
        <PageLoadingOverlay />
      ) : (
        getAllApparel?.products?.map((product) => (
          <ProductCards key={product?.id} product={product} pasal='books' />
        ))
      )}
    </div>
  );
}

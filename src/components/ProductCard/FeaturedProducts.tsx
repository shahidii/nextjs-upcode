import Link from 'next/link';
import Image from 'next/image';
import './FeaturedProducts.css';
// import { Suspense } from 'react';
import FeaturedProductsSkeleton from '../skeletons/FeaturedProductsSkeleton';
import { Product } from '@/types/Product';
// import ApiService from '@/services/api-services';
import React from 'react';

const FeaturedProducts =  ({ products }: { products: Product[] } ) => {

  // const products = await ApiService.fakestoreapi('/products?limit=6');
  if (!products || products.length === 0) {
    // Show skeleton if no products are passed
    return <FeaturedProductsSkeleton />;
  }

  return (
    // <Suspense fallback={<FeaturedProductsSkeleton />}>
      <div className="row">
        {products.slice(0, 3).map((product: Product) => (
          <div className="col-md-4" key={product.id}>
            <Link href={`/product/${product.id}`} className="text-decoration-none">
              <div className="card product-card shadow-sm">
                <Image 
                  src={product.image} 
                  alt={product.title} 
                  className="card-img-top" 
                  width={500} 
                  height={500}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-rating">
                    ⭐️⭐️⭐️⭐️⭐️ (based on {product.reviews || 0} reviews)
                  </p>
                  <div className="offer-box">Today&apos;s Offer</div>
                  <p className="price">₹{(product.price * 80).toFixed(2)}</p>
                  <p className="mrp">
                    <del>MRP : ₹{(product.price * 100).toFixed(2)}</del>
                  </p>
                  <button className="btn btn-outline-primary">View Details</button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    // </Suspense>
  );
};

export default FeaturedProducts;

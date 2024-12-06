
'use client';
import { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import ApiService from '@/services/api-services';
import './styles/Home.css';
import FeaturedProducts from '@/components/ProductCard/FeaturedProducts';
import FeaturedProductsSkeleton from '@/components/skeletons/FeaturedProductsSkeleton';

const Home = () => {
  const [products, setProducts] = useState([]); // Store products
  // const [loading, setLoading] = useState(true); // Manage loading state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await ApiService.fakestoreapi('/products?limit=6');
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  // const products = await ApiService.fakestoreapi('/products?limit=6');

  return (
    <div>
      <section className="hero">
        <div className="container hero-title">
          <h1 id='heading'>
            Welcome to <span className="banner-Max">Max</span>
          </h1>
          <p>Your destination for the latest in fashion and tech</p>
          <Link href="/products" className="btn btn-outline-primary">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products container py-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        {/* {loading ? (
          <FeaturedProductsSkeleton /> // Show skeleton while loading
        ) : (
          <Suspense fallback={<FeaturedProductsSkeleton />}>
          <FeaturedProducts products={products} /> 
          </Suspense>
        )} */}
        <Suspense fallback={<FeaturedProductsSkeleton />}>
          <FeaturedProducts products={products} />
        </Suspense>
      </section>
    </div>
  );
};

export default Home;

import './featuredProductsSkeleton.css';

const FeaturedProductsSkeleton = () => {
  return (
    <div className="row">
      {Array.from({ length: 3 }).map((_, index) => (
        <div className="col-md-4" key={index}>
          <div className="card product-card shadow-sm skeleton-card">
            <div className="skeleton-image"></div>
            <div className="card-body">
              <div className="skeleton-title"></div>
              <div className="skeleton-rating"></div>
              <div className="skeleton-offer"></div>
              <div className="skeleton-price"></div>
              <div className="skeleton-mrp"></div>
              <div className="skeleton-button"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProductsSkeleton;

'use client';
import Link from 'next/link';
import { useState , useEffect } from 'react';
import './styles.css';
import { useRouter } from 'next/navigation';

const Header = () => {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      // .then((Bootstrap) => {
      //   // Bootstrap JS is loaded, so you can use its components like dropdowns
      //   console.log('Bootstrap JS loaded');
      // })
      // .catch((error) => {
      //   console.error('Error loading Bootstrap JS:', error);
      // });
  }, []); //

  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert('You have logged out.');
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    alert('You have logged in.');
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">

          {/* Brand */}
          <Link href="/" className="navbar-brand">
            Modern Shop
          </Link>

          {/* Navbar Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            title="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/products" className="nav-link">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/cart" className="nav-link">
                  <i className="bi bi-cart"></i> Cart
                </Link>
              </li>

              {/* Search Box */}
              <li className="nav-item ms-3">
                <form className="d-flex search-box">
                  <input
                    type="text"
                    className="form-control me-2"
                    placeholder="Search products..."
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-outline-info"
                    type="submit"
                    aria-label="Search"
                    title="Search"
                  >
                    <i className="bi bi-search"></i>
                  </button>
                </form>
              </li>
               {/* Search box centered between brand and nav links */}
               {/* <li className="nav-item  ms-3 search-layout">
                <form className="search-box" >
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search products"
                  />
                  <button type="submit" aria-label="Search">
                    <i className="bi bi-search"></i>
                  </button>
                </form>
              </li> */}

              {/* Profile Dropdown */}
              <li className="nav-item dropdown ms-3">
                {isLoggedIn ? (
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    id="profileDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    title="Profile Menu"
                  >
                    Profile
                  </a>
                ) : (
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    id="authDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    title="Login or Signup"
                  >
                    Login / Signup
                  </a>
                )}
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby={isLoggedIn ? 'profileDropdown' : 'authDropdown'}
                >
                  {isLoggedIn ? (
                    <>
                      <li>
                        <Link href="/profile" className="dropdown-item">
                          Profile Settings
                        </Link>
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={handleLogout}
                          title="Logout"
                        >
                          Logout
                        </button>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        {/* <Link href="/login" className="dropdown-item" >
                          Login
                        </Link> */}
                        <button
                          className="dropdown-item"
                          onClick={handleLogin}
                          title="Login"
                        >
                          Login
                        </button>
                      </li>
                      <li>
                        {/* <Link href="/signup" className="dropdown-item">
                          Signup
                        </Link> */}
                        <button
                          className="dropdown-item"
                          onClick={handleLogin}
                          title="Signup"
                        >
                          Signup
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </li>
            </ul>
          </div>
        </div>
         {/* Back Button */}
         <button
            className="btn btn-outline-warning   me-3"
            onClick={() => router.replace('/products')}
            aria-label="Go Back"
            title="Go Back"
          >
            <i className="bi bi-arrow-left"></i>
          </button>
      </nav>
    </header>
  );
};

export default Header;

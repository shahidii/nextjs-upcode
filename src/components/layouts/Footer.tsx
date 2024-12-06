import './styles.css';
const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container text-center">
        <p className="mb-1">&copy; 2024 Modern Shop. All rights reserved.</p>
        <p>
          Follow us: 
          <a href="#" className="text-light ms-2"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-light ms-2"><i className="bi bi-instagram"></i></a>
          <a href="#" className="text-light ms-2"><i className="bi bi-twitter"></i></a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

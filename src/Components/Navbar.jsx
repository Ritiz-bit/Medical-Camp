import { Link } from "react-router-dom";

export const Navbar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 40px',
    background: 'linear-gradient(90deg, #ffecd2, #fcb69f)', 
    height: '70px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    position: 'sticky',
    top: 0,
    Index: 1000,
  }
   const titleStyle = {
    fontSize: '24px',
    fontWeight: '700',
    color: '#444',
    letterSpacing: '1px',
  }
  const linksContainer = {
    display: 'flex',
    gap: '25px',
  }
  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    padding: '10px 18px',
    borderRadius: '6px',
    transition: 'all 0.3s ease',
    fontWeight: '500',
  }
  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = '#333';
    e.target.style.color = '#fff';
    e.target.style.transform = 'translateY(-2px)';
    e.target.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
  }
  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = 'transparent';
    e.target.style.color = '#333';
    e.target.style.transform = 'translateY(0)';
    e.target.style.boxShadow = 'none';
  }

  return (
    <nav style={navStyle}>
      <div style={titleStyle}>Medical Camp Registration</div>
      <div style={linksContainer}>
        {['/', '/Contact', '/Register', '/About', '/Details'].map((path, idx) => {
          const labels = ['Home', 'Contact', 'Registration', 'About', 'Details'];
          return (
            <Link  key={idx}  to={path}  style={linkStyle} onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave} >{labels[idx]}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

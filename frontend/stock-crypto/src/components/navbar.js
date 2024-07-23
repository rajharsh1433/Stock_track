import React from 'react';

const Navbar = () => {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: 'white',
    },
    brand: {
      fontSize: '1.5em',
      fontWeight: 'bold',
    },
    navLinks: {
      display: 'flex',
      gap: '15px',
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '1em',
    },
  };

  return (
    <div style={styles.navbar}>
      <div style={styles.brand}>Coin Pro</div>
      <div style={styles.navLinks}>
        <a href="#home" style={styles.link}>Home</a>
        <a href="#about" style={styles.link}>About</a>
        <a href="#services" style={styles.link}>Services</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </div>
    </div>
  );
};

export default Navbar;

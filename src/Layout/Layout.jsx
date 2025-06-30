import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Logo,
  Link,
  Nav,
  BurgerButton,
  MobileMenu,
} from './Layout.styled';

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          Logo
        </Logo>

        <BurgerButton onClick={toggleMenu} aria-label="Toggle menu">
          ☰
        </BurgerButton>

        <Nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/news">NewsPage</Link>
          <Link to="/todo">TodoPage</Link>
          <Link to="/about">About</Link>
          <Link to="/buttons">Buttons</Link>
          <Link to="/posts">Posts</Link>
        </Nav>

        {isOpen && (
          <MobileMenu>
            <Link to="/" end onClick={closeMenu}>
              Home
            </Link>
            <Link to="/news" onClick={closeMenu}>
              NewsPage
            </Link>
            <Link to="/todo" onClick={closeMenu}>
              TodoPage
            </Link>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
            <Link to="/buttons" onClick={closeMenu}>
              Buttons
            </Link>
            <Link to="/posts" onClick={closeMenu}>
              Posts
            </Link>
          </MobileMenu>
        )}
      </Header>

      <Outlet />
    </Container>
  );
};

export default Layout;

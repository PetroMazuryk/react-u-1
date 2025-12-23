import {useState, useEffect} from "react";
import {Outlet} from "react-router-dom";

import {
  Container,
  Header,
  Logo,
  Link,
  Nav,
  BurgerButton,
  MobileMenu,
} from "./Layout.styled";

import PasswordModal from "../components/PasswordModal/PasswordModal";

const STORAGE_KEY = "isAuthorized";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const storedAuth = localStorage.getItem(STORAGE_KEY);
    if (storedAuth === "true") {
      setIsAuthorized(true);
    }
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const handleSuccessAuth = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setIsAuthorized(true);
  };

  if (!isAuthorized) {
    return <PasswordModal onSuccess={handleSuccessAuth} />;
  }

  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          Logo
        </Logo>

        <BurgerButton onClick={toggleMenu}>☰</BurgerButton>

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

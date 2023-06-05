import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, Link } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          Logo
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/news">NewsPage</Link>
          <Link to="/todo">TodoPage</Link>
          <Link to="/about">About</Link>
          {/* <Link to="/posts">Posts</Link> */}
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};

export default Layout;

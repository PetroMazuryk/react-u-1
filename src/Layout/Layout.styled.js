import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  position: relative;
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const Link = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 8px 12px;
  border-radius: 8px;

  text-decoration: none;
  color: #1f2937;

  font-weight: 500;
  font-size: 14px;

  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.1s ease;

  &:hover {
    background-color: #ecf0f9ff;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.4);
  }

  &.active {
    color: #ffffff;
    background-color: #fb710eff;
    box-shadow: 0 4px 10px rgba(249, 115, 22, 0.35);
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 8px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BurgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  z-index: 999;

  a {
    padding: 12px 16px;
    border-bottom: 1px solid #eee;
    text-align: right;

    &:last-child {
      border-bottom: none;
    }
  }
`;

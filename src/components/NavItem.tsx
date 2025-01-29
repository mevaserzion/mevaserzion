import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface NavItemProps {
  title: string;
  path: string;
}

const Nav = styled.div`
  background-color: white;
  height: 100%;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: blue;
    color: white;
  }
`;

export default function NavItem({ title, path }: NavItemProps) {
  return (
    <Nav>
      <Link to={path}>{title}</Link>
    </Nav>
  );
}

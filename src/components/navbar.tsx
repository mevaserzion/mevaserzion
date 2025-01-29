import styled from 'styled-components';
import { useLanguageStore } from '../store';
import { consts } from '../consts';
import { Link } from 'react-router-dom';

const Navbar = styled.div`
  margin: 0;
  padding: 0;
  background-color: white;
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 100vw;
  justify-content: space-between;
`;

const Group = styled.div`
  display: flex;
  flex-direction: row;
`;

const NavItem = styled.div`
  background-color: white;
  height: 100%;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: blue;
    color: white;
  }
`;

export default function NavBar() {
  const lang = useLanguageStore((state) => state.lang) as 'en' | 'he'; // ✅ Ensures correct type
  const en = useLanguageStore((state) => state.english);
  const he = useLanguageStore((state) => state.hebrew);

  return (
    <Navbar>
      <Group>
        <NavItem as={Link} to='/'>
          {consts.home[lang].title}
        </NavItem>
        <NavItem as={Link} to='/about'>
          {consts.about[lang].title}
        </NavItem>
        <NavItem as={Link} to='/schedule'>
          {consts.schedule[lang].title}
        </NavItem>
        <NavItem as={Link} to='/shiurim'>
          {consts.shiurim[lang].title}
        </NavItem>
        <NavItem as={Link} to='/contact'>
          {consts.contact[lang].title}
        </NavItem>
        <NavItem as={Link} to='/donate'>
          {consts.donate[lang].title}
        </NavItem>
      </Group>
      <Group>
        <NavItem onClick={he}>HE</NavItem>
        <NavItem onClick={en}>EN</NavItem>
      </Group>
    </Navbar>
  );
}

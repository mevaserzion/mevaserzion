// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useLanguageStore } from '../store';
import { consts } from '../consts';

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

  &:hover {
    background-color: blue;
    color: white;
  }
`;

export default function NavBar() {
  const lang = useLanguageStore((state) => state.lang);
  const en = useLanguageStore((state) => state.english);
  const he = useLanguageStore((state) => state.hebrew);

  return (
    <Navbar>
      <Group>
        <NavItem>{consts.home[lang].title}</NavItem>
        <NavItem>{consts.about[lang].title}</NavItem>
        <NavItem>{consts.schedule[lang].title}</NavItem>
        <NavItem>{consts.shiurim[lang].title}</NavItem>
        <NavItem>{consts.contact[lang].title}</NavItem>
        <NavItem>{consts.donate[lang].title}</NavItem>
      </Group>
      <Group>
        <NavItem onClick={he}>HE</NavItem>
        <NavItem onClick={en}>EN</NavItem>
      </Group>
    </Navbar>
  );
}

import styled from 'styled-components';
import { useLanguageStore } from '../store';
import { home, about, contact, schedule, shiurim, donate } from '../consts';
import { Link } from 'react-router-dom';

const NavContainer = styled.div<{ $isHebrew: boolean }>`
  margin: 0;
  padding: 0;
  background-color: white;
  display: flex;
  flex-direction: ${({ $isHebrew }) => ($isHebrew ? 'row-reverse' : 'row')};
  height: 50px;
  width: 100%;
  justify-content: space-between;
`;

const Group = styled.div<{ $isHebrew: boolean }>`
  display: flex;
  flex-direction: ${({ $isHebrew }) => ($isHebrew ? 'row-reverse' : 'row')};
`;

const NavItem = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: steelblue;
    color: white;
  }
`;

export default function Navbar() {
  const lang = useLanguageStore((state) => state.lang);
  const en = useLanguageStore((state) => state.english);
  const he = useLanguageStore((state) => state.hebrew);

  return (
    <NavContainer $isHebrew={lang === 'he'}>
      <Group $isHebrew={lang === 'he'}>
        <NavItem as={Link} to='/'>
          <p>{home[lang].title}</p>
        </NavItem>
        <NavItem as={Link} to='/about'>
          <p>{about[lang].title}</p>
        </NavItem>
        <NavItem as={Link} to='/schedule'>
          <p>{schedule[lang].title}</p>
        </NavItem>
        <NavItem as={Link} to='/shiurim'>
          <p>{shiurim[lang].title}</p>
        </NavItem>
        <NavItem as={Link} to='/contact'>
          <p>{contact[lang].title}</p>
        </NavItem>
        <NavItem
          as={Link}
          to='https://app.icount.co.il/m/4be4e/c53e2p4u664a0b9a006?utm_source=iCount&utm_medium=paypage&utm_campaign=4https://app.icount.co.il/m/4be4e/c53e2p4u664a0b9a006?utm_source=iCount&utm_medium=paypage&utm_campaign=4'
          target='_blank'
          rel='noopener noreferrer'
        >
          {donate[lang].title}
        </NavItem>
      </Group>
      {lang === 'he' ? (
        <NavItem onClick={en}>English</NavItem>
      ) : (
        <NavItem onClick={he}>עברית</NavItem>
      )}
    </NavContainer>
  );
}

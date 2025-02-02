import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useLanguageStore } from '../store';
import { home, about, contact, schedule, shiurim, donate } from '../consts';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.jpeg';

const NavContainer = styled.div<{ $isHebrew: boolean }>`
  background-color: white;
  display: flex;
  flex-direction: ${({ $isHebrew }) => ($isHebrew ? 'row-reverse' : 'row')};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    text-align: center;
    text-decoration: none !important;
    color: black;

    &:hover {
      color: white;
    }
  }

  img {
    width: 100px;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    img {
      display: none; /* Hide logo on mobile */
    }
  }
`;

const MobileHomeText = styled.div`
  display: none;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Hamburger = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Group = styled.div<{ $isHebrew: boolean }>`
  display: flex;
  flex-direction: ${({ $isHebrew }) => ($isHebrew ? 'row-reverse' : 'row')};
  align-items: center;

  @media (max-width: 768px) {
    display: none; /* Hide desktop menu on mobile */
  }
`;

const NavItem = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: black;
  font-family: 'Roboto', serif;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: steelblue;
    color: white;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 0;
  }
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const lang = useLanguageStore((state) => state.lang);
  const en = useLanguageStore((state) => state.english);
  const he = useLanguageStore((state) => state.hebrew);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <NavContainer $isHebrew={lang === 'he'}>
      <Group $isHebrew={lang === 'he'}>
        <NavItem>
          <Link to='/'>
            <LogoContainer>
              {isMobile ? (
                <MobileHomeText>{home[lang].title}</MobileHomeText>
              ) : (
                <>
                  <img src={logo} alt='Logo' />
                </>
              )}
            </LogoContainer>
          </Link>
        </NavItem>

        {/* Desktop Navigation */}
        <NavItem as={Link} to='/about'>
          {about[lang].title}
        </NavItem>
        <NavItem as={Link} to='/schedule'>
          {schedule[lang].title}
        </NavItem>
        <NavItem as={Link} to='/shiurim'>
          {shiurim[lang].title}
        </NavItem>
        <NavItem as={Link} to='/contact'>
          {contact[lang].title}
        </NavItem>
        <NavItem
          as={Link}
          to='https://app.icount.co.il/m/4be4e/c53e2p4u664a0b9a006?'
          target='_blank'
          rel='noopener noreferrer'
        >
          {donate[lang].title}
        </NavItem>
      </Group>

      {/* Mobile Menu Toggle */}
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>

      {/* Mobile Navigation */}
      <MobileMenu $isOpen={isOpen}>
        <NavItem as={Link} to='/' onClick={() => setIsOpen(false)}>
          {home[lang].title}
        </NavItem>
        <NavItem as={Link} to='/about' onClick={() => setIsOpen(false)}>
          {about[lang].title}
        </NavItem>
        <NavItem as={Link} to='/schedule' onClick={() => setIsOpen(false)}>
          {schedule[lang].title}
        </NavItem>
        <NavItem as={Link} to='/shiurim' onClick={() => setIsOpen(false)}>
          {shiurim[lang].title}
        </NavItem>
        <NavItem as={Link} to='/contact' onClick={() => setIsOpen(false)}>
          {contact[lang].title}
        </NavItem>
        <NavItem
          as={Link}
          to='https://app.icount.co.il/m/4be4e/c53e2p4u664a0b9a006?'
          target='_blank'
          rel='noopener noreferrer'
          onClick={() => setIsOpen(false)}
        >
          {donate[lang].title}
        </NavItem>
      </MobileMenu>

      {/* Language Toggle */}
      {lang === 'he' ? (
        <NavItem onClick={en}>English</NavItem>
      ) : (
        <NavItem onClick={he}>עברית</NavItem>
      )}
    </NavContainer>
  );
}

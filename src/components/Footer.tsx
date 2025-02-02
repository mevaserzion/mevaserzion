import styled from 'styled-components';

const P = styled.p`
  text-align: center;
  font-size: 1rem;
  font-family: 'Roboto', serif;
  color: white;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 5px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  min-height: 50px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export default function Footer() {
  return (
    <Container>
      <P>
        Created by{' '}
        <a
          href='https://aaronwolf.dev/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Aaron Wolf
        </a>
      </P>
    </Container>
  );
}

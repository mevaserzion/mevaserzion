import styled from 'styled-components';

const P = styled.p`
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

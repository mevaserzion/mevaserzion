import styled from 'styled-components';

interface ImageProps {
  path: string;
  alt?: string; // Make alt optional with default
}

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export default function Image({ path, alt = 'picture' }: ImageProps) {
  return <Img src={path} alt={alt} />;
}

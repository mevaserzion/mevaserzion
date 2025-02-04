import styled from 'styled-components';
import { useLanguageStore } from '../store';

interface ParProps {
  id?: number;
  text?: string;
  tag: string;
}

const P = styled.p<{ $isHebrew: boolean }>`
  text-align: ${({ $isHebrew }) => ($isHebrew ? 'right' : 'left')};
  direction: ${({ $isHebrew }) => ($isHebrew ? 'rtl' : 'ltr')};
  unicode-bidi: bidi-override;
`;

export default function Par({ text, tag = 'p', id }: ParProps) {
  const lang = useLanguageStore((state) => state.lang);
  return (
    <P as={tag} $isHebrew={lang === 'he'} key={id?.toString()}>
      {text}
    </P>
  );
}

import styled from 'styled-components';
import { useLanguageStore } from '../store';

type TextType = 'p' | 'h1' | 'h2' | 'h3';

interface ParProps {
  text?: string;
  type: TextType;
}

const P = styled.p<{ $isHebrew: boolean }>`
  text-align: ${({ $isHebrew }) => ($isHebrew ? 'right' : 'left')};
  direction: ${({ $isHebrew }) => ($isHebrew ? 'rtl' : 'ltr')};
  unicode-bidi: bidi-override;
`;

export default function Par({ text, type = 'p' }: ParProps) {
  const lang = useLanguageStore((state) => state.lang);
  return (
    <P as={type} $isHebrew={lang === 'he'}>
      {text}
    </P>
  );
}

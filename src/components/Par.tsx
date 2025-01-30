import styled from 'styled-components';
import { useLanguageStore } from '../store';

type ParProps = {
  text: string;
};

const P = styled.p<{ $isHebrew: boolean }>`
  text-align: ${({ $isHebrew }) => ($isHebrew ? 'right' : 'left')};
`;

export default function Par({ text }: ParProps) {
  const lang = useLanguageStore((state) => state.lang);
  return <P $isHebrew={lang === 'he'}>{text}</P>;
}

// import styled from 'styled-components';
import { useLanguageStore } from '../store';
import { consts } from '../consts';
import Par from '../components/Text';

export default function Home() {
  const lang = useLanguageStore((state) => state.lang);
  return (
    <>
      <Par type='h1' text={consts.home[lang].title} />
      <Par type='p' text={consts.home[lang]?.content} />
    </>
  );
}

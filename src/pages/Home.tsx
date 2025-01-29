// import styled from 'styled-components';
import { useLanguageStore } from '../store';
import { consts } from '../consts';

export default function Home() {
  const lang = useLanguageStore((state) => state.lang);
  return (
    <>
      <h1>{consts.home[lang].title}</h1>
      <p>{consts.home[lang].content}</p>
    </>
  );
}

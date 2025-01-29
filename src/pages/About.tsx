// import styled from 'styled-components';
import { useLanguageStore } from '../store';
import { consts } from '../consts';

export default function About() {
  const lang = useLanguageStore((state) => state.lang);
  return (
    <>
      <h1>{consts.about[lang].title}</h1>
      <p>{consts.about[lang].content}</p>
    </>
  );
}

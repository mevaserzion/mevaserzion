// import styled from 'styled-components';
import { useLanguageStore } from '../store';
import { consts } from '../consts';
import Par from '../components/Par';

export default function About() {
  const lang = useLanguageStore((state) => state.lang);
  return (
    <>
      <Par type='h1' text={consts.about[lang].title} />
      <Par type='p' text={consts.about[lang].content} />
    </>
  );
}

// import styled from 'styled-components';
import { useLanguageStore } from '../store';
import { about } from '../consts';
import Par from '../components/Par';

export default function About() {
  const lang = useLanguageStore((state) => state.lang);
  return (
    <>
      <Par tag='h1' text={about[lang].title} />
      {/* <Par tag='p' text={about[lang].content} /> */}
    </>
  );
}

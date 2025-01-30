// import styled from 'styled-components';
import { useLanguageStore } from '../store';
import { consts } from '../consts';
import Par from '../components/Par';

export default function Home() {
  const lang = useLanguageStore((state) => state.lang);
  return (
    <>
      <h1>{consts.home[lang].title}</h1>
      <Par text={consts.home[lang]?.content} />
    </>
  );
}

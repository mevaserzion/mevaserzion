// import styled from 'styled-components';
import { useLanguageStore } from '../store';
import { consts } from '../consts';
import Par from '../components/Par';
import Image from '../components/Image';
import shulhero from '../assets/shul.jpg';

export default function Home() {
  const lang = useLanguageStore((state) => state.lang);
  return (
    <>
      <Image path={shulhero} alt='shul' />
      {/* <img src={shulhero} alt='mevaser zion' /> */}
      <Par type='h1' text={consts.home[lang].title} />
      <Par type='p' text={consts.home[lang]?.content} />
    </>
  );
}

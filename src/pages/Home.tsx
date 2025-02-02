// import styled from 'styled-components';
import { useLanguageStore } from '../store';
import { home } from '../consts';
import Par from '../components/Par';
import Image from '../components/Image';
import shulhero from '../assets/shul.jpg';

export default function Home() {
  const lang = useLanguageStore((state) => state.lang);
  return (
    <>
      <Image path={shulhero} alt='shul' />
      <Par tag='h1' text={home[lang].title} />
      {home[lang].content?.map((info) => (
        <Par tag={info.tag} text={info.text} />
      ))}
    </>
  );
}

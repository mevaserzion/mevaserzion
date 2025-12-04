// import styled from 'styled-components';
import { useLanguageStore } from '../store';
import { history } from '../consts';
import Par from '../components/Par';

export default function About() {
  const lang = useLanguageStore((state) => state.lang);

  return (
    <>
      <Par tag='h1' text={history[lang].title} />
      {history[lang].content?.map((info) => (
        <Par tag={info.tag} text={info.text} key={info.id} />
      ))}
    </>
  );
}

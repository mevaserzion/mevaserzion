import { useLanguageStore } from '../store';
import { consts } from '../consts';

export default function Contact() {
  const lang = useLanguageStore((state) => state.lang);
  return (
    <>
      <h1>{consts.contact[lang].title}</h1>
      <p>{consts.contact[lang].content}</p>
    </>
  );
}

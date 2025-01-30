import { useLanguageStore } from '../store';
import { consts } from '../consts';
import Par from '../components/Par';

export default function Contact() {
  const lang = useLanguageStore((state) => state.lang);
  return (
    <>
      <Par type='h1' text={consts.contact[lang].title} />
      <Par type='p' text={consts.contact[lang].content} />
    </>
  );
}

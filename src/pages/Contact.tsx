import { useLanguageStore } from '../store';
import { contact } from '../consts';
import Par from '../components/Par';

export default function Contact() {
  const lang = useLanguageStore((state) => state.lang);
  return (
    <>
      <Par tag='h1' text={contact[lang].title} />
      {/* <Par tag='p' text={contact[lang].content} /> */}
    </>
  );
}

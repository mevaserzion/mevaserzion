import { useLanguageStore } from '../store';
import { contact } from '../consts';
import Par from '../components/Par';

export default function Contact() {
  const lang = useLanguageStore((state) => state.lang);
  return (
    <>
      <Par tag='h1' text={contact[lang].title} />
      {contact[lang].content?.map((info) => (
        <Par id={info?.id} tag={info.tag} text={info.text} />
      ))}

      <Par tag='h1' text="There's going to be a form here!!!" />
    </>
  );
}

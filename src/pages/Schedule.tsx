import { useLanguageStore } from '../store';
import { consts } from '../consts';

export default function Schedule() {
  const lang = useLanguageStore((state) => state.lang);
  return (
    <>
      <h1>{consts.schedule[lang].title}</h1>
      <p>{consts.schedule[lang].content}</p>
    </>
  );
}

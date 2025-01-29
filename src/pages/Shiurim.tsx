import { useLanguageStore } from '../store';
import { consts } from '../consts';

export default function Shiurim() {
  const lang = useLanguageStore((state) => state.lang);
  return (
    <>
      <h1>{consts.shiurim[lang].title}</h1>
      <p>{consts.shiurim[lang].content}</p>
    </>
  );
}

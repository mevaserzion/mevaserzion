import { useLanguageStore } from '../store';
import { consts } from '../consts';

export default function Donate() {
  const lang = useLanguageStore((state) => state.lang);
  return (
    <>
      <h1>{consts.donate[lang].title}</h1>
      <p>{consts.donate[lang].content}</p>
    </>
  );
}

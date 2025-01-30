import { useLanguageStore } from '../store';
import { consts } from '../consts';
import Par from '../components/Par';

export default function Donate() {
  const lang = useLanguageStore((state) => state.lang);
  return (
    <>
      <Par type='h1' text={consts.donate[lang].title} />
      <Par type='p' text={consts.donate[lang].content} />
    </>
  );
}

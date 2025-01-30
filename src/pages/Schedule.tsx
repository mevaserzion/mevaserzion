import { useLanguageStore } from '../store';
import { consts } from '../consts';
import Par from '../components/Par';

export default function Schedule() {
  const lang = useLanguageStore((state) => state.lang);
  return (
    <>
      <Par type='h1' text={consts.schedule[lang].title} />
      <Par type='p' text={consts.schedule[lang].content} />
    </>
  );
}

import { useLanguageStore } from '../store';
import { schedule } from '../consts';
import Par from '../components/Par';

export default function Schedule() {
  const lang = useLanguageStore((state) => state.lang);

  return (
    <>
      <Par tag='h1' text={schedule[lang].title} />
      <iframe
        loading='lazy'
        style={{
          width: '100%',
          height: '700px',
          top: '0',
          left: '0',
          border: 'none',
          padding: '0',
          margin: '0'
        }}
        src='https://www.canva.com/design/DAGaxVIehac/atI8pr4vJoKb-xfsSPkWYA/view?embed'
      ></iframe>
    </>
  );
}

import { useLanguageStore } from '../store';
import { consts } from '../consts';
import Par from '../components/Par';

export default function Schedule() {
  const lang = useLanguageStore((state) => state.lang);

  return (
    <>
      <Par type='h1' text={consts.schedule[lang].title} />
      {/* <Par type='p' text={consts.schedule[lang].content} /> */}
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

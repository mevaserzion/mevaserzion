import { useLanguageStore } from '../store';
import { schedule } from '../consts';
import Par from '../components/Par';
import { useEffect, useState } from 'react';

const sheetsUrl = `https://docs.google.com/spreadsheets/d/e/2PACX-1vR1GwVycC7AULjf1tFvGu4n88GJ4qHCaq55NXB_Osr7hsF2gLQKoYdw1tgGZtNXrMN_Q9ZwvjcdUB1g/pub?output=csv`;

const fetchCSV = async (): Promise<string[][]> => {
  const response = await fetch(sheetsUrl);
  const text = await response.text();
  return text.split('\n').map((row) => row.split(','));
};

export default function Schedule() {
  const lang = useLanguageStore((state) => state.lang);

  const [scheduleURL, setScheduleURL] = useState<string[][]>([]);

  useEffect(() => {
    fetchCSV().then(setScheduleURL);
  }, []);

  const iframeSrc: string | undefined =
    scheduleURL.length > 0 ? scheduleURL[1][0] : undefined;

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
        // src='https://www.canva.com/design/DAGaxVIehac/atI8pr4vJoKb-xfsSPkWYA/view?embed'
        src={iframeSrc || ''}
      ></iframe>
    </>
  );
}

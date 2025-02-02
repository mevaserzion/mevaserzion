import { useLanguageStore } from '../store';
import { shiurim } from '../consts';
import Par from '../components/Par';

export default function Shiurim() {
  const lang = useLanguageStore((state) => state.lang);

  return (
    <>
      <Par tag='h1' text={shiurim[lang].title} />
      {/* <p>{shiurim[lang].content}</p> */}

      <Par tag='h2' text={shiurim[lang].title2} />
      <iframe
        style={{ borderRadius: '12px', width: '100%', height: '315px' }}
        src='https://www.youtube.com/embed/videoseries?list=@baruch_Weintraub_Mevaser_Zion'
        frameBorder='0'
        allowFullScreen
        loading='lazy'
      ></iframe>

      <h2>Spotify</h2>
      <iframe
        style={{ borderRadius: '12px', width: '100%', height: '352px' }}
        src='https://open.spotify.com/embed/show/0iJnheMf7CfA98IDKxxbi4?utm_source=generator'
        frameBorder='0'
        allowFullScreen
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'
      ></iframe>
    </>
  );
}

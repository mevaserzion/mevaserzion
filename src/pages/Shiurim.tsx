import { useLanguageStore } from '../store';
import { consts } from '../consts';
import Par from '../components/Par';

export default function Shiurim() {
  const lang = useLanguageStore((state) => state.lang);

  return (
    <>
      <Par type='h1' text={consts.shiurim[lang].title} />
      <p>{consts.shiurim[lang].content}</p>

      <Par type='h2' text='Youtube' />
      <iframe
        style={{ borderRadius: '12px', width: '100%', height: '315px' }}
        src='https://www.youtube.com/embed/videoseries?list=@baruch_Weintraub_Mevaser_Zion'
        frameBorder='0'
        allowFullScreen
        loading='lazy'
      ></iframe>

      <Par type='h2' text='Spotify' />
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

import { useLanguageStore } from '../store';
import { shiurim } from '../consts';
import Par from '../components/Par';

export default function Shiurim() {
  const lang = useLanguageStore((state) => state.lang);

  return (
    <>
      <Par tag='h1' text={shiurim[lang].title} />
      {/* <p>{shiurim[lang].content}</p> */}

      {/* <Par tag='h2' text={shiurim[lang].title2} />
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
      ></iframe> */}

      <iframe
        title='דרשות, שיעורים, ודברי תורה מרב ברוך וינטרוב ובית הכנסת מבשר ציון'
        // allowTransparency='true'
        height='315'
        width='100%'
        style={{
          border: 'none',
          height: '315px',
          minWidth: 'min(100%, 430px)'
        }}
        scrolling='no'
        data-name='pb-iframe-player'
        src='https://www.podbean.com/player-v2/?i=uy59j-13663d8-pbblog-playlist&share=1&download=1&rtl=0&fonts=Arial&skin=1&font-color=auto&logo_link=episode_page&order=episodic&limit=10&filter=all&ss=a713390a017602015775e868a2cf26b0&btn-skin=7&size=315'
        loading='lazy'
        allowFullScreen
      ></iframe>
    </>
  );
}

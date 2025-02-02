interface LanguageContent {
  title: string;
  title2?: string;
  content?: {
    tag: string;
    text: string;
  }[];
}

interface Constant {
  en: LanguageContent;
  he: LanguageContent;
}

export const home: Constant = {
  en: {
    title: 'Home',
    content: [
      {
        tag: 'p',
        text: 'Tel Mond, positioned within the orchards and strawberry fields of the Sharon region, is a dynamic blend of Orthodox, traditional and secular Jews living in harmony as they raise their families in a warm, intimate community.'
      },
      { tag: 'p', text: 'more content' }
    ]
  },
  he: {
    title: 'בית',
    content: [
      {
        tag: 'p',
        text: 'תל מונד, הממוקמת בתוך המטעים ושדות התותים של אזור השרון, היא שילוב דינמי של יהודים אורתודוקסים, מסורתיים וחילונים החיים בהרמוניה כשהם מגדלים את משפחותיהם בקהילה חמה ואינטימית.'
      },
      { tag: 'p', text: 'עוד' }
    ]
  }
};

export const about: Constant = {
  en: {
    title: 'About',
    content: [
      {
        tag: 'p',
        text: `Mevaser Zion is a vibrant Modern Orthodox community located in Tel Mond, a suburban town in Israel's Sharon region. The community is known for its active engagement in religious and social activities, centered around the Mevaser Zion Synagogue. This synagogue serves as a hub for religious services, holiday programming, and community events, playing a pivotal role in welcoming and assisting new immigrant families as they acclimate to life in Israel.`
      },

      {
        tag: 'p',
        text: `The synagogue offers a range of classes and programs in both Hebrew and English, catering to the spiritual and educational needs of its members. The community's commitment to education is further exemplified by the local religious elementary school, Ohr Torah Tel Mond, recognized as a leading institution in the Sharon region.`
      },
      {
        tag: 'p',
        text: `In June 2013, the Mevaser Zion community celebrated the inauguration of their newly built synagogue, marking a significant milestone in their development. The event was attended by notable figures, including Naftali Bennett, the then Minister for the Economy. `
      }
    ]
  },
  he: { title: 'אודות', content: [] }
};

export const schedule: Constant = {
  en: { title: 'Schedule', content: [] },
  he: { title: 'לוח זמנים', content: [] }
};

export const shiurim: Constant = {
  en: { title: 'Shiurim', content: [], title2: 'YouTube' },
  he: { title: 'שיעורים', content: [], title2: 'יוטיוב' }
};

export const contact: Constant = {
  en: { title: 'Contact', content: [] },
  he: { title: 'צור קשר', content: [] }
};

export const donate: Constant = {
  en: { title: 'Donate' },
  he: { title: 'תרומה' }
};

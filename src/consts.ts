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
  en: { title: 'About', content: [{ tag: 'p', text: '' }] },
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

interface LanguageContent {
  title: string;
  title2?: string;
  content?: {
    id?: number;
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
    title: 'Welcome to Mevaser Zion',
    content: [
      {
        id: 2,
        tag: 'p',
        text: `Mevaser Zion is a warm and vibrant religious community located in Tel Mond. Rooted in a strong sense of Torah, chesed, and mutual support, we welcome families and individuals from diverse backgrounds who are seeking a dynamic and engaging Kehilla. Our members are actively involved in Tefilot, learning programs, communal events, and initiatives to support one another in times of both joy and challenge.`
      },
      {
        id: 12,
        tag: 'p',
        text: `Whether you are a long-time resident or new to the area, we invite you to join us and experience the unique spirit of Mevaser Zion.`
      },
      { id: 3, tag: 'h2', text: `Services` },
      {
        id: 4,
        tag: 'p',
        text: `Mevaser Zion offers a full range of tefilot and religious services, ensuring a welcoming and meaningful davening experience for all.`
      },
      {
        id: 1,
        tag: 'li',
        text: `⁠Daily Minyanim: Shacharit, Mincha, and Maariv`
      },
      {
        id: 1,
        tag: 'li',
        text: `⁠Shabbat Services: Held in the Main Sanctuary and in the Hall, with ‘satellite minyanim in various parts of Tel Mond, especially in the Nof Yaldut minyan`
      },
      {
        id: 1,
        tag: 'li',
        text: `⁠Children’s and Youth Minyan: A range of chidren’s tefilot and a special Mussaf service designed for younger members`
      },
      {
        id: 1,
        tag: 'li',
        text: `⁠Women's Leining: Torah reading for women on special occasions`
      },
      {
        id: 1,
        tag: 'li',
        text: `⁠Special Tefillot: Tefillot for all the Chagim including a musical Tefila on Yom Haatzmaut and other holidays`
      },
      {
        id: 1,
        tag: 'li',
        text: `⁠Community Shiurim & Learning Programs: Various weekly and special shiurim throughout the week in Hebrew and English`
      }
    ]
  },
  he: {
    title: 'בית',
    content: [
      {
        id: 2,
        tag: 'p',
        text: `מבשר ציון היא קהילה דתית חמה ותוססת השוכנת בתל מונד. מושרשים בתחושה חזקה של תורה, חסד ותמיכה הדדית, אנו מקבלים בברכה משפחות ויחידים מרקע מגוון המחפשים קהילה דינמית ומרתקת. חברינו מעורבים באופן פעיל בתפילות, תוכניות למידה, אירועים משותפים ויוזמות לתמיכה זה בזה בזמנים של שמחה ואתגר כאחד.`
      },
      {
        id: 12,
        tag: 'p',
        text: `בין אם אתה תושב ותיק או חדש באזור, אנו מזמינים אותך להצטרף אלינו ולחוות את הרוח הייחודית של מבשר ציון.`
      },
      { id: 3, tag: 'h2', text: `שירותים` },
      {
        id: 4,
        tag: 'p',
        text: `מבשר ציון מציע מגוון רחב של תפילות ושירותי דת, המבטיחים חווית התעוררות מסבירת פנים ומשמעותית לכולם.`
      },
      {
        id: 1,
        tag: 'li',
        text: `⁠מניינים יומיים: שחרית, מנחה ומעריב`
      },
      {
        id: 1,
        tag: 'li',
        text: `שירותי השבת: מתקיימים בקודש המרכזי ובהיכל, עם מניינים לוויינים באזורים שונים בתל מונד, במיוחד במניין נוף ילדות.`
      },
      {
        id: 1,
        tag: 'li',
        text: `מניין ילדים ונוער: מגוון תפילות לילדים ושירות מוסף מיוחד המיועד לחברים הצעירים יותר`
      },
      {
        id: 1,
        tag: 'li',
        text: `קריאת נשים: קריאת תורה לנשים באירועים מיוחדים`
      },
      {
        id: 1,
        tag: 'li',
        text: `⁠תפילות מיוחדות: תפילות לכל החגים כולל תפילה מוזיקלית ביום העצמאות ובחגים נוספים`
      },
      {
        id: 1,
        tag: 'li',
        text: `שיעורים קהילתיים ותוכניות למידה: שיעורים שבועיים ומיוחדים שונים לאורך השבוע בעברית ובאנגלית`
      }
    ]
  }
};

export const about: Constant = {
  en: {
    title: 'About',
    content: [
      {
        id: 1,
        tag: 'p',
        text: `Mevaser Zion is a vibrant Modern Orthodox community located in Tel Mond, a suburban town in Israel's Sharon region. The community is known for its active engagement in religious and social activities, centered around the Mevaser Zion Synagogue. This synagogue serves as a hub for religious services, holiday programming, and community events, playing a pivotal role in welcoming and assisting new immigrant families as they acclimate to life in Israel.`
      },

      {
        id: 2,
        tag: 'p',
        text: `The synagogue offers a range of classes and programs in both Hebrew and English, catering to the spiritual and educational needs of its members. The community's commitment to education is further exemplified by the local religious elementary school, Ohr Torah Tel Mond, recognized as a leading institution in the Sharon region.`
      },
      {
        id: 3,
        tag: 'p',
        text: `In June 2013, the Mevaser Zion community celebrated the inauguration of their newly built synagogue, marking a significant milestone in their development. The event was attended by notable figures, including Naftali Bennett, the then Minister for the Economy. `
      },
      { id: 4, tag: 'h2', text: `Activities & Events` },
      {
        id: 5,
        tag: 'p',
        text: `Mevaser Zion is more than just a place of prayer – it is a lively hub of social and educational activities for all ages.`
      },
      { id: 6, tag: 'h2', text: `Annual & Holiday Events` },
      {
        id: 7,
        tag: 'li',
        text: `⁠Lag B’Omer Picnic – A fun community gathering`
      },
      {
        id: 8,
        tag: 'li',
        text: `⁠Tikkun Leil Shavuot – Learning throughout the night in Hebrew and English`
      },
      {
        id: 9,
        tag: 'li',
        text: `⁠Sukkah Hop & Decorating – Engaging activities for families`
      },
      {
        id: 10,
        tag: 'li',
        text: `⁠Simchat Torah Project – Special initiatives to enhance the celebration`
      },
      {
        id: 11,
        tag: 'li',
        text: `⁠Purim Festivities – Adults' and children's Purim parties, Mishloach Manot lottery`
      },
      {
        id: 12,
        tag: 'li',
        text: `⁠Hafrashat Challah – A community-wide event for women`
      },
      {
        id: 13,
        tag: 'li',
        text: `⁠Scholar-in-Residence Shabbatot – Guest speakers enriching our learning`
      },
      { id: 14, tag: 'h2', text: `Regular Programs` },
      {
        id: 15,
        tag: 'li',
        text: `⁠Parent-Child Learning – Strengthening family connections through Torah`
      },
      {
        id: 16,
        tag: 'li',
        text: `⁠Daf Yomi & Tzurba Shiurim – Advanced Torah learning opportunities`
      },
      {
        id: 17,
        tag: 'li',
        text: `⁠Bat & Bar Mitzvah Programs – Preparing the next generation`
      },
      {
        id: 18,
        tag: 'li',
        text: `⁠Beit Midrash– Weekly learning for men and women`
      },
      {
        id: 19,
        tag: 'li',
        text: `⁠Siddur & Snacks – Fun and engaging Torah learning for kids`
      },
      {
        id: 20,
        tag: 'li',
        text: `⁠Library Services – A well-stocked community library`
      },
      {
        id: 21,
        tag: 'li',
        text: `⁠Shul Clean-Up & Maintenance Initiatives – Keeping our space beautiful and functional`
      },
      { id: 22, tag: 'h2', text: `Community Support` },
      { id: 23, tag: 'h2', text: `Supporting Our Soldiers & Families` },
      {
        id: 24,
        tag: 'p',
        text: `Since October 2023, Mevaser Zion has been actively engaged in supporting soldiers and their families. From preparing care packages and organizing meals to providing emotional and practical support for those in miluim, we are committed to standing by our members during challenging times.`
      },
      { id: 25, tag: 'h2', text: `Chesed & Assistance` },
      {
        id: 26,
        tag: 'p',
        text: `The Vaad Chesed coordinates support for members in need, including:`
      },
      {
        id: 27,
        tag: 'li',
        text: `⁠Meal trains for new parents, bereaved families, and those recovering from illness`
      },
      { id: 28, tag: 'li', text: `⁠Holiday collections for families in need` },
      {
        id: 29,
        tag: 'li',
        text: `⁠Assistance for elderly or homebound members`
      },
      {
        id: 30,
        tag: 'p',
        text: `If you or someone you know requires support, please contact the Vaad Chesed.`
      },
      { id: 31, tag: 'h2', text: `Key Personnel` },
      {
        id: 32,
        tag: 'p',
        text: `Mevaser Zion is led by dedicated individuals who give their time and energy to serving the community.`
      },
      {
        id: 33,
        tag: 'li',
        text: `⁠Rav Baruch Weintraub – Our spiritual leader, guiding the community in halacha, Torah learning, and personal growth together with his wife Pnina`
      },
      {
        id: 34,
        tag: 'li',
        text: `⁠Community Vaad Members – Managing all aspects of community life`
      },
      {
        id: 35,
        tag: 'li',
        text: `⁠Gabbai & Service Coordinators – Overseeing minyanim and special tefillot`
      },
      {
        id: 36,
        tag: 'li',
        text: `⁠Shul Treasurer – Ensuring responsible financial management`
      },
      {
        id: 37,
        tag: 'li',
        text: `⁠Shul Administrator – Handling logistics, events, and communication`
      },
      {
        id: 38,
        tag: 'li',
        text: `⁠Honorary President – Supporting long-term community vision and growth`
      },
      {
        id: 39,
        tag: 'p',
        text: `Our leadership team is always available to answer questions and help integrate new families into the community.`
      },
      { id: 40, tag: 'h2', text: `Membership & New Families` },
      {
        id: 41,
        tag: 'p',
        text: `Over the past two years, Mevaser Zion has experienced remarkable growth, welcoming new families from Israel and abroad. If you are considering joining our community, we encourage you to reach out!`
      },
      { id: 42, tag: 'h2', text: `Membership Benefits` },
      {
        id: 43,
        tag: 'li',
        text: `⁠Access to all tefilot, shiurim, and community programs`
      },
      { id: 44, tag: 'li', text: `⁠Support during smachot and times of need` },
      {
        id: 45,
        tag: 'li',
        text: `⁠Invitations to special members-only events`
      },
      {
        id: 46,
        tag: 'li',
        text: `⁠Inclusion in community announcements and updates`
      },
      {
        id: 47,
        tag: 'p',
        text: `For more information on membership, contact our administrator.`
      },
      { id: 48, tag: 'h2', text: `Shul Facilities & Building Maintenance` },
      {
        id: 49,
        tag: 'p',
        text: `Mevaser Zion is committed to maintaining and improving our facilities to accommodate our growing kehilla.`
      },
      { id: 50, tag: 'p', text: `Recent improvements include:` },
      { id: 51, tag: 'li', text: `⁠A new bimah in the main hall` },
      { id: 52, tag: 'li', text: `⁠Upgrades to the Beit Midrash space` },
      {
        id: 53,
        tag: 'li',
        text: `⁠Ongoing building maintenance and renovations`
      },
      {
        id: 54,
        tag: 'p',
        text: `Volunteers are always welcome to assist with upkeep and beautification projects.`
      }
    ]
  },
  he: {
    title: 'אודות',
    content: [
      {
        id: 1,
        tag: 'p',
        text: `מבשר ציון היא קהילה אורתודוקסית מודרנית תוססת הממוקמת בתל מונד, עיירת פרברים באזור השרון של ישראל. הקהילה ידועה במעורבותה הפעילה בפעילות דתית וחברתית, שבמרכזה בית הכנסת מבשר ציון. בית כנסת זה משמש כמרכז לשירותי דת, תכניות חגים ואירועים קהילתיים, וממלא תפקיד מרכזי בקבלת פנים וסיוע למשפחות עולים חדשות כשהן מתאקלמו לחיים בישראל.`
      },
      {
        id: 2,
        tag: 'p',
        text: `בית הכנסת מציע מגוון חוגים ותכניות בעברית ובאנגלית, הנותנים מענה לצרכים הרוחניים והחינוכיים של חבריו. המחויבות של הקהילה לחינוך מודגמת עוד בבית הספר היסודי הדתי המקומי, אור תורה תל מונד, המוכר כמוסד מוביל באזור השרון.`
      },
      {
        id: 3,
        tag: 'p',
        text: `ביוני 3102 חגגה קהילת מבשר ציון את חנוכת בית הכנסת החדש שנבנה, בסימן ציון דרך משמעותי בהתפתחותם. באירוע נכחו אישים בולטים, בהם נפתלי בנט, שר הכלכלה דאז.`
      },
      { id: 4, tag: 'h2', text: `פעילויות ואירועים` },
      {
        id: 5,
        tag: 'p',
        text: `מבשר ציון הוא יותר מסתם מקום תפילה - הוא מרכז תוסס של פעילויות חברתיות וחינוכיות לכל הגילאים.`
      },
      { id: 6, tag: 'h2', text: `אירועים שנתיים וחגים` },
      {
        id: 7,
        tag: 'li',
        text: `פיקניק לג בעומר - מפגש קהילתי מהנה`
      },
      {
        id: 8,
        tag: 'li',
        text: `תיקון ליל שבועות – למידה לאורך הלילה בעברית ובאנגלית`
      },
      {
        id: 9,
        tag: 'li',
        text: `⁠סוכה הופ וקישוט - פעילויות מרתקות למשפחות`
      },
      {
        id: 10,
        tag: 'li',
        text: `פרויקט שמחת תורה – יוזמות מיוחדות להגברת החגיגה`
      },
      {
        id: 11,
        tag: 'li',
        text: `⁠ חגיגות פורים – מסיבות פורים למבוגרים ולילדים, הגרלת משלוח מנות`
      },
      {
        id: 12,
        tag: 'li',
        text: `⁠ פרשת חלה – אירוע כלל קהילתי לנשים`
      },
      {
        id: 13,
        tag: 'li',
        text: `מלומד בשבת - דוברים אורחים מעשירים את הלמידה שלנו`
      },
      { id: 14, tag: 'h2', text: `תוכניות רגילות` },
      {
        id: 15,
        tag: 'li',
        text: `לימוד הורה-ילד - חיזוק הקשרים המשפחתיים דרך התורה`
      },
      {
        id: 16,
        tag: 'li',
        text: `שיעורי דף יומי וצורבא – הזדמנויות ללימוד תורה מתקדמים`
      },
      {
        id: 17,
        tag: 'li',
        text: `תוכניות בת ובר מצווה - הכנת הדור הבא`
      },
      {
        id: 18,
        tag: 'li',
        text: `בית מדרש – למידה שבועית לגברים ולנשים`
      },
      {
        id: 19,
        tag: 'li',
        text: `⁠ סידור וחטיפים - לימוד תורה מהנה ומרתק לילדים`
      },
      {
        id: 20,
        tag: 'li',
        text: `⁠ שירותי ספרייה - ספרייה קהילתית מצוידת היטב`
      },
      {
        id: 21,
        tag: 'li',
        text: `יוזמות ניקיון ותחזוקה של בית הכנסת - שמירה על המרחב שלנו יפה ופונקציונלי`
      },
      { id: 22, tag: 'h2', text: `תמיכה בקהילה` },
      { id: 23, tag: 'h2', text: `תמיכה בחיילים ובמשפחות שלנו` },
      {
        id: 24,
        tag: 'p',
        text: `מאז אוקטובר 3202, מבשר ציון עוסקת באופן פעיל בתמיכה בחיילים ובני משפחותיהם. מהכנת חבילות טיפול וארגון ארוחות ועד מתן תמיכה רגשית ומעשית למי שנמצא במיליומים, אנו מתחייבים לעמוד לצד חברינו בזמנים מאתגרים.`
      },
      { id: 25, tag: 'h2', text: `חסד וסיוע` },
      {
        id: 26,
        tag: 'p',
        text: `ועד חסד מרכזת תמיכה לחברים במצוקה, לרבות:`
      },
      {
        id: 27,
        tag: 'li',
        text: `⁠ רכבות ארוחות להורים טריים, משפחות שכולות ואלה המחלימים ממחלה`
      },
      { id: 28, tag: 'li', text: `אוספי חג למשפחות נזקקות` },
      {
        id: 29,
        tag: 'li',
        text: `סיוע לקשישים או חברים רתוקים לבית`
      },
      {
        id: 30,
        tag: 'p',
        text: `אם אתה או מישהו שאתה מכיר זקוק לתמיכה, אנא צור קשר עם ועד חסד.`
      },
      { id: 31, tag: 'h2', text: `אנשי מפתח` },
      {
        id: 32,
        tag: 'p',
        text: `מבשר ציון מובל על ידי אנשים מסורים הנותנים מזמנם ומרצם לשירות הקהילה.`
      },
      {
        id: 33,
        tag: 'li',
        text: `הרב ברוך וינטרוב – המנהיג הרוחני שלנו, מנחה את הקהילה בהלכה, לימוד תורה וצמיחה אישית יחד עם רעייתו פנינה`
      },
      {
        id: 34,
        tag: 'li',
        text: `⁠ חברי וועד בקהילה - ניהול כל ההיבטים של חיי הקהילה`
      },
      {
        id: 35,
        tag: 'li',
        text: `⁠גבאי ורכזי שירות - פיקוח על מניינים ותפילות מיוחדות`
      },
      {
        id: 36,
        tag: 'li',
        text: `⁠ גזבר שול - הבטחת ניהול פיננסי אחראי`
      },
      {
        id: 37,
        tag: 'li',
        text: `⁠ מנהל בית הכנסת - טיפול בלוגיסטיקה, אירועים ותקשורת`
      },
      {
        id: 38,
        tag: 'li',
        text: `נשיא כבוד - תמיכה בחזון ובצמיחה של הקהילה לטווח ארוך`
      },
      {
        id: 39,
        tag: 'p',
        text: `צוות המנהיגות שלנו תמיד זמין לענות על שאלות ולעזור לשלב משפחות חדשות בקהילה.`
      },
      { id: 40, tag: 'h2', text: `חברות ומשפחות חדשות` },
      {
        id: 41,
        tag: 'p',
        text: `במהלך השנתיים האחרונות, מבשר ציון חווה צמיחה יוצאת דופן, תוך קבלת פנים למשפחות חדשות מהארץ ומחו"ל. אם אתה שוקל להצטרף לקהילה שלנו, אנו ממליצים לך לפנות!`
      },
      { id: 42, tag: 'h2', text: `הטבות חברות` },
      {
        id: 43,
        tag: 'li',
        text: `⁠ גישה לכל התפילות, השיעורים והתוכניות הקהילתיות`
      },
      { id: 44, tag: 'li', text: `תמיכה בזמן סמכות וזמני צרה` },
      {
        id: 45,
        tag: 'li',
        text: `הזמנות לאירועים מיוחדים לחברים בלבד`
      },
      {
        id: 46,
        tag: 'li',
        text: `⁠ הכללה בהודעות ועדכונים של הקהילה`
      },
      {
        id: 47,
        tag: 'p',
        text: `למידע נוסף על חברות, פנה למנהל המערכת שלנו.`
      },
      { id: 48, tag: 'h2', text: `מתקני בית ותחזוקת מבנים` },
      {
        id: 49,
        tag: 'p',
        text: `מבשר ציון מחויבת לתחזק ולשפר את המתקנים שלנו כדי להתאים את הקהילה הגדלה שלנו.`
      },
      { id: 50, tag: 'p', text: `השיפורים האחרונים כוללים:` },
      { id: 51, tag: 'li', text: `⁠ בימה חדשה באולם המרכזי` },
      { id: 52, tag: 'li', text: `⁠שדרוגים לחלל בית המדרש` },
      {
        id: 53,
        tag: 'li',
        text: `תחזוקה ושיפוצים שוטפים של מבנים`
      },
      {
        id: 54,
        tag: 'p',
        text: `מתנדבים תמיד מוזמנים לסייע בפרויקטי תחזוקה וייפוי.`
      }
    ]
  }
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
  en: {
    title: 'Contact',
    content: [
      {
        id: 1,
        tag: 'p',
        text: `For general inquiries, event information, or membership details, please reach out:`
      }
    ]
  },
  he: {
    title: 'צור קשר',
    content: [
      {
        id: 1,
        tag: 'p',
        text: `לשאלות כלליות, מידע על אירועים או פרטי חברות, אנא פנה אל:`
      }
    ]
  }
};

export const donate: Constant = {
  en: { title: 'Donate' },
  he: { title: 'תרומה' }
};

import {Community} from "../model";
import {SALONIKY_DESCRIPTION_DATA, SALONIKY_MOSEON} from "./saloniky.description.data";
import {YANINA_DESCRIPTION_DATA} from "./yanina.description.data";
import {OSHVITZ_DESCRIPTION_DATA} from "./oshvitz.description.data";
import {BIRKINAU_DESCRIPTION_DATA} from "./birkinau.description.data";
import {BUNA_DESCRIPTION_DATA} from "./buna.description.data";
import {KORFU_DESCRIPTION_DATA} from "./korfu.description.data";
import {ATUNA_DESCRIPTION_DATA} from "./atuna.description.data";
import {VOLOS_DESCRIPTION_DATA} from "./volos.description.data";

const BEFORE_HA_KIBUSH = 'לפני הכיבוש';
const IN_THE_KIBUSH = 'בזמן הכיבוש';
const IN_THE_CAMPS = 'במחנות';
const AFTER_RELEASE = 'אחרי השחרור';

const SALONIKY: Community = {
  name: 'סלוניקי',
  description: SALONIKY_DESCRIPTION_DATA,
  titleImage: 'saloniki-title.png',
  categoryView: true,
  subtitles: [
    {
      title: 'המוזיאון היהודי',
      description: SALONIKY_MOSEON,
      image: "saloniky_jewish_musium.jpg",
      playbacks: [
        {
          personId: 'nahman',
          playbackFile: 'זכרונות מסלוניקי מרי נחמן',
          title: 'ערב שבת וחגים'
        }, {
          personId: 'mano',
          playbackFile: 'Mano2 רומנסות',
          title: 'רומאנסות'
        }, {
          personId: 'elyakim_bachar',
          playbackFile: 'Elyakim Bachar1',
          title: 'אליקים בכר 1'
        }
      ]
    },

    {
      title: 'מתנות לאביונים',
      image: 'saloniky_matanot_laevyonim.jpg',
      playbacks: [
        {
          personId: 'frida',
          playbackFile: 'Kobo1 ילדות בסלוניקי',
          title: 'זכרונות ילדות ובית הספר אליאנס'
        }, {
          personId: 'mano',
          playbackFile: 'Mano4 זכרונות ילדות תלמוד תורה',
          title: 'מערכת החינוך בסלוניקי'
        }, {
          personId: 'mano',
          playbackFile: 'Mano1 מתנות לאביונים',
          title: 'מנו1'
        }, {
          personId: 'haimrefael',
          playbackFile: 'Refael3',
          title: 'על הלימודים'
        }, {
          personId: 'razon',
          playbackFile: 'Razon1',
          title: 'פעילות חברתית וספורט מכבי'
        }, {
          personId: 'ovadiya',
          playbackFile: 'Ovadia5',
          title: 'בית הספר'
        }, {
          personId: 'ovadiya',
          playbackFile: 'Ovadia6',
          title: 'תנועות הנוער'
        }
      ]
    },
    {
      title: 'בית הכנסת מונסטירליס',
      image: "saloniky_monastir_synagogue.jpg",
      playbacks: [
        {
          personId: 'yitzhakcohen',
          playbackFile: 'Cohen4 חגים',
          title: 'חגים ופיוטים'
        }, {
          personId: 'yitzhakcohen',
          playbackFile: 'Cohen3 בית הכנסת',
          title: 'תפילות ובית הכנסת'
        }
      ]
    },
    {
      title: 'בית העלמין החדש',
      image: 'saloniky_new_cemetery.jpg',
      playbacks: [
        {
          personId: 'mano',
          playbackFile: 'Mano5 הישרדות 41-43',
          title: 'הישרדות 1941-43'
        }, {
          personId: 'haimrefael',
          playbackFile: 'Refael3',
          title: 'פרוץ המלחמה'
        }, {
          personId: 'razon',
          playbackFile: 'Razon2',
          title: 'קרבות אגרוף כדי לשרוד'
        }
      ]
    },
    {
      title: 'שכונת הברון הירש',
      image: "saloniky_baron_hirsh.jpg",
      playbacks: [
        {
          personId: 'haimrefael',
          playbackFile: 'REFAEL1',
          title: 'חיסול גטו הברון הירש'
        },
        {
          personId: 'renebibas',
          playbackFile: 'Bivas1_rav_kurtz',
          title: 'נאום הרב קורץ בבית הכנסת'
        },
        {
          personId: 'mano',
          playbackFile: 'Mano7 ברון הירש',
          title: 'מעבר מהשכונות לברון הירש'
        },
        {
          personId: 'haimrefael',
          playbackFile: 'Refael6',
          title: 'התנגדות'
        },
        {
          personId: 'ovadiya',
          playbackFile: 'Ovadia7',
          title: 'סגירת הגטו'
        },
        {
          personId: 'razon',
          playbackFile: 'Razon4',
          title: 'על חסון'
        }, {
          personId: 'haimrefael',
          playbackFile: 'Refael10',
          title: 'תאור הגטו'
        }
      ]
    },
    {
      title: 'תחנת הרכבת',
      image: 'saloniky_train_station_baron_hirsh3.jpg',
      playbacks: [
        {
          personId: 'frida',
          playbackFile: 'saloniky_kobo_frida_train_station_baron_hirsh_news_on_deportation',
          title: 'ידיעות על הגירוש קובו פרידה'
        },
        {
          personId: 'mano',
          playbackFile: 'Mano6 נאום קורץ',
          title: 'נאום קורץ לפני הגרוש'
        }, {
          personId: 'ovadiyabaruch',
          playbackFile: 'ovadia 8 -משלוחים',
          title: 'בתחנת הרכבת לפני הגרוש'
        }, {
          personId: 'renebibas',
          playbackFile: 'Bivas2_prepare_for_travel',
          title: 'הערכות לגרוש'
        }, {
          personId: 'renebibas',
          playbackFile: 'Bivas3_in_train',
          title: 'הנסיעה ברכבת לבירקנאו'
        }, {
          personId: 'haimrefael',
          playbackFile: 'Refael9',
          title: 'איסוף היהודים'
        }
      ]
    },
    {
      title: 'העיר העליונה Ano Poli',
      image: 'saloniky_yad_kula_view.jpg',
      playbacks: [
        {
          personId: 'yitzhakcohen',
          playbackFile: 'Cohen1 השריפה 1917',
          title: 'השריפה 1917'
        }
      ]
    },
    {
      title: 'כיכר החרות',
      image: 'saloniky_freedon_square.jpg',
      playbacks: [
        {
          personId: 'haimrefael',
          playbackFile: 'Refael5',
          title: 'ימי הכיבוש'
        }, {
          personId: 'haimrefael',
          playbackFile: 'Refael7',
          title: 'שמועות על הקמת הגטו'
        }, {
          personId: 'haimrefael',
          playbackFile: 'Refael8',
          title: 'שבת השחורה'
        },
      ]
    }
  ]
}

const YANINA: Community = {
  name: 'יאנינה',
  description: YANINA_DESCRIPTION_DATA,
  titleImage: 'ioannina-title.png',
  subtitles: []
}

const OSHVITZ: Community = {
  name: 'אושוויץ',
  description: OSHVITZ_DESCRIPTION_DATA,
  titleImage: 'auschwitz-title.png',
  subtitles: [
    {
      title: IN_THE_CAMPS,
      image: "yanina.jpg",
      playbacks: [
        {
          personId: 'alizabaruch',
          playbackFile: 'ALIZA BARUCH3',
          title: 'תהליך הקליטה במחנה'
        },

        {
          personId: 'alizabaruch',
          playbackFile: 'ALIZA BARUCH4',
          title: 'ההכרה באובדן ההורים'
        },

        {
          personId: 'alizabaruch',
          playbackFile: 'ALIZA BARUCH5',
          title: 'ניסויים בבלוק 10'
        },

        {
          personId: 'ovadiyabaruch',
          playbackFile: 'OVADIA2',
          title: 'קארנטנה- מחנה ההסגר'
        },

        {
          personId: 'ovadiyabaruch',
          playbackFile: 'OVADIA3',
          title: 'מפגש עם יעקב מאסטרו'
        },

        {
          personId: 'ovadiyabaruch',
          playbackFile: 'OVADIA4',
          title: 'בלוק 6 אושוויץ'
        },

        {
          personId: 'ovadiyabaruch',
          playbackFile: 'OVADIA_1',
          title: 'לבדוק שלא כפול'
        },

        {
          personId: 'haimrefael',
          playbackFile: 'REFAEL2',
          title: 'הגעה לרמפה בבירקנאו'
        },

        {
          personId: 'haimrefael',
          playbackFile: 'REFAEL4',
          title: 'קומנדו קנדה'
        },

        {
          personId: 'renebibas',
          playbackFile: 'RENE BIVAS4',
          title: 'ההפלה'
        },

        {
          personId: 'renebibas',
          playbackFile: 'RENE BIVAS5',
          title: 'הכרה באובדן ומשמעות הקרמטוריום'
        },

        {
          personId: 'renebibas',
          playbackFile: 'RENE BIVAS6',
          title: 'מספר על היד'
        },

        {
          personId: 'yaakovgabay',
          playbackFile: 'YAAKOV GABAI 1',
          title: 'מבנה הקרמטוריום'
        }
      ]
    }
  ]
}

const ATUNA: Community = {
  name: 'אתונה',
  titleImage: 'athenes-title.png',
  description: ATUNA_DESCRIPTION_DATA,
  categoryView: true,
  subtitles: [
    {
      title: 'המוזיאון היהודי',
      image: 'atuna/muzium.jpg',
      playbacks: [
      ]
    },
    {
      title: 'בית הכנסת',
      image: 'atuna/synagogue.jpg',
      backButtonColor: 'black',
      playbacks: [
        {
          personId: 'fortisbinyamin',
          playbackFile: 'Fortis2 כרזות בגרמנית',
          title: 'סנסקציות ראשונות באתונה'
        },

        {
          personId: 'fortisbinyamin',
          playbackFile: 'Fortis1 גודל האסון',
          title: 'הכרה בגודל האסון של יהודי סלוניקי'
        }
      ]
    },
    {
      title: 'אנדרטת השואה',
      image: 'atuna/monument.jpg',
      playbacks: [
        {
          personId: 'yaakovgabay',
          playbackFile: 'Gabay3 הגירוש מאתונה',
          title: 'הגירוש מאתונה'
        },

        {
          personId: 'yaakovgabay',
          playbackFile: 'Gabay2 ידיעות על סלוניקי',
          title: 'ידיעות על רצח קהילת סלוניקי'
        }

      ]
    },
    {
      title: 'מחנה חיידרי',
      image: 'atuna/haidari.jpg',
      backButtonColor: 'black',
      playbacks: [
      ]
    },
  ]
}

const BIRKINAU: Community = {
  name: 'בירקנאו',
  description: BIRKINAU_DESCRIPTION_DATA,
  titleImage: 'auschwitz-title.png',
  subtitles: [
    {
      title: IN_THE_CAMPS,
      image: "yanina.jpg",
      playbacks: [
        {
          personId: 'alizabaruch',
          playbackFile: 'ALIZA1',
          title: 'הגעה לרמפה'
        },

        {
          personId: 'alizabaruch',
          playbackFile: 'ALIZA_2',
          title: 'נסויים ההקרנות בבירקנאו'
        },

        {
          personId: 'renebibas',
          playbackFile: 'BIVAS RENE_2',
          title: 'מחראות '
        },

        {
          personId: 'renebibas',
          playbackFile: 'BIVAS_1',
          title: 'הכניסה לבלוק'
        },

        {
          personId: 'darioandalbertolevi',
          playbackFile: 'DARIO2',
          title: 'לשאלת האמונה באל'
        },

        {
          personId: 'esterinamaestro',
          playbackFile: 'ESTER MAESTRO_2',
          title: 'יתרון השפה הגרמנית'
        },

        {
          personId: 'esterrefael',
          playbackFile: 'ESTER REFAEL2',
          title: 'התעללות בבלוק'
        },

        {
          personId: 'esterrefael',
          playbackFile: 'ESTER REFAEL3',
          title: 'סלקציה בבלוק'
        },

        {
          personId: 'esterrefael',
          playbackFile: 'ESTER REFAEL_1',
          title: 'קרנטינה- מחנה ההסגר'
        },

        {
          personId: 'yaakovgabay',
          playbackFile: 'GABAI2',
          title: 'זונדר קומנדו'
        },

        {
          personId: 'frida',
          playbackFile: 'KOBO FRIDA1',
          title: 'קנדה- מחסני המיון'
        },

        {
          personId: 'frida',
          playbackFile: 'KOBO FRIDA2',
          title: 'קשר עם קרובי המשפחה'
        },

        {
          personId: 'esterinamaestro',
          playbackFile: 'MAESTRO_E',
          title: 'ההגעה לבירקנאו'
        },

        {
          personId: 'ovadiyabaruch',
          playbackFile: 'OVADIA1',
          title: 'שבעה ימים ברכבת'
        },

        {
          personId: 'haimrefael',
          playbackFile: 'REFAEL_3 A',
          title: 'אובדן המשפחה'
        },

        {
          personId: 'renebibas',
          playbackFile: 'RENE BIVAS3',
          title: 'המכתב מסלומון- אהבה במחנה'
        },

        {
          personId: 'itzhakstrumza',
          playbackFile: 'STROMZA ZAK1',
          title: 'בירקנאו מבחינה פילוסופית'
        },

      ]
    }
  ]
}

const VOLOS: Community = {
  name: 'וולוס',
  description: VOLOS_DESCRIPTION_DATA,
  titleImage: 'volos-title.jpg',
  subtitles: [
    {
      title: IN_THE_KIBUSH,
      image: null,
      playbacks: [
        {
          personId: 'yaakovgabay',
          playbackFile: 'Gabay4 סיפור וולוס',
          title: 'הצלתה קהילת וולוס'
        }
      ]
    }
  ]
}


const KORFU: Community = {
  name: 'קורפו',
  description: KORFU_DESCRIPTION_DATA,
  titleImage: 'corfu-title.jpg',
  categoryView: true,
  subtitles: [
    {
      title: 'בית הכנסת',
      image: "korfu/korfu_synagogue.jpg",
      playbacks: [
        {
          personId: 'rivkabaleli',
          playbackFile: 'רבקה בללי- זכרונות ילדות _ קורפו היתה ירושלים הקטנה_',
          title: 'קורפו היתה ירושלים הקטנה'
        },
        {
          personId: 'esterrefael',
          playbackFile: 'אסתר רפאל- זכרונות ילדות _הרובע היהודי ביום כיפור_',
          title: 'הרובע היהודי ביום כיפור'
        },
        {
          personId: 'esterrefael',
          playbackFile: 'אסתר רפאל- זכרונות ילדות _ השפות המדוברות בקורפו_',
          title: 'השפות המדוברות בקורפו'
        },
        {
          personId: 'esterrefael',
          playbackFile: 'אסתר רפאל- זכרונות ילדות _ בעלי תפקידים בקהילה',
          title: 'בעלי תפקידים בקהילה'
        },
        {
          personId: 'esterrefael',
          playbackFile: 'אסתר רפאל - זכרונות ילדות _ שבתות וחגים_',
          title: 'שבתות וחגים'
        },
        {
          personId: 'annagershwin',
          playbackFile: 'אנה גרשווין- זכרונות ילדות ובית _ זכרונות בית הספר והרחוב_',
          title: 'זכרונות בית הספר והרחוב'
        },
        {
          personId: 'annagershwin',
          playbackFile: 'אנה גרשווין קורפו6',
          title: 'מאפייני קהילת קורפו'
        },
      ]
    },


    {
      title: 'הרובע היהודי',
      image: 'korfu/korfu_jewish_getto.jpg',
      playbacks: [
        {
          personId: 'esterrefael',
          playbackFile: 'אסתר רפאל -תקופת הכיבוש הגרמני _ פרוץ המלחמה והכיבוש האיטלקי',
          title: 'פרוץ המלחמה והכיבוש האיטלקי'
        },
        {
          personId: 'esterrefael',
          playbackFile: 'אסתר רפאל - תקופת הכיבוש הגרמני _ איסורים וסנקציות על הקהילה היהודית_',
          title: 'איסורים וסנקציות על הקהילה היהודית'
        },
        {
          personId: 'esterrefael',
          playbackFile: 'אסתר רפאל הגרוש למחנות _ מה יהיה גורלנו _',
          title: 'מה יהיה גורלנו'
        }
      ]
    },



    {
      title: 'מבצר פרוריו',
      image: 'korfu/korfu_old_fortress.jpg',
      playbacks: [
        {
          personId: 'sardesaliki',
          playbackFile: 'סרדס אליקי- הגרוש למחנות _ הגירוש מקורפו_',
          title: 'הגירוש מקורפו'
        },
        {
          personId: 'annagershwin',
          playbackFile: 'אנה גרשווין- הגרוש למחנות _ פקודת גירוש_',
          title: 'פקודת גירוש'
        },
        {
          personId: 'annagershwin',
          playbackFile: 'אנה גרשווין- הגירוש למחנות _ הכניסה למבצר_',
          title: 'הכניסה למבצר'
        },
      ]
    },



    {
      title: 'מחנה חיידרי',
      image: 'korfu/haydari_camp.jpg',
      playbacks: [
        {
          personId: 'annagershwin',
          playbackFile: 'אנה גרשווין - בכיבוש הגרמני _ הקורבן הראשון מקורפו_',
          title: 'הקורבן הראשון מקורפו'
        }
      ]
    },


    {
      title: IN_THE_CAMPS,
      image: null,
      playbacks: [
        {
          personId: 'sardesaliki',
          playbackFile: 'אליקי סרדס- הגירוש למחנות _ מחנה חיידרי והגרוש לבירקנאו_',
          title: 'מחנה חיידרי והגרוש לבירקנאו'
        },
        {
          personId: 'annagershwin',
          playbackFile: 'אנה גרשווין קורפו7',
          title: 'פגישה עם אחותי במחנה'
        },
      ]
    },
    {
      title: AFTER_RELEASE,
      image: null,
      playbacks: [
        {
          personId: 'annagershwin',
          playbackFile: 'אנה גרשווין קורפו5',
          title: 'מפגש עם כומר בבית לחם'
        },
      ]
    },

  ]
}

const BUNA: Community = {
  name: 'בונה',
  description: BUNA_DESCRIPTION_DATA,
  titleImage: 'auschwitz-title.png',
  subtitles: [
    {
      title: IN_THE_CAMPS,
      image: "yanina.jpg",
      playbacks: [
        {
          personId: 'haimrefael',
          playbackFile: 'REFAEL6_haim_refael_buna_camp',
          title: 'חיים רפאל'
        }
      ]
    }
  ]
}


export const KEHILOT_DATA: Array<Community> = [
  ATUNA,
  SALONIKY,
  YANINA,
  VOLOS,
  KORFU
];

export const CAMPS_DATA: Array<Community> = [
  OSHVITZ,
  BIRKINAU,
  BUNA
];

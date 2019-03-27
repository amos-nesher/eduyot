import { Community } from "../model";
import { SALONIKY_DESCRIPTION_DATA } from "./saloniky.description.data";
import { YANINA_DESCRIPTION_DATA } from "./yanina.description.data";
import { KORFU_DESCRIPTION_DATA } from "./korfu.description.data";

const BEFORE_HA_KIBUSH = 'לפני הכיבוש'; 
const IN_THE_KIBUSH = 'בזמן הכיבוש'; 
const IN_THE_CAMPS = 'במחנות';
const AFTER_RELEASE = 'אחרי השחרור';

const SALONIKY: Community = {
    name: 'סלוניקי',
    description: SALONIKY_DESCRIPTION_DATA,
    subtitles: [
        {
            title: BEFORE_HA_KIBUSH, 
            playbacks: [
				{
					personId: 'nahman',
					playbackFile: 'זכרונות מסלוניקי מרי נחמן',
					title: 'ערב שבת וחגים'
				}, {
					personId: 'ovadiya',
					playbackFile: 'ovadia 5- בית הספר',
					title: 'בית הספר בסלוניקי'
				}, {
					personId: 'mano',
					playbackFile: 'Mano4 זכרונות ילדות תלמוד תורה',
					title: 'מערכת החינוך בסלוניקי'
				}, {
					personId: 'mano',
					playbackFile: 'Mano2 רומנסות',
					title: 'רומאנסות'
				}, {
					personId: 'mano',
					playbackFile: 'Mano1 מתנות לאביונים',
					title: 'מתנות לאביונים'
				}, {
					personId: 'frida',
					playbackFile: 'Kobo1 ילדות בסלוניקי',
					title: 'זכרונות ילדות ובית הספר אליאנס'
				}, {
					personId: 'zak',
					playbackFile: 'Handali1 זיכרונות',
					title: 'פערים כלכליים בקהילה היהודית'
				}, {
					personId: 'yitzhakcohen',
					playbackFile: 'Cohen5 עלייה לארץ',
					title: 'עליה לארץ בשנות ה - 30'
				}, {
					personId: 'yitzhakcohen',
					playbackFile: 'Cohen4 חגים',
					title: 'חגים ופיוטים'
				}, {
					personId: 'yitzhakcohen',
					playbackFile: 'Cohen3 בית הכנסת',
					title: 'תפילות ובית הכנסת'
				}, {
					personId: 'yitzhakcohen',
					playbackFile: 'Cohen2 זכרונות ילדות',
					title: 'אנטישמיות ואלימות , מהומות קמפבל'
				}, {
					personId: 'yitzhakcohen',
					playbackFile: 'Cohen1 השריפה 1917',
					title: 'השריפה 1917'
				}
            ]
        },
        {
            title: IN_THE_KIBUSH, 
            playbacks: [
				{
					personId: 'mano',
					playbackFile: 'Mano6 נאום קורץ',
					title: 'נאום קורץ לפני הגרוש'
				}, {
					personId: 'mano',
					playbackFile: 'Mano5 הישרדות 41-43',
					title: 'הישרדות 1941-43'
				}, {
					personId: 'renebibas',
					playbackFile: 'Bivas1 הרב קורץ',
					title: 'נאום הרב קורץ בבית הכנסת'
				}, {
					personId: 'mano',
					playbackFile: 'Mano7 ברון הירש',
					title: 'מעבר מהשכונות לברון הירש'
				}, {
					personId: 'renebibas',
					playbackFile: 'Bivas3 ברכבת',
					title: 'הנסיעה ברכבת לבירקנאו'
				}, {
					personId: 'renebibas',
					playbackFile: 'Bivas2 הערכות לנסיעה',
					title: 'הערכות לגרוש'
				}, {
					personId: 'haimrefael',
					playbackFile: 'REFAEL1',
					title: 'חיסול גטו הברון הירש'
				}
            ]
        },
        {
            title: IN_THE_CAMPS, 
            playbacks: [
				{
					personId: 'ovadiyabaruch',
					playbackFile: 'ovadia 8 -משלוחים',
					title: 'בתחנת הרכבת לפני הגרוש'
				}, {
					personId: 'yaakovgabay',
					playbackFile: 'Gabay1 מחנות העבודה',
					title: 'מחנות עבודה בפרך'
				}
			]
		},
        {
            title: AFTER_RELEASE, 
            playbacks: [
				{
					personId: 'mano',
					playbackFile: 'Mano3 צוואה',
					title: 'צוואה'
				}, {
					personId: 'izidor',
					playbackFile: 'Izidor1 סלוניקי זכרונות',
					title: 'העליה לארץ והגרוש לקפריסין'
				}
			]
		}
    ]
}

const YANINA: Community = {
    name: 'יאנינה',
    description: YANINA_DESCRIPTION_DATA,
    subtitles: [
        {
            title: BEFORE_HA_KIBUSH, 
            playbacks: [
                {
                    personId: 'tzadokmaza', 
                    playbackFile: 'החיים בינינה שביוון לפני השואה ובמהלכה עדויות של ניצולי שואה',
                    title: 'החיים ביאנינה ערב המלחמה'
                }

            ]
        },
        {
            title: IN_THE_KIBUSH, 
            playbacks: [
                {
                    personId: 'tzadokmaza', 
                    playbackFile: 'פלישת הגרמנים לינינה - עדויות של ניצולי שואה',
                    title: 'פלישת הגרמנים ליאנינה'
                },
                {
                    personId: 'tzadokmaza', 
                    playbackFile: 'גירוש יהודי ינינה - עדויות של ניצולי שואה',
                    title: 'הגירוש מיאנינה'
                }
            ]
        }
    ]
}

const OSHVITZ: Community = {
    name: 'אושוויץ',
    description: YANINA_DESCRIPTION_DATA,
    subtitles: [
        {
            title: IN_THE_CAMPS, 
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
    description: YANINA_DESCRIPTION_DATA,
    subtitles: [
        {
            title: IN_THE_KIBUSH, 
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
				},

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
        }
    ]
}

const BIRKINAU: Community = {
    name: 'בירקנאו',
    description: YANINA_DESCRIPTION_DATA,
    subtitles: [
        {
            title: IN_THE_CAMPS, 
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
    description: YANINA_DESCRIPTION_DATA,
    subtitles: [
        {
            title: IN_THE_KIBUSH, 
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
    subtitles: [
        {
            title: BEFORE_HA_KIBUSH, 
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
        {            title: IN_THE_KIBUSH, 
            playbacks: [
                {
                    personId: 'rivkabaleli', 
                    playbackFile: 'רבקה בללי -תקופת הכיבוש הגרמני- _ יום יום תחת הכיבוש הגרמני_',
                    title: 'יום יום תחת הכיבוש הגרמני'
                },
                {
                    personId: 'sardesaliki', 
                    playbackFile: 'סרדס אליקי- הגרוש למחנות _ הגירוש מקורפו_',
                    title: 'הגירוש מקורפו'
                },
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
                {
                    personId: 'annagershwin', 
                    playbackFile: 'אנה גרשווין - בכיבוש הגרמני _ הקורבן הראשון מקורפו_',
                    title: 'הקורבן הראשון מקורפו'
                },
            ]
        },
        {
            title: IN_THE_CAMPS, 
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


export const EDUYOT_DATA: Array<Community> = [
	ATUNA,
	OSHVITZ,
	BIRKINAU,
    SALONIKY,
    YANINA,
	VOLOS,
	KORFU
];


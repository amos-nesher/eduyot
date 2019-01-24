import { Community } from "../model";
import { SALONIKY_DESCRIPTION_DATA } from "./saloniky.description.data";
import { YANINA_DESCRIPTION_DATA } from "./yanina.description.data";

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
                    personId: 'yoav', 
                    playbackFile: 'החיים בינינה שביוון לפני השואה ובמהלכה עדויות של ניצולי שואה',
                    title: 'החיים בינינה'
                }
            ]
        },
        {
            title: IN_THE_KIBUSH, 
            playbacks: [
                {
                    personId: 'mano', 
                    playbackFile: 'Mano5 הישרדות 41-43',
                    title: 'הישרדות'
                }

            ]
        }
    ]
}


export const EDUYOT_DATA: Array<Community> = [
    SALONIKY,
    YANINA
];


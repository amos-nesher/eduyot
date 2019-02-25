export interface Person {
    first: string;
	last: string;
	born: string;
	born_country: string;
	born_city: string;
	mother: string;
	father: string;
	before_war: string;
	after_war: string;
	sent: string;
	number: string;
	camps: string;
	released: string;
	released_at: string;
	aliya: string;
	job: string;
    image: string // Use base64
}

export interface Playback {
    personId: string;
    playbackFile: string;
    title: string; // Playback title
}

export interface Subtitle {
    title: string;
    playbacks: Array<Playback>;
}

export interface Community {
    name: string;
    description: string; // The description for this community
    subtitles: Array<Subtitle>;
}


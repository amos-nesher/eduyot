export interface Person {
    name: string;
    born: string;
    died: string;
    description: string;
    occupationOnWar: string;
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


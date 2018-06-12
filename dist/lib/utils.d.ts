import { Line, Space, Clef, Key, Note, PicthVariation } from "./constant";
import { SpaceLineMap } from "./types";
export declare function getLineOrSpaceMap(firstLine: number, staffSpacing: number): SpaceLineMap;
export declare function getPitch(clef: Clef, position: Space | Line): {
    note: Note;
    octave: number;
};
export declare function getPitchVariationMap(key: Key): {
    'A': PicthVariation;
    'B': PicthVariation;
    'C': PicthVariation;
    'D': PicthVariation;
    'E': PicthVariation;
    'F': PicthVariation;
    'G': PicthVariation;
};
export declare function getKey(flats?: number, sharps?: number): Key;
export declare function getSharpKey(sharps?: number): Key;
export declare function getFlatKey(flats?: number): Key;

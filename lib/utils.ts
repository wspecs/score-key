import { Line, Space, Clef, Key, Note, PicthVariation } from "./constant";
import { SpaceLineMap } from "./types";
const py = require('pythonic');

const picthes = [
  {note: Note.B, octave: 6},
  {note: Note.A, octave: 6},
  {note: Note.G, octave: 6},
  {note: Note.F, octave: 6},
  {note: Note.E, octave: 6},
  {note: Note.D, octave: 6},
  {note: Note.C, octave: 6},
  {note: Note.B, octave: 5},
  {note: Note.A, octave: 5},
  {note: Note.G, octave: 5},
  {note: Note.F, octave: 5},
  {note: Note.E, octave: 5},
  {note: Note.D, octave: 5},
  {note: Note.C, octave: 5},
  {note: Note.B, octave: 4},
  {note: Note.A, octave: 4},
  {note: Note.G, octave: 4},
  {note: Note.F, octave: 4},
  {note: Note.E, octave: 4},
  {note: Note.D, octave: 4},
  {note: Note.C, octave: 4},
  {note: Note.B, octave: 3},
  {note: Note.A, octave: 3},
  {note: Note.G, octave: 3},
  {note: Note.F, octave: 3},
  {note: Note.E, octave: 3},
  {note: Note.D, octave: 3},
  {note: Note.C, octave: 3},
  {note: Note.B, octave: 2},
  {note: Note.A, octave: 2},
  {note: Note.G, octave: 2},
  {note: Note.F, octave: 2},
  {note: Note.E, octave: 2},
  {note: Note.D, octave: 2},
  {note: Note.C, octave: 2},
  {note: Note.B, octave: 1},
  {note: Note.A, octave: 1},
  {note: Note.G, octave: 1},
  {note: Note.F, octave: 1},
  {note: Note.E, octave: 1},
  {note: Note.D, octave: 1},
  {note: Note.C, octave: 1},
  {note: Note.B, octave: 0},
  {note: Note.A, octave: 0}
];

const positions = [
  Line.ABOVE_FIVE, Space.ABOVE_FIVE, Line.ABOVE_FOUR, Space.ABOVE_FOUR,
  Line.ABOVE_THREE, Space.ABOVE_THREE, Line.ABOVE_TWO, Space.ABOVE_TWO,
  Line.ABOVE_ONE, Space.ABOVE_ONE,
  Line.ONE, Space.ONE, Line.TWO, Space.TWO, Line.THREE, Space.THREE, Line.FOUR, 
  Space.FOUR, Line.FIVE, Space.BELOW_ONE, Line.BELOW_ONE, Space.BELOW_TWO,
  Line.BELOW_TWO, Space.BELOW_THREE, Line.BELOW_THREE, Space.BELOW_FOUR,
  Line.BELOW_FOUR, Space.BELOW_FIVE, Line.BELOW_FIVE,
]

export function getLineOrSpaceMap(firstLine: number, staffSpacing: number)  {
  const map: SpaceLineMap = {};
  const step = 0.50 * staffSpacing;
  let start = (-5.25 * staffSpacing) + firstLine;
  for (const line of positions) {
    for(const number of py.range(Math.round(start), Math.round(start + step))) {
        map[String(number)] = line;
    }
    start += step
  }
  return map;
}

export function getPitch(clef: Clef, position: Space|Line) {
  let idx = positions.findIndex(x => x === position);
  if (idx === -1) {
    return picthes[0];
  }
  if (clef === Clef.BASE) {
    idx += 12;
  }
  return picthes[idx];
}

export function getPitchVariationMap(key: Key) {
  let defaultVariation = {
    'A': PicthVariation.NORMAL,
    'B': PicthVariation.NORMAL,
    'C': PicthVariation.NORMAL,
    'D': PicthVariation.NORMAL,
    'E': PicthVariation.NORMAL,
    'F': PicthVariation.NORMAL,
    'G': PicthVariation.NORMAL,
  }
  switch (key) {
    case Key.B:
      return {
        ...defaultVariation,
        'D': PicthVariation.SHARP,
        'G': PicthVariation.SHARP,
        'C': PicthVariation.SHARP,
        'F': PicthVariation.SHARP,
        'A': PicthVariation.SHARP
      }
    case Key.E:
      return {
        ...defaultVariation,
        'D': PicthVariation.SHARP,
        'G': PicthVariation.SHARP,
        'C': PicthVariation.SHARP,
        'F': PicthVariation.SHARP
      }
    case Key.A:
      return {
        ...defaultVariation,
        'G': PicthVariation.SHARP,
        'C': PicthVariation.SHARP,
        'F': PicthVariation.SHARP
      }
    case Key.D:
      return {
        ...defaultVariation,
        'C': PicthVariation.SHARP,
        'F': PicthVariation.SHARP
      }
    case Key.G:
      return {
        ...defaultVariation,
        'F': PicthVariation.SHARP
      }

    case Key.D_FLAT:
      return {
        ...defaultVariation,
        'G': PicthVariation.FLAT,
        'D': PicthVariation.FLAT,
        'A': PicthVariation.FLAT,
        'E': PicthVariation.FLAT,
        'B': PicthVariation.FLAT
      }
      case Key.A_FLAT:
      return {
        ...defaultVariation,
        'D': PicthVariation.FLAT,
        'A': PicthVariation.FLAT,
        'E': PicthVariation.FLAT,
        'B': PicthVariation.FLAT
      }
    case Key.E_FLAT:
      return {
        ...defaultVariation,
        'A': PicthVariation.FLAT,
        'E': PicthVariation.FLAT,
        'B': PicthVariation.FLAT
      }
      case Key.B_FLAT:
      return {
        ...defaultVariation,
        'E': PicthVariation.FLAT,
        'B': PicthVariation.FLAT
      }
    case Key.F:
      return {
        ...defaultVariation,
        'B': PicthVariation.FLAT
      }
      
    default:
      return defaultVariation;
  }
}

export function getKey(flats = 0, sharps = 0) {
    if (flats > 0) {
      switch (flats) {
        case 1: return Key.F;
        case 2: return Key.B_FLAT;
        case 3: return Key.E_FLAT;
        case 4: return Key.A_FLAT;
        case 5: return Key.D_FLAT;
        case 6: return Key.G_FLAT;
        default: break;
      }
    } else if (sharps > 0) {
      switch (sharps) {
        case 1: return Key.G;
        case 2: return Key.D;
        case 3: return Key.A;
        case 4: return Key.E;
        case 5: return Key.B;
        case 6: return Key.F_SHARP;
        default: break;
      }
    }
    return Key.C; // Defaults
  }

export function getSharpKey(sharps = 0) {
    return getKey(0, sharps);
}

export function getFlatKey(flats = 0) {
    return getKey(flats); 
}

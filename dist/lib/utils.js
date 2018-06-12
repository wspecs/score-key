"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var constant_1 = require("./constant");
var py = require('pythonic');
var picthes = [
    { note: constant_1.Note.B, octave: 6 },
    { note: constant_1.Note.A, octave: 6 },
    { note: constant_1.Note.G, octave: 6 },
    { note: constant_1.Note.F, octave: 6 },
    { note: constant_1.Note.E, octave: 6 },
    { note: constant_1.Note.D, octave: 6 },
    { note: constant_1.Note.C, octave: 6 },
    { note: constant_1.Note.B, octave: 5 },
    { note: constant_1.Note.A, octave: 5 },
    { note: constant_1.Note.G, octave: 5 },
    { note: constant_1.Note.F, octave: 5 },
    { note: constant_1.Note.E, octave: 5 },
    { note: constant_1.Note.D, octave: 5 },
    { note: constant_1.Note.C, octave: 5 },
    { note: constant_1.Note.B, octave: 4 },
    { note: constant_1.Note.A, octave: 4 },
    { note: constant_1.Note.G, octave: 4 },
    { note: constant_1.Note.F, octave: 4 },
    { note: constant_1.Note.E, octave: 4 },
    { note: constant_1.Note.D, octave: 4 },
    { note: constant_1.Note.C, octave: 4 },
    { note: constant_1.Note.B, octave: 3 },
    { note: constant_1.Note.A, octave: 3 },
    { note: constant_1.Note.G, octave: 3 },
    { note: constant_1.Note.F, octave: 3 },
    { note: constant_1.Note.E, octave: 3 },
    { note: constant_1.Note.D, octave: 3 },
    { note: constant_1.Note.C, octave: 3 },
    { note: constant_1.Note.B, octave: 2 },
    { note: constant_1.Note.A, octave: 2 },
    { note: constant_1.Note.G, octave: 2 },
    { note: constant_1.Note.F, octave: 2 },
    { note: constant_1.Note.E, octave: 2 },
    { note: constant_1.Note.D, octave: 2 },
    { note: constant_1.Note.C, octave: 2 },
    { note: constant_1.Note.B, octave: 1 },
    { note: constant_1.Note.A, octave: 1 },
    { note: constant_1.Note.G, octave: 1 },
    { note: constant_1.Note.F, octave: 1 },
    { note: constant_1.Note.E, octave: 1 },
    { note: constant_1.Note.D, octave: 1 },
    { note: constant_1.Note.C, octave: 1 },
    { note: constant_1.Note.B, octave: 0 },
    { note: constant_1.Note.A, octave: 0 }
];
var positions = [
    constant_1.Line.ABOVE_FIVE, constant_1.Space.ABOVE_FIVE, constant_1.Line.ABOVE_FOUR, constant_1.Space.ABOVE_FOUR,
    constant_1.Line.ABOVE_THREE, constant_1.Space.ABOVE_THREE, constant_1.Line.ABOVE_TWO, constant_1.Space.ABOVE_TWO,
    constant_1.Line.ABOVE_ONE, constant_1.Space.ABOVE_ONE,
    constant_1.Line.ONE, constant_1.Space.ONE, constant_1.Line.TWO, constant_1.Space.TWO, constant_1.Line.THREE, constant_1.Space.THREE, constant_1.Line.FOUR,
    constant_1.Space.FOUR, constant_1.Line.FIVE, constant_1.Space.BELOW_ONE, constant_1.Line.BELOW_ONE, constant_1.Space.BELOW_TWO,
    constant_1.Line.BELOW_TWO, constant_1.Space.BELOW_THREE, constant_1.Line.BELOW_THREE, constant_1.Space.BELOW_FOUR,
    constant_1.Line.BELOW_FOUR, constant_1.Space.BELOW_FIVE, constant_1.Line.BELOW_FIVE,
];
function getLineOrSpaceMap(firstLine, staffSpacing) {
    var map = {};
    var step = 0.50 * staffSpacing;
    var start = (-5.25 * staffSpacing) + firstLine;
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var line = positions_1[_i];
        for (var _a = 0, _b = py.range(Math.round(start), Math.round(start + step)); _a < _b.length; _a++) {
            var number = _b[_a];
            map[String(number)] = line;
        }
        start += step;
    }
    return map;
}
exports.getLineOrSpaceMap = getLineOrSpaceMap;
function getPitch(clef, position) {
    var idx = positions.findIndex(function (x) { return x === position; });
    if (idx === -1) {
        return picthes[0];
    }
    if (clef === constant_1.Clef.BASE) {
        idx += 12;
    }
    return picthes[idx];
}
exports.getPitch = getPitch;
function getPitchVariationMap(key) {
    var defaultVariation = {
        'A': constant_1.PicthVariation.NORMAL,
        'B': constant_1.PicthVariation.NORMAL,
        'C': constant_1.PicthVariation.NORMAL,
        'D': constant_1.PicthVariation.NORMAL,
        'E': constant_1.PicthVariation.NORMAL,
        'F': constant_1.PicthVariation.NORMAL,
        'G': constant_1.PicthVariation.NORMAL,
    };
    switch (key) {
        case constant_1.Key.B:
            return __assign({}, defaultVariation, { 'D': constant_1.PicthVariation.SHARP, 'G': constant_1.PicthVariation.SHARP, 'C': constant_1.PicthVariation.SHARP, 'F': constant_1.PicthVariation.SHARP, 'A': constant_1.PicthVariation.SHARP });
        case constant_1.Key.E:
            return __assign({}, defaultVariation, { 'D': constant_1.PicthVariation.SHARP, 'G': constant_1.PicthVariation.SHARP, 'C': constant_1.PicthVariation.SHARP, 'F': constant_1.PicthVariation.SHARP });
        case constant_1.Key.A:
            return __assign({}, defaultVariation, { 'G': constant_1.PicthVariation.SHARP, 'C': constant_1.PicthVariation.SHARP, 'F': constant_1.PicthVariation.SHARP });
        case constant_1.Key.D:
            return __assign({}, defaultVariation, { 'C': constant_1.PicthVariation.SHARP, 'F': constant_1.PicthVariation.SHARP });
        case constant_1.Key.G:
            return __assign({}, defaultVariation, { 'F': constant_1.PicthVariation.SHARP });
        case constant_1.Key.D_FLAT:
            return __assign({}, defaultVariation, { 'G': constant_1.PicthVariation.FLAT, 'D': constant_1.PicthVariation.FLAT, 'A': constant_1.PicthVariation.FLAT, 'E': constant_1.PicthVariation.FLAT, 'B': constant_1.PicthVariation.FLAT });
        case constant_1.Key.A_FLAT:
            return __assign({}, defaultVariation, { 'D': constant_1.PicthVariation.FLAT, 'A': constant_1.PicthVariation.FLAT, 'E': constant_1.PicthVariation.FLAT, 'B': constant_1.PicthVariation.FLAT });
        case constant_1.Key.E_FLAT:
            return __assign({}, defaultVariation, { 'A': constant_1.PicthVariation.FLAT, 'E': constant_1.PicthVariation.FLAT, 'B': constant_1.PicthVariation.FLAT });
        case constant_1.Key.B_FLAT:
            return __assign({}, defaultVariation, { 'E': constant_1.PicthVariation.FLAT, 'B': constant_1.PicthVariation.FLAT });
        case constant_1.Key.F:
            return __assign({}, defaultVariation, { 'B': constant_1.PicthVariation.FLAT });
        default:
            return defaultVariation;
    }
}
exports.getPitchVariationMap = getPitchVariationMap;
function getKey(flats, sharps) {
    if (flats === void 0) { flats = 0; }
    if (sharps === void 0) { sharps = 0; }
    if (flats > 0) {
        switch (flats) {
            case 1: return constant_1.Key.F;
            case 2: return constant_1.Key.B_FLAT;
            case 3: return constant_1.Key.E_FLAT;
            case 4: return constant_1.Key.A_FLAT;
            case 5: return constant_1.Key.D_FLAT;
            case 6: return constant_1.Key.G_FLAT;
            default: break;
        }
    }
    else if (sharps > 0) {
        switch (sharps) {
            case 1: return constant_1.Key.G;
            case 2: return constant_1.Key.D;
            case 3: return constant_1.Key.A;
            case 4: return constant_1.Key.E;
            case 5: return constant_1.Key.B;
            case 6: return constant_1.Key.F_SHARP;
            default: break;
        }
    }
    return constant_1.Key.C; // Defaults
}
exports.getKey = getKey;
function getSharpKey(sharps) {
    if (sharps === void 0) { sharps = 0; }
    return getKey(0, sharps);
}
exports.getSharpKey = getSharpKey;
function getFlatKey(flats) {
    if (flats === void 0) { flats = 0; }
    return getKey(flats);
}
exports.getFlatKey = getFlatKey;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("../lib/utils");
var constant_1 = require("../lib/constant");
var chai_1 = require("chai");
describe('get key', function () {
    it('gets flat key', function () {
        chai_1.expect(utils.getKey(1)).to.equal(constant_1.Key.F);
        chai_1.expect(utils.getKey(2)).to.equal(constant_1.Key.B_FLAT);
        chai_1.expect(utils.getKey(3)).to.equal(constant_1.Key.E_FLAT);
        chai_1.expect(utils.getKey(4)).to.equal(constant_1.Key.A_FLAT);
        chai_1.expect(utils.getKey(5)).to.equal(constant_1.Key.D_FLAT);
    });
});
describe('get key', function () {
    it('gets sharp key', function () {
        chai_1.expect(utils.getKey(0, 1)).to.equal(constant_1.Key.G);
        chai_1.expect(utils.getKey(0, 2)).to.equal(constant_1.Key.D);
        chai_1.expect(utils.getKey(0, 3)).to.equal(constant_1.Key.A);
        chai_1.expect(utils.getKey(0, 4)).to.equal(constant_1.Key.E);
        chai_1.expect(utils.getKey(0, 5)).to.equal(constant_1.Key.B);
    });
});

import * as utils from '../lib/utils';
import { Key } from "../lib/constant";
import { expect } from 'chai';

describe('get key', () => {
  it('gets flat key', () => {
    expect(utils.getKey(1)).to.equal(Key.F);
    expect(utils.getKey(2)).to.equal(Key.B_FLAT);
    expect(utils.getKey(3)).to.equal(Key.E_FLAT);
    expect(utils.getKey(4)).to.equal(Key.A_FLAT);
    expect(utils.getKey(5)).to.equal(Key.D_FLAT);
  });
});

describe('get key', () => {
  it('gets sharp key', () => {
    expect(utils.getKey(0, 1)).to.equal(Key.G);
    expect(utils.getKey(0, 2)).to.equal(Key.D);
    expect(utils.getKey(0, 3)).to.equal(Key.A);
    expect(utils.getKey(0, 4)).to.equal(Key.E);
    expect(utils.getKey(0, 5)).to.equal(Key.B);
  });
});

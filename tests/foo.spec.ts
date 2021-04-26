import 'mocha';
import {expect} from 'chai';
import {foo} from '../src/index';

describe('Foo tests', () => {
  it('Says foo', () => {
    expect(foo()).to.be.eq('foo');
  });
});

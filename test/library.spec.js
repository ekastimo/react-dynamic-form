require('babel-core/register');
require('babel-polyfill');
import chai from 'chai';
const jsdom = require('jsdom').jsdom;

const exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: 'node.js'
};

documentRef = document;


import Library from '../dist/ListGrid.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given an instance of my library', function () {
  before(function () {
    lib = new Library();
  });
  describe('when I need the name', function () {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('Library');
    });
  });
});

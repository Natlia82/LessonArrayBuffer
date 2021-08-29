// import { test } from 'media-typer';
// import { from } from 'core-js/core/array';
import ArrayBufferConverter from '../arrayBufferConverter';
import getBuffer from '../getBuffer';

test('baseTest', () => {
  const rez = new ArrayBufferConverter();
  rez.load(getBuffer());
  expect((rez.toString())).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});

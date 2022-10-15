import {describe, expect, test} from '@jest/globals';
import {sayHello} from '../src/hello';

describe('say hello', () => {
  test("returns correct string", () =>
  expect(sayHello("World")).toBe("Hello there! It's me, World"))
});


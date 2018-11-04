'use strict';

var BenchmarkTester = require('benchmark-tester');
var assert = require('assert');
var ArithNumber = require('@fav/arith.number');

new BenchmarkTester()
  .addTest('@fav/arith.add', function(pkg, data) {
    return data[0].add(data[1]);
  })
  .addTest('fraction.js', function(Fraction, data) {
    return data[0].add(data[1]);
  })
  .configPackage('fraction.js', function(Fraction) {
    Fraction.REDUCE = false;
  })
  .setConverter('@fav/arith.add', function(data) {
    return [
      new ArithNumber(data[0][0], data[0][1], 0),
      new ArithNumber(data[1][0], data[1][1], 0),
    ];
  })
  .setConverter('fraction.js', function(data, Fraction) {
    return [
      new Fraction(data[0][0], data[0][1]),
      new Fraction(data[1][0], data[1][1]),
    ];
  })
  .verifyTest('@fav/arith.add', function(test, add) {
    var a = test(add, [
      new ArithNumber(-12, 5, 0),
      new ArithNumber(-34, 6, 0),
    ]);
    assert.strictEqual(a.numerator, -242);
    assert.strictEqual(a.denominator, 30);
    assert.strictEqual(a.exponent, 0);
  })
  .verifyTest('fraction.js', function(test, Fraction) {
    var f = test(Fraction, [
      new Fraction(-12, 5),
      new Fraction(-34, 6),
    ]);
    assert.strictEqual(f.s, -1);
    assert.strictEqual(f.n, 242);
    assert.strictEqual(f.d, 30);
  })
  .runTest('Zeros', [[0, 1], [0, 1]])
  .runTest('Integers', [[123, 1], [456, 1]])
  .runTest('Decimals', [[123, 1000], [4560, 10000]])
  .runTest('Fractions', [[123, 45], [456, 78]])
  .runTest('Fractions', [[12, 456000], [78, 980000]])
  .runTest('Big Numbers', [[9007199254740990, 300], [123456789, 45]])
  .print();


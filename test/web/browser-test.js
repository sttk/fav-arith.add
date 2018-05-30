(function(){
'use strict';


var expect = chai.expect;




var ArithNumber = fav.arith.number;
var add = fav.arith.add;

describe('fav.arith.add', function() {

  describe('Add zeros', function() {
    it('Should return zero ArithNumber object (1)', function() {
      var a1 = new ArithNumber(0, 1, 0);
      var a2 = new ArithNumber(0, 1, 0);
      var a3 = add(a1, a2);
      expect(a3.numerator).to.equal(0);
      expect(a3.denominator).to.equal(1);
      expect(a3.exponent).to.equal(0);
      expect(a3.toApproximateString()).to.equal('0');
    });

    it('Should return zero ArithNumber object (2)', function() {
      var a1 = new ArithNumber(0, 1, 100);
      var a2 = new ArithNumber(0, 1000, 0);
      var a3 = add(a1, a2);
      expect(a3.numerator).to.equal(0);
      expect(a3.denominator).to.equal(1);
      expect(a3.exponent).to.equal(0);
      expect(a3.toApproximateString()).to.equal('0');
    });
  });

  describe('Add integers with same exponents', function() {
    it('Should return accurate ArithNumber object (1)', function() {
      var a1 = new ArithNumber(1, 1, 4);
      var a2 = new ArithNumber(2, 1, 4);
      var a3 = add(a1, a2);
      expect(a3.numerator).to.equal(3);
      expect(a3.denominator).to.equal(1);
      expect(a3.exponent).to.equal(4);
      expect(a3.toApproximateString()).to.equal('30000');
    });

    it('Should return accurate ArithNumber object (2)', function() {
      var a1 = new ArithNumber(-123456789, 1, 1);
      var a2 = new ArithNumber(-987654321, 1, 1);
      var a3 = add(a1, a2);
      expect(a3.numerator).to.equal(-1111111110);
      expect(a3.denominator).to.equal(1);
      expect(a3.exponent).to.equal(1);
      expect(a3.toApproximateString()).to.equal('-11111111100');
    });
  });

  describe('Add integers with different exponents', function() {
    it('Should return accurate ArithNumber object (1)', function() {
      var a1 = new ArithNumber(1, 1, 0);
      var a2 = new ArithNumber(2, 1, 4);
      var a3 = add(a1, a2);
      expect(a3.numerator).to.equal(20001);
      expect(a3.denominator).to.equal(1);
      expect(a3.exponent).to.equal(0);
      expect(a3.toApproximateString()).to.equal('20001');
    });

    it('Should return accurate ArithNumber object (2)', function() {
      var a1 = new ArithNumber(1234, 1, 3);
      var a2 = new ArithNumber(5, 1, 2);
      var a3 = add(a1, a2);
      expect(a3.numerator).to.equal(12345);
      expect(a3.denominator).to.equal(1);
      expect(a3.exponent).to.equal(2);
      expect(a3.toApproximateString()).equal('1234500');
    });
  });

  describe('Add negative exponentials with same denominators and exponents',
  function() {
    it('Should return accurate ArithNumber object (1)', function() {
      var a1 = new ArithNumber(2, 1, -2);
      var a2 = new ArithNumber(5, 1, -2);
      var a3 = add(a1, a2);
      expect(a3.numerator).to.equal(7);
      expect(a3.denominator).to.equal(1);
      expect(a3.exponent).to.equal(-2);
      expect(a3.toApproximateString()).to.equal('0.07');
    });

    it('Should return accurate ArithNumber object (2)', function() {
      var a1 = new ArithNumber(-1234567, 1, -5);
      var a2 = new ArithNumber(-3333333, 1, -5);
      var a3 = add(a1, a2);
      expect(a3.numerator).to.equal(-4567900);
      expect(a3.denominator).to.equal(1);
      expect(a3.exponent).to.equal(-5);
      expect(a3.toApproximateString()).to.equal('-45.679');
    });
  });

  describe('Add negative exponentials with same denominators and exponents',
  function() {
    it('Should return accurate ArithNumber object (1)', function() {
      var a1 = new ArithNumber(2, 1, -1);
      var a2 = new ArithNumber(5, 1, -3);
      var a3 = add(a1, a2);
      expect(a3.numerator).to.equal(205);
      expect(a3.denominator).to.equal(1);
      expect(a3.exponent).to.equal(-3);
      expect(a3.toApproximateString()).to.equal('0.205');
    });

    it('Should return accurate ArithNumber object (2)', function() {
      var a1 = new ArithNumber(-333, 1, -3);
      var a2 = new ArithNumber(-555, 1, -1);
      var a3 = add(a1, a2);
      expect(a3.numerator).to.equal(-55833);
      expect(a3.denominator).to.equal(1);
      expect(a3.exponent).to.equal(-3);
      expect(a3.toApproximateString()).to.equal('-55.833');
    });
  });

  describe('Add fractions with same denominators and exponents', function() {
    it('Should return accurate ArithNumber object (1)', function() {
      var a1 = new ArithNumber(-1, 3, 1);
      var a2 = new ArithNumber(-2, 3, 1);
      var a3 = add(a1, a2);
      expect(a3.numerator).to.equal(-3);
      expect(a3.denominator).to.equal(3);
      expect(a3.exponent).to.equal(1);
      expect(a3.toApproximateString()).to.equal('-10');
    });
  });

  describe('Add fractions with same denominators and different exponents',
  function() {
    it('Should return accurate ArithNumber object (1)', function() {
      var a1 = new ArithNumber(-123, 45, 0);
      var a2 = new ArithNumber(55, 45, 2);
      var a3 = add(a1, a2);
      expect(a3.numerator).to.equal(5377);
      expect(a3.denominator).to.equal(45);
      expect(a3.exponent).to.equal(0);
      expect(a3.toApproximateString()).to.equal('119.48888888888888888888');
    });
  });

  describe('Add fractions with different denominators and same exponents',
  function() {
    it('Should return accurate ArithNumber object (1)', function() {
      var a1 = new ArithNumber(5, 6, 2);
      var a2 = new ArithNumber(3, 4, 2);
      var a3 = add(a1, a2);
      expect(a3.numerator).to.equal(19);
      expect(a3.denominator).to.equal(12);
      expect(a3.exponent).to.equal(2);
      expect(a3.toApproximateString()).to.equal('158.33333333333333333333');
    });

    it('Should return accurate ArithNumber object (2)', function() {
      var a1 = new ArithNumber(4, 2, -2);
      var a2 = new ArithNumber(4, 3, -2);
      var a3 = add(a1, a2);
      expect(a3.numerator).to.equal(20);
      expect(a3.denominator).to.equal(6);
      expect(a3.exponent).to.equal(-2);
      expect(a3.toApproximateString()).to.equal('0.03333333333333333333');
    });
  });

  describe('Add fractions with different denominators and exponents',
  function() {
    it('Should return accurate ArithNumber object (1)', function() {
      var a1 = new ArithNumber(123, 45, 3);
      var a2 = new ArithNumber(71, 9, 2);
      var a3 = add(a1, a2);
      expect(a3.numerator).to.equal(1585);
      expect(a3.denominator).to.equal(45);
      expect(a3.exponent).to.equal(2);
      expect(a3.toApproximateString()).to.equal('3522.22222222222222222222');
    });
  });

  describe('Add a NaN and a number', function() {
    it('Should return "inaccurate" ArithNumber object (1)', function() {
      var a1 = new ArithNumber(5, 6, 2);
      var a2 = new ArithNumber(NaN, NaN, NaN);
      var a3 = add(a1, a2);
      expect(a3.numerator).to.be.NaN;
      expect(a3.denominator).to.be.NaN;
      expect(a3.exponent).to.be.NaN;
      expect(a3.toApproximateString()).to.equal('NaN');
    });

    it('Should return "inaccurate" ArithNumber object (2)', function() {
      var a1 = new ArithNumber(NaN, NaN, NaN);
      var a2 = new ArithNumber(3, 4, 2);
      var a3 = add(a1, a2);
      expect(a3.numerator).to.be.NaN;
      expect(a3.denominator).to.be.NaN;
      expect(a3.exponent).to.be.NaN;
      expect(a3.toApproximateString()).to.equal('NaN');
    });

    it('Should return "inaccurate" ArithNumber object (3)', function() {
      var a1 = new ArithNumber(NaN, NaN, NaN);
      var a2 = new ArithNumber(NaN, NaN, NaN);
      var a3 = add(a1, a2);
      expect(a3.numerator).to.be.NaN;
      expect(a3.denominator).to.be.NaN;
      expect(a3.exponent).to.be.NaN;
      expect(a3.toApproximateString()).to.equal('NaN');
    });
  });

  describe('Add large numbers', function() {
    it('Should return "inaccurate" ArithNumber object', function() {
      var a1 = new ArithNumber(9007199254740991, 7, 2);
      var a2 = new ArithNumber(9007199254740991, 7, 2);
      var a3 = add(a1, a2);
      expect(a3.numerator).to.be.NaN;
      expect(a3.denominator).to.be.NaN;
      expect(a3.exponent).to.be.NaN;
      expect(a3.toApproximateString()).to.equal('NaN');
    });

    it('Should return accurate ArithNumber object when enable to reduce',
    function() {
      var a1 = new ArithNumber(9007199254740000, 540000, 2);
      var a2 = new ArithNumber(9007199254740000, 540000, 2);
      var a3 = add(a1, a2);
      expect(a3.numerator).to.equal(300239975158);
      expect(a3.denominator).to.equal(9);
      expect(a3.exponent).to.equal(2);
      expect(a3.toApproximateString()).to.equal(
        '3335999723977.77777777777777777777');
    });
  });

  describe('Attach the add function to ArithNumber.prototype',
  function() {
    it('Should accept a number parameter', function() {
      var a1 = new ArithNumber(123, 4, 0);
      var a2 = a1.add(55.5);
      expect(a2.numerator).to.deep.equal(3450);
      expect(a2.denominator).to.deep.equal(4);
      expect(a2.exponent).to.deep.equal(-1);
      expect(a2.toApproximateString()).to.equal('86.25');
    });

    it('Should accept a string parameter', function() {
      var a1 = new ArithNumber(123, 4, 0);
      var a2 = a1.add('55.5');
      expect(a2.numerator).to.deep.equal(3450);
      expect(a2.denominator).to.deep.equal(4);
      expect(a2.exponent).to.deep.equal(-1);
      expect(a2.toApproximateString()).to.equal('86.25');

      var a3 = a1.add('555e-1');
      expect(a3.numerator).to.deep.equal(3450);
      expect(a3.denominator).to.deep.equal(4);
      expect(a3.exponent).to.deep.equal(-1);
      expect(a3.toApproximateString()).to.equal('86.25');
    });

    it('Should accept an ArithNumber parameter', function() {
      var a1 = new ArithNumber(123, 4, 0);
      var a2 = a1.add(new ArithNumber(555, 1, -1));
      expect(a2.numerator).to.deep.equal(3450);
      expect(a2.denominator).to.deep.equal(4);
      expect(a2.exponent).to.deep.equal(-1);
      expect(a2.toApproximateString()).to.equal('86.25');

      var a3 = a1.add(new ArithNumber(555, 10, 0));
      expect(a3.numerator).to.deep.equal(1725);
      expect(a3.denominator).to.deep.equal(20);
      expect(a3.exponent).to.deep.equal(0);
      expect(a3.toApproximateString()).to.equal('86.25');
    });
  });
});

})();

# [@fav/arith.add][repo-url] [![NPM][npm-img]][npm-url] [![MIT License][mit-img]][mit-url] [![Build Status][travis-img]][travis-url] [![Build Status][appveyor-img]][appveyor-url] [![Coverage status][coverage-img]][coverage-url]

Calculates an accurate sum of two numbers.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports Node.js >= v0.10 and major Web browsers: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.


## Install

To install from npm:

```sh
$ npm install --save @fav/arith.number @fav/arith.add
```

***NOTE:*** *npm < 2.7.0 does not support scoped package, but old version Node.js supports it. So when you use such older npm, you should download this package from [github.com][repo-url], and move it in `node_modules/@fav/arith.add/` directory manually.*


## Usage

For Node.js:

```js
var ArithNumber = require('@fav/arith.number');
var add = require('@fav/arith.add');

var num1 = ArithNumber.of(1.23);
// => { numerator: 123, denominator: 1, exponent: -2 }

var num2 = ArithNumber.of('4.56');
// => { numerator: 456, denominator: 1, exponent: -2 }

1.23 + 4.56;
// => 5.789999999999999

var num3 = add(num1, num2);
// => { numerator: 579, denominator: 1, exponent: -2 }
num3.toApproximateString(); // => '5.79'

var num4 = num1.add(num2);
// => { numerator: 579, denominator: 1, exponent: -2 }
num4.toApproximateString();
// => '5.79'
```

For Web browsers:

```html
<script src="fav.arith.number.min.js"></script>
<script src="fav.arith.add.min.js"></script>
<script>
var ArithNumber = fav.arith.number;
var add = fav.arith.add;

var num1 = ArithNumber.of(1.23);
// => { numerator: 123, denominator: 1, exponent: -2 }

var num2 = ArithNumber.of('4.56');
// => { numerator: 456, denominator: 1, exponent: -2 }

1.23 + 4.56;
// => 5.789999999999999

var num3 = add(num1, num2);
// => { numerator: 579, denominator: 1, exponent: -2 }
num3.toApproximateString();
// => '5.79'

var num4 = num1.add(num2);
// => { numerator: 579, denominator: 1, exponent: -2 }
num4.toApproximateString();
// => '5.79'
</script>
```


## API

### <u>add(arithNum1, arithNum2) : ArithNumber</u>

Adds *arithNum1* and *arithNum2* and create a new ArithNumber object which has the sum of these two numbers.

#### Parameters:

| Parameter    |  Type       | Description                            |
|:-------------|:-----------:|:---------------------------------------|
| *arithNum1*  | ArithNumber | An ArithNumber object to be added.     |
| *arithNum2*  | ArithNumber | An ArithNumber object to be added.     |

#### Returns:

A new ArithNumber object having the sum of two numbers.

**Type:** ArithNumber


### <u>ArithNumber.prototype.add(num) : ArithNumber</u>

This package attaches `add` function to ArithNumber's prototype as its method.

This method adds a parameter *num* of which is either a number, a string or an ArithNumber object to the value of this ArithNumber object itself, and returns a new ArithNumber object having this added value.

#### Parameters:

| Parameter   |  Type           | Description                               |
|:------------|:---------------:|:------------------------------------------|
| *num*       | number &#124; string &#124; ArithNumber | A number, a string, or an ArithNumber to be added. |

#### Returns:

A new ArithNumber object having the sum of two numbers.

**Type:** ArithNumber

## Checked
                                                                   
### Node.js (4〜)

| Platform  |   4    |   5    |   6    |   7    |   8    |   9    |   10   |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### io.js (1〜3)

| Platform  |   1    |   2    |   3    |
|:---------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|

### Node.js (〜0.12)

| Platform  |  0.8   |  0.9   |  0.10  |  0.11  |  0.12  |
|:---------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### Web browsers

| Platform  | Chrome | Firefox | Vivaldi | Safari |  Edge  | IE11   |
|:---------:|:------:|:-------:|:-------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef; |&#x25ef; |&#x25ef;|   --   |   --   |
| Windows10 |&#x25ef;|&#x25ef; |&#x25ef; |   --   |&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef; |&#x25ef; |   --   |   --   |   --   |


## License

Copyright (C) 2018 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/sttk/fav-arith.add/
[npm-img]: https://img.shields.io/badge/npm-v0.1.1-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/arith.add
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[travis-img]: https://travis-ci.org/sttk/fav-arith.add.svg?branch=master
[travis-url]: https://travis-ci.org/sttk/fav-arith.add
[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/sttk/fav-arith.add?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/sttk/fav-arith-add
[coverage-img]: https://coveralls.io/repos/github/sttk/fav-arith.add/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sttk/fav-arith.add?branch=master


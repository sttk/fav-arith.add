## Benchmark test of @fav/arith.add

> Comparing with [fraction.js](https://www.npmjs.com/package/fraction.js)

### v0.1.1

|             | @fav/arith.add(0.1.1) | fraction.js(4.0.10) |
|:------------|----------------------:|--------------------:|
| Zeros       |    22,602,821 ops/sec |  12,022,714 ops/sec |
| Integers    |    24,451,534 ops/sec |  12,669,580 ops/sec |
| Decimals    |    19,499,320 ops/sec |  12,629,133 ops/sec |
| Fractions   |    12,185,627 ops/sec |  12,721,004 ops/sec |
| Fractions   |    11,124,798 ops/sec |  12,528,296 ops/sec |
| Big Numbers |     3,816,358 ops/sec |  12,456,890 ops/sec |

- Platform: Node.js 10.8.0 on Darwin 64-bit
- Machine: Intel(R) Core(TM) i7-2620M CPU @ 2.70GHz, 16GB


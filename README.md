[![Build Status](https://travis-ci.org/jh3y/key-book.svg?branch=master)](https://travis-ci.org/jh3y/key-book)
# key-book 🔑

Create string reference look ups from a string array in JavaScript ❄️

Pass `key-book` an array of strings with an optional prefix/suffix and it will return a frozen object that you can use as a look up.

Mitigate the risk of string typos in your applications where errors aren't likely to be thrown.

## Usage
```
const mirror = require('key-book');

const enums = mirror(["A", "B", "C"]);

enums; // {A: "A", B: "B", C: "C"}

enums.A = "B";

enums; // {A: "A", B: "B", C: "C"}

const prefixedEnums = mirror(["A", "B", "C"], "PREFIX_");

prefixedEnums; // {PREFIX_A: "PREFIX_A", PREFIX_B: "PREFIX_B", PREFIX_C: "PREFIX_C"}

const suffixedEnums = mirror(["A", "B", "C"], undefined, "_SUFFIX");

suffixedEnums; // {A_SUFFIX: "A_SUFFIX", B_SUFFIX: "B_SUFFIX", C_SUFFIX: "C_SUFFIX"}
```

## Background
I wrote about the rationale for using a package like `key-book` in [this article](https://blog.prototypr.io/enumeration-objects-in-javascript-ec06a83f39f2).

-------------

@jh3y 2019 MIT
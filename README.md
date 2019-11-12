# key-book 🔑

Create frozen enum objects from a string array in JavaScript ❄️

## Usage
```
const mirror = require('key-book');

const enums = mirror(["A", "B", "C"]);

enums; // {A: "A", B: "B", C: "C"}

enums.A = "B";

enums; // {A: "A", B: "B", C: "C"}
```

-------------

@jh3y 2019 MIT
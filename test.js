const assert = require("assert");
const mirror = require("./index.js");

describe("key-book", function() {
  it("creates correct keys", function() {
    const enums = mirror(["A", "B"]);
    assert.equal(enums.A, "A");
    assert.equal(enums.B, "B");
  });
  it("changing a value has no effect", () => {
    const enums = mirror(["A", "B"]);
    enums.A = "C";
    assert.equal(enums.A, "A");
  });
});

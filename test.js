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
  it("adds prefix when supplied", function() {
    const enums = mirror(["A", "B"]);
    assert.equal(enums.A, "A");
    const prefixedEnums = mirror(["A", "B"], "PREFIX__");
    assert.equal(prefixedEnums.PREFIX__A, "PREFIX__A");
  });
  it("adds suffix when supplied", function() {
    const enums = mirror(["A", "B"]);
    assert.equal(enums.B, "B");
    const suffixedEnums = mirror(["A", "B"], undefined, "__SUFFIX");
    assert.equal(suffixedEnums.A__SUFFIX, "A__SUFFIX");
  });
});

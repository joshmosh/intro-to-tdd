describe("Test Environment", function() {
  it("is expected to be setup and working", function() {
    expect(true).toBe(true);
  });

  describe("#array", function() {
    it("[1, 2, 3] is expected to be an array", function() {
      expect([1, 2, 3]).toBeAn("array");
    });
  });

  describe("#object", function() {
    it("{'foo': 'bar'} is expected to be an array", function() {
      expect({ "foo": "bar" }).toBeAn("object");
    });
  });

  describe("#string", function() {
    it("'string' is expected to be a string", function() {
      expect("string").toBeA("string");
    });
  });

  describe("#boolean", function() {
    it("true is expected to be a boolean", function() {
      expect(true).toBeAn("boolean");
    });
  });
});

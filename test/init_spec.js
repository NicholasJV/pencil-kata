
describe("Test runner init", function() {
  it("contains a spec with the simplest expectation", function() {
    expect(true).toBe(true);
    // expect(true).toBe(false);
  });
});

describe("Pencil test", function(){
  it("creates a pencil with correct properties", function(){
    var pencil_01 = new Pencil(200, 300, 30),
        pencil_02 = new Pencil(500, 700, 40)
    expect(pencil_01.pointDurabilityRating).toEqual(200)
    expect(pencil_01.length).toEqual(30)
    expect(pencil_02.eraserDurabilityRating).toEqual(800)
  })
})

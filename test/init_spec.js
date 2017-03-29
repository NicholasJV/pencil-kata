
describe("Test runner init", function() {
  it("contains a spec with the simplest expectation", function() {
    expect(true).toBe(true);
    // expect(true).toBe(false);
  });
});

describe("Pencil test", function(){
    var pencil_01,
        pencil_02

    beforeEach(function(){
        pencil_01 = new Pencil(200, 300, 30)
        pencil_02 = new Pencil(500, 700, 40)
    })

    it("creates a pencil with correct properties", function(){
        expect( pencil_01.pointDurabilityRating ).toEqual(200)
        expect( pencil_01.length ).toEqual(30)
        expect( pencil_02.eraserDurabilityRating ).toEqual(700)
    })

    it("restores pencil point durability with the sharpen method", function(){
        pencil_01.currentPointDurability -= 101 // simulate writing
        expect( pencil_01.currentPointDurability ).toEqual(99)
        pencil_01.sharpen()
        expect( pencil_01.pointDurabilityRating ).toEqual(200)
    })
})

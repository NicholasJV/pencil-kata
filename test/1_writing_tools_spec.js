
describe("Writing Tools", function(){

    var pencil_01,
        pencil_02,
        page_01,
        page_02

    beforeEach(function(){
        // Pencil(point, eraser, length)
        pencil_01 = new Pencil(200, 300, 30)
        pencil_02 = new Pencil(500, 700, 40)
        // Paper(title, initial_text)
        page_01 = new Paper('Page_01', 'The quick brown fox')
        page_02 = new Paper('Page_02', '...jumped over the lazy dog.')
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
        // TODO: explore edge cases
    })

    it("creates a piece of paper with correct properties", function(){
        expect( page_01.title ).toEqual('Page_01')
        expect( page_01.text ).toEqual('The quick brown fox')
        expect( page_01.timestamp ).not.toBe(undefined)
        expect( page_02.text ).toEqual('...jumped over the lazy dog.')
        // somewhat arbitrary test just for fun:
        expect( page_01.timestamp ).not.toBeGreaterThan( page_02.timestamp )
    })

})


describe("Writing : ", function(){

    var pencil_01,
        pencil_02,
        page_01,
        page_02,
        page_03,
        textDegrade25 = 'XXXXX XXXXX xxxxx'
        textDegrade51 = 'XXXXX XXXXX XXXXX XXXXX 1@3$5%7^9) x'

    beforeEach(function(){
        // Pencil(point, eraser, length)
        pencil_01 = new Pencil(200, 300, 30)
        pencil_02 = new Pencil(500, 700, 40)
        pencil_03_terrible_durability = new Pencil(20, 100, 10)
        // Paper(title, initial_text)
        page_01 = new Paper('Page_01', 'The quick brown fox')
        page_02 = new Paper('Page_02', '...jumped over the lazy dog.')
        page_03 = new Paper('Page_03', '') // intentionally blank for testing
    })

    it("Creates a pencil with correct properties", function(){
        expect( pencil_01.pointDurabilityRating ).toEqual(200)
        expect( pencil_01.length ).toEqual(30)
        expect( pencil_02.eraserDurabilityRating ).toEqual(700)
    })

    it("Creates a piece of paper with correct properties", function(){
        expect( page_01.title ).toEqual('Page_01')
        expect( page_01.text ).toEqual('The quick brown fox')
        expect( page_01.timestamp ).not.toBe(undefined)
        expect( page_02.text ).toEqual('...jumped over the lazy dog.')
        // somewhat arbitrary test just for fun:
        expect( page_01.timestamp ).not.toBeGreaterThan( page_02.timestamp )
    })

    it("Writes to a clean sheet of paper correctly with simple point degradation", function(){
        // Write(paper, pencil, newText)
        Write(page_03, pencil_01, 'I like to eat apples and bananas')
        expect(page_03.text).toBe('I like to eat apples and bananas')
        expect(pencil_01.currentPointDurability).toBe( // hacky but will refactor later
          200 - 'iiliketoeatapplesandbananas'.length
        )
    })

    it("Writes to a piece of paper multiple times correctly", function(){
        // Write(paper, pencil, newText)
        Write(page_01, pencil_01, ' jumped over the lazy dog.')
        Write(page_01, pencil_02, ' Then a pig flew by.')
        expect(page_01.text).toBe(
            'The quick brown fox jumped over the lazy dog. Then a pig flew by.'
        )
    })

    it("Pencil degrades and sharpens properly", function(){
        Write(page_02, pencil_01, textDegrade51)
        expect( pencil_01.currentPointDurability ).toEqual(149)
        pencil_01.sharpen()
        expect( pencil_01.currentPointDurability ).toEqual(200)
    })

     it("Pencil degrades fully without negative durability, sharpens back", function(){
        Write(page_02, pencil_03_terrible_durability, textDegrade25)
        expect( pencil_03_terrible_durability.currentPointDurability ).toEqual(0)
        pencil_03_terrible_durability.sharpen()
        expect( pencil_03_terrible_durability.pointDurabilityRating ).toEqual(20)
     })

})

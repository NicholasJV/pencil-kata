
describe("Writing : ", function(){

    var no_2_pencil,
        strong_pencil,
        textDegrade25 = 'XXXXX XXXXX xxxxx'
        textDegrade51 = 'XXXXX XXXXX XXXXX XXXXX 1@3$5%7^9) x'

    beforeEach(function(){
        /*   Pencil( point, eraser, length )   */
        strong_pencil = new Pencil(500, 700, 40)
        no_2_pencil = new Pencil(200, 300, 30)
        test_page = new Paper('')
    })

    it("Creates pencils with correct properties", function(){
        expect( no_2_pencil.pointDurabilityRating ).toEqual(200)
        expect( no_2_pencil.length ).toEqual(30)
        expect( strong_pencil.pointDurabilityRating ).toEqual(500)
        expect( strong_pencil.eraserDurabilityRating ).toEqual(700)
    })

    it("Writes to a sheet of paper correctly with simple point degradation", function(){
        var rating = no_2_pencil.pointDurabilityRating
        /*   Write( paper, pencil, newText )   */
        Write(test_page, no_2_pencil, 'I like to eat apples and bananas')
        expect(test_page.text).toBe('I like to eat apples and bananas')
        expect(no_2_pencil.currentPointDurability).toBe( // hacky but will refactor later
          rating - 'iiliketoeatapplesandbananas'.length
        )
    })

    it("Writes to a piece of paper multiple times correctly", function(){
        Write(test_page, no_2_pencil, 'The quick brown fox')
        Write(test_page, no_2_pencil, ' jumped over the lazy dog.')
        Write(test_page, no_2_pencil, ' Then a pig flew by.')
        expect(test_page.text).toBe(
            'The quick brown fox jumped over the lazy dog. Then a pig flew by.'
        )
    })

})

describe("Durability : ", function(){

    var no_2_pencil,
        strong_pencil,
        textDegrade25 = 'XXXXX XXXXX xxxxx'
        textDegrade51 = 'XXXXX XXXXX XXXXX XXXXX 1@3$5%7^9) x'

    beforeEach(function(){
        // Pencil(point, eraser, length)
        strong_pencil = new Pencil(500, 700, 40)
        weak_pencil = new Pencil(20, 10, 10)
        test_page = new Paper('')
    })

    it("Pencil degrades and sharpens properly", function(){
        var rating = strong_pencil.pointDurabilityRating
        var ogLength = strong_pencil.length

        Write(test_page, strong_pencil, textDegrade51)
        expect( strong_pencil.currentPointDurability ).toEqual(rating - 51)

        strong_pencil.sharpen()
        expect( strong_pencil.currentPointDurability ).toEqual(rating)
        expect( strong_pencil.length ).toEqual(ogLength - 1)
    })

     it("Pencil degrades fully without negative durability, sharpens back", function(){
        Write(test_page, weak_pencil, textDegrade25)
        expect( weak_pencil.currentPointDurability ).toEqual(0)

        weak_pencil.sharpen()
        expect( weak_pencil.pointDurabilityRating ).toEqual(20)
     })

     it("Pencil won't write if point is spent", function(){
        Write(test_page, weak_pencil,
            'Lowercaselettersshoulddegradethepencilpointbyavalueofone'
        )
        expect( weak_pencil.currentPointDurability ).toEqual(0)
        expect( test_page.text ).toBe('Lowercaseletterssho')
     })

})

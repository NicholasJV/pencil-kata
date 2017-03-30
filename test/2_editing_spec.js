
describe("EDITING : ", function(){

    var pencil_02,
        page_01

    beforeEach(function(){
        // Pencil(point, eraser, length)
        pencil_02 = new Pencil(500, 700, 40)
        pencil_03_stubby_eraser = new Pencil(100, 10, 10)
        // Paper(title, initial_text)
        page_01 = new Paper('Page_01',
            'How much wood would a woodchuck chuck if a woodchuck could chuck wood?'
        )
    })

    it("Erases a word or phrase correctly (the last instance of the word on the paper)", function(){
        // Erase(paper, pencil, textToErase)
        Erase(page_01, pencil_02, 'wood')
        expect(page_01.text).toBe(
          'How much wood would a woodchuck chuck if a woodchuck could chuck     ?'
        )
        // check cases with leading/tralling space, should perform same
        Erase(page_01, pencil_02, ' wood')
        expect(page_01.text).toBe(
          'How much wood would a woodchuck chuck if a     chuck could chuck     ?'
        )
        Erase(page_01, pencil_02, ' wood would a woodchuck ')
        expect(page_01.text).toBe(
          'How much                        chuck if a     chuck could chuck     ?'
        )
    })

    it("Erases nothing if phrase is not found, even on close edge cases", function(){
        Erase(page_01, pencil_02, 'woods')
        Erase(page_01, pencil_02, 'dwood')
        Erase(page_01, pencil_02, 'woob')
        Erase(page_01, pencil_02, 'tood')
        expect(page_01.text).toBe(
            'How much wood would a woodchuck chuck if a woodchuck could chuck wood?'
        )
    })

    it("Eraser degrades properly without negative durability", function(){
        Erase(page_01, pencil_02, 'chuck wood')
        expect(pencil_02.currentEraserDurability).toBe(700 - 'chuckwood'.length)
        Erase(page_01, pencil_03_stubby_eraser, 'would a woodchuck chuck')
        expect(pencil_03_stubby_eraser.currentEraserDurability).toBe(0)
    })

    xit("Eraser fully degrades and stops erasing at zero if told to continue", function(){

    })


})

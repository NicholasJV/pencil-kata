
describe("EDITING PROCESS:", function(){

    var pencil_02,
        page_02

    beforeEach(function(){
        pencil_02 = new Pencil(500, 700, 40)
        // Paper(title, initial_text)
        page_02 = new Paper('Page_02',
            'How much wood would a woodchuck chuck if a woodchuck could chuck wood?'
        )
    })

    it("Erases a word or phrase correctly (the last instance of the word on the paper)", function(){
        // Erase(paper, pencil, textToErase)
        Erase(page_02, pencil_02, 'wood')
        expect(page_02.text).toBe(
          'How much wood would a woodchuck chuck if a woodchuck could chuck     ?'
        )
        // check cases with leading/tralling space, should perform same
        Erase(page_02, pencil_02, ' wood')
        expect(page_02.text).toBe(
          'How much wood would a woodchuck chuck if a     chuck could chuck     ?'
        )
        Erase(page_02, pencil_02, ' wood would a woodchuck ')
        expect(page_02.text).toBe(
          'How much                        chuck if a     chuck could chuck     ?'
        )
    })

    it("Erases nothing if phrase is not found, even on close edge cases", function(){
        Erase(page_02, pencil_02, 'woods')
        Erase(page_02, pencil_02, 'dwood')
        Erase(page_02, pencil_02, 'woob')
        Erase(page_02, pencil_02, 'tood')
        expect(page_02.text).toBe(
            'How much wood would a woodchuck chuck if a woodchuck could chuck wood?'
        )
    })

    // TODO: eraser degrades properly

})

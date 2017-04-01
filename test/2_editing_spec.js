
describe("Editing : ", function(){

    var pencil_01,
        pencil_02_stubby_eraser,
        pencil_03_terrible_point,
        page_01,
        page_02

    beforeEach(function(){
        // Pencil(point, eraser, length)
        pencil_01 = new Pencil(500, 700, 40)
        pencil_02_stubby_eraser = new Pencil(100, 10, 10)
        pencil_03_terrible_point = new Pencil(20, 100, 10)
        // Paper(title, initial_text)

// start tests with blank pages and only use write method to initialize
        page_01 = new Paper('Page_01',
            'How much wood would a woodchuck chuck if a woodchuck could chuck wood?'
        )
        // Blank page for editing tests
        page_02 = new Paper('Page_02',
            'How much                        chuck if a     chuck could chuck     ?'
        )
    })

    it("Erases a word or phrase correctly \
    (the last instance of the word on the paper)", function(){
        // Erase(paper, pencil, textToErase)
        Erase(page_01, pencil_01, 'wood')
        expect(page_01.text).toBe(
          'How much wood would a woodchuck chuck if a woodchuck could chuck     ?'
        )
        // Check cases with leading/tralling space, should perform same
        Erase(page_01, pencil_01, ' wood')
        expect(page_01.text).toBe(
          'How much wood would a woodchuck chuck if a     chuck could chuck     ?'
        )
        Erase(page_01, pencil_01, ' wood would a woodchuck ')
        expect(page_01.text).toEqual(page_02.text)
    })

    it("Erases nothing if phrase is not found, even on close edge cases", function(){
        Erase(page_01, pencil_01, 'woods')
        Erase(page_01, pencil_01, 'dwood')
        Erase(page_01, pencil_01, 'woob')
        Erase(page_01, pencil_01, 'tood')
        expect(page_01.text).toBe(
            'How much wood would a woodchuck chuck if a woodchuck could chuck wood?'
        )
    })

    it("Eraser degrades properly without negative durability", function(){
        Erase(page_01, pencil_01, 'chuck wood')
        expect(pencil_01.currentEraserDurability).toBe(700 - 'chuckwood'.length)
        Erase(page_01, pencil_02_stubby_eraser, 'would a woodchuck chuck')
        expect(pencil_02_stubby_eraser.currentEraserDurability).toBe(0)
    })

    it("Erases backwards, stops erasing at zero even if told to continue", function(){
        Erase(page_01, pencil_02_stubby_eraser, 'chuck if a woodchuck could chuck wood')
        expect(page_01.text).toBe(
            'How much wood would a woodchuck chuck if a woodchuck coul            ?'
        )
    })
})


describe("Insert Edit : ", function(){

    var pencil_01,
        pencil_02_stubby_eraser,
        pencil_03_terrible_point,
        page_01,
        page_02

    beforeEach(function(){
        // Pencil(point, eraser, length)
        pencil_01 = new Pencil(500, 700, 40)
        pencil_02_stubby_eraser = new Pencil(100, 10, 10)
        pencil_03_terrible_point = new Pencil(20, 100, 10)
        // Paper(title, initial_text)
// start tests with blank pages and only use write method to initialize
        page_01 = new Paper('Page_01',
            'How much wood would a woodchuck chuck if a woodchuck could chuck wood?'
        )
        // Blank page for editing tests
        page_02 = new Paper('Page_02',
            'How much                        chuck if a     chuck could chuck     ?'
        )
    })
    it("Adds an edit text into first whitespace properly", function(){
        // InsertEdit(paper, pencil, textToInsert)
        InsertEdit(page_02, pencil_01, ' bananas would a gorilla')
        expect(page_02.text).toBe(
          'How much bananas would a gorillachuck if a     chuck could chuck     ?'
        )
    })

    it("Adds an edit text into first whitespace with overwriting subsequent text", function(){
        // InsertEdit(paper, pencil, textToInsert)
        InsertEdit(page_02, pencil_01, ' bananas would a gorilla eat if... wait...')
        expect(page_02.text).toBe(
          'How much bananas would a gorilla@@@@@i@@.@ wait@@@ck could chuck     ?'
        )
    })

  /*_____ Example text edit to help visualize overwrite process: ______________*\
   *
   *  below is: 1. starting text,
   *            2. erased text,
   *            3. new text,
   *            4. ending text,
   *            5. text ultimately written after collisions are determined.
   *
   * 1. 'How much wood would a woodchuck chuck if a woodchuck could chuck wood?'
   * 2. 'How much                        chuck if a     chuck could chuck     ?'
   * 3.          'bananas would a gorilla eat if... wait...'
   * 4. 'How much bananas would a gorilla@@@@@i@@.@ wait@@@ck could chuck     ?'
   * 5.          'bananas would a gorilla@@@@@ @@.@ wait@@@'
  \*___________________________________________________________________________*/

})

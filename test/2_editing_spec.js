
describe("Erasing: ", function(){

    var strong_pencil,
        weak_pencil,
        test_page,
        page_01,
        page_02

    beforeEach(function(){
        /*   Pencil(point, eraser, length)   */
        strong_pencil = new Pencil(500, 700, 40)
        weak_pencil = new Pencil(20, 10, 10)
        test_page = new Paper('')
        woodchuck_test_phrase =
            'How much wood would a woodchuck chuck if a woodchuck could chuck wood?'
        Write(test_page, strong_pencil, woodchuck_test_phrase)
    })

    it("Erases a word or phrase correctly (the last instance of the word on the paper)",
    function(){
        // Erase(paper, pencil, textToErase)
        Erase(test_page, strong_pencil, 'wood')
        expect(test_page.text).toBe(
            'How much wood would a woodchuck chuck if a woodchuck could chuck     ?'
        )
        /*   Check cases with leading/tralling space, should perform same   */
        Erase(test_page, strong_pencil, ' wood')
        expect(test_page.text).toBe(
            'How much wood would a woodchuck chuck if a     chuck could chuck     ?'
        )
        Erase(test_page, strong_pencil, ' wood would a woodchuck ')
        expect(test_page.text).toEqual(
            'How much                        chuck if a     chuck could chuck     ?'
        )
    })

    it("Erases nothing if phrase is not found, even on close edge cases", function(){
        Erase(test_page, strong_pencil, 'woods')
        Erase(test_page, strong_pencil, 'dwood')
        Erase(test_page, strong_pencil, 'woo ')
        Erase(test_page, strong_pencil, ' ood')
        expect(test_page.text).toBe(
            'How much wood would a woodchuck chuck if a woodchuck could chuck wood?'
        )
    })

    it("Eraser degrades properly without negative durability", function(){
        var rating = strong_pencil.eraserDurabilityRating
        Erase(test_page, strong_pencil, 'chuck wood')
        expect(strong_pencil.currentEraserDurability).toBe(rating - 'chuckwood'.length)
        Erase(test_page, weak_pencil, 'would a woodchuck chuck')
        expect(weak_pencil.currentEraserDurability).toBe(0)
    })

    it("Erases backwards, stops erasing at zero even if told to continue", function(){
        Erase(test_page, weak_pencil, 'chuck if a woodchuck could chuck wood')
        expect(test_page.text).toBe(
            'How much wood would a woodchuck chuck if a woodchuck coul            ?'
        )
    })
})


describe("Insert Editing : ", function(){

    var strong_pencil,
        weak_pencil,
        erased_page

    beforeEach(function(){
        // Pencil(point, eraser, length)
        strong_pencil = new Pencil(500, 700, 40)
        weak_pencil = new Pencil(20, 10, 10)
        // Paper(title, initial_text)
        erased_page = new Paper(
            'How much                        chuck if a     chuck could chuck     ?'
        )
    })
    it("Adds an edit text into first whitespace (longer than two) properly", function(){
        // InsertEdit(paper, pencil, textToInsert)
        InsertEdit(erased_page, strong_pencil, ' bananas would a gorilla')
        expect(erased_page.text).toBe(
          'How much bananas would a gorillachuck if a     chuck could chuck     ?'
        )
    })

    it("Adds an edit text into first whitespace, overwrites '@' on existing characters",
    function(){
        InsertEdit(erased_page, strong_pencil, ' bananas would a gorilla eat if... wait...')
        expect(erased_page.text).toBe(
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


describe("Writing process test", function(){
    var pencil_01,
        pencil_02,
        page_01,
        page_02,
        page_03

    beforeEach(function(){
        pencil_01 = new Pencil(200, 300, 30)
        pencil_02 = new Pencil(500, 700, 40)
        pencil_03_used = new Pencil(5, 100, 10)
        // Paper(title, initial_text)
        page_01 = new Paper('Page_01', '') // intentionally blank for testing
        page_02 = new Paper('Page_02',
            'How much wood would a woodchuck chuck if a woodchuck could chuck wood?'
        )
        page_03 = new Paper('Page_03', 'The quick brown fox')
    })

    it("Writes to a clean sheet of paper correctly with simple point degradation", function(){
        // Write(paper, pencil, newText)
        Write(page_01, pencil_01, 'I like to eat apples and bananas')
        expect(page_01.text).toBe('I like to eat apples and bananas')
        expect(pencil_01.currentPointDurability).toBe( // hacky but will refactor later
          200 - 'iiliketoeatapplesandbananas'.length
        )
    })

    it("Writes to a piece of paper multiple times correctly", function(){
        // Write(paper, pencil, newText)
        Write(page_03, pencil_01, ' jumped over the lazy dog.')
        Write(page_03, pencil_02, ' Then a pig flew by.')
        expect(page_03.text).toBe(
            'The quick brown fox jumped over the lazy dog. Then a pig flew by.'
        )
    })

    // TODO: test more complicated point degradation
    it("Writes ")


    it("Erases a word correctly (the last instance of the word on the paper", function(){
        // Erase(paper, pencil, textToErase)
        Erase(page_02, pencil_02, 'wood')
        expect(page_02.text).toBe(
          'How much wood would a woodchuck chuck if a woodchuck could chuck     ?'
        )
        Erase(page_02, pencil_02, 'wood')
        expect(page_02.text).toBe(
          'How much wood would a woodchuck chuck if a     chuck could chuck     ?'
        )
    })

})


describe("Writing process test", function(){
    var pencil_01,
        pencil_02,
        page_01,
        page_02,
        page_03

    beforeEach(function(){
        pencil_01 = new Pencil(200, 300, 30)
        pencil_02 = new Pencil(500, 700, 40)
        // Paper(title, initial_text)
        page_01 = new Paper('Page_01', '') // intentionally blank for testing
        page_02 = new Paper('Page_02',
            'How much wood would a woodchuck chuck if a woodchuck could chuck wood?'
        )
        page_03 = new Paper('Page_03', 'The quick brown fox')
    })

    it("Writes to a clean sheet of paper correctly", function(){
        // Write(paper, pencil, newText)
        Write(page_01, pencil_01, 'I like to eat apples and bananas')
        expect(page_01.text).toBe('I like to eat apples and bananas')
    })

    it("Writes to a piece of paper multiple times correctly", function(){
        // Write(paper, pencil, newText)
        Write(page_03, pencil_01, ' jumped over the lazy dog.')
        Write(page_03, pencil_02, ' Then a pig flew by.')
        expect(page_03.text).toBe(
            'The quick brown fox jumped over the lazy dog. Then a pig flew by.'
        )
    })

    // Add point degradation next
    it("")


})

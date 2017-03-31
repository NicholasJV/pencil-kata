
describe("Combined Actions : ", function(){


    var pencilOnLifeSupport,
        page_01

    beforeEach(function(){
        pencilOnLifeSupport = new Pencil(10, 20, 2)
        page_01 = new Paper("Page_01", "This Text is 22 Characters")
    })

    it("It writes, erases, and edits together with proper point, eraser degradadation", function(){
        Write(page_01, pencilOnLifeSupport, " plus 5")
        expect(pencilOnLifeSupport.currentPointDurability).toBe(5)


    })

    // TODO: test longer text and multiple read, write, erase, edit combos


})

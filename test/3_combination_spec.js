
describe("Combined Actions : ", function(){


    var pencilOnLifeSupport,
        page_01

    beforeEach(function(){
        pencilOnLifeSupport = new Pencil(12, 5, 2)
        page_01 = new Paper("Page_01", "This Text is 22 Characters")
    })

    it("It writes, erases, sharpens and edits, together with proper point, eraser degradadation", function(){
        Write(page_01, pencilOnLifeSupport, " plus 5")
        // console.log(page_01.text);
        expect(pencilOnLifeSupport.currentPointDurability).toBe(7)
        Erase(page_01, pencilOnLifeSupport, 'Characters')
        // console.log(page_01.text);
        expect(page_01.text).toBe("This Text is 22 Chara      plus 5")
        pencilOnLifeSupport.sharpen()
        InsertEdit(page_01, pencilOnLifeSupport,       'cters plus 5 and another some')
        expect(page_01.text).toBe("This Text is 22 Characters @@@@ @")
        pencilOnLifeSupport.sharpen()
        Write(page_01, pencilOnLifeSupport, " I'm dying...")
        pencilOnLifeSupport.sharpen()
        // now should be dead:
        Write(page_01, pencilOnLifeSupport, "Mr. Text? Haven't heard that name in years")
    })

})

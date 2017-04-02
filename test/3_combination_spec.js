
describe("Combined Actions : ", function(){

    var pencil_on_life_support,
        test_page

    beforeEach(function(){
        pencil_on_life_support = new Pencil(12, 5, 2)
        test_page = new Paper("This Text is 22 Characters")
    })

    it("It writes, erases, sharpens and edits, together with proper point, eraser degradation", function(){
        Write(test_page, pencil_on_life_support, " plus 5")
        expect(pencil_on_life_support.currentPointDurability).toBe(7)

        Erase(test_page, pencil_on_life_support, 'Characters')
        expect(test_page.text).toBe("This Text is 22 Chara      plus 5")
        pencil_on_life_support.sharpen()

        InsertEdit(test_page, pencil_on_life_support,       'cters plus 5 and another some')
        expect(test_page.text).toBe("This Text is 22 Characters @@@@ @")
        pencil_on_life_support.sharpen()

        Write(test_page, pencil_on_life_support, " I'm dying...")
        pencil_on_life_support.sharpen()

        // now should be dead and won't write this part:
        Write(test_page, pencil_on_life_support, "Mr. Text? Haven't heard that name in years")
        expect(test_page.text).toBe("This Text is 22 Characters @@@@ @ I'm dying...")
    })

})

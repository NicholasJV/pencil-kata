
describe("Combination test : ", function(){

    var prep_pencil,
        pencil_on_life_support,
        test_page

    beforeEach(function(){
        prep_pencil = new Pencil(500, 500, 50)
        pencil_on_life_support = new Pencil(12, 5, 2)
        test_page = new Paper()
        Write(test_page, prep_pencil, "This Text is 22 Characters")
    })

    it("It writes, erases, sharpens and edits, together with proper point, eraser degradation", function(){
        Write(test_page, pencil_on_life_support, " plus 5")
        expect(pencil_on_life_support.sharpness).toBe(7)

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

describe("Functional basic chaining : ", function(){

    var writer

    beforeEach(function(){
        writer = new Writer()
        writer.context.paper = new Paper()
        writer.context.pencil = new Pencil(200, 500, 30)
    })

    it("Sets a new writer context with a new pencil and paper", function() {
        expect(writer.context.pencil.length).toBe(30)
    })

    it("Writes to the writer's paper and returns it", function() {
        writer.write('no justice just us')
        expect(writer.context.paper.text).toBe('no justice just us')
    })

    it("Erase method chains onto a write action and erases properly", function() {
        writer.write('no justice just us').erase('no justice')
        expect(writer.context.paper.text).toBe('           just us')
    })

    it("Insert method chains on and inserts properly", function() {
        writer.write('no justice just us').erase('no justice')
            .insertEdit("we're here ")
        expect(writer.context.paper.text).toBe("we're here just us")
    })

})

describe("Functional combination test : ", function(){

    var writer,
        prep_pencil,
        pencil_on_life_support,
        test_page

    beforeEach(function(){
        pencil_on_life_support = new Pencil(12, 5, 2)
        prep_pencil = new Pencil(500, 500, 50)
        test_page = new Paper()
        writer = new Writer()
        writer.context = { paper: test_page, pencil: prep_pencil }
        writer.write("This Text is 22 Characters")
    })

    it("Functional implementation produces the same results as the combination test:",
    function(){
        writer.context.pencil = pencil_on_life_support
        writer.write(' plus 5').erase('Characters')
        expect(pencil_on_life_support.sharpness).toBe(7)

        writer.context.pencil.sharpen() // change to be able to chain off sharpen
        writer.insertEdit('cters plus 5 and another some').context.pencil.sharpen()
        expect(test_page.text).toBe("This Text is 22 Characters @@@@ @")

        writer.write(" I'm dying...").erase('This Text').context.pencil.sharpen()
        writer.write("Mr. Text? Haven't heard that name in years")
        expect(test_page.text).toBe("This Text is 22 Characters @@@@ @ I'm dying...")
    })

})

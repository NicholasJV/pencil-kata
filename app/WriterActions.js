
function Writer() {
    this.pencil = {}
    this.paper = {}
}

Writer.prototype.write = function (text) {
    Write(this.paper, this.pencil, text)
    return this
}

Writer.prototype.erase = function (text) {
    Erase(this.paper, this.pencil, text)
    return this
}

Writer.prototype.insertEdit = function (text) {
    InsertEdit(this.paper, this.pencil, text)
    return this
}

Writer.prototype.setPencil = function (pencil) {
    this.pencil = pencil
}

Writer.prototype.setPaper = function (paper) {
    this.paper = paper
}

function Write(paper, pencil, newText) {
    if (pencil.isDead()){ return }
    var written = []

    for ( var i = 0; i < newText.length; i++ ){
        var char = newText[i]
        var valid = pencil.degradePoint(char)
        if (!valid) { break }
        written.push(char)
    }

    paper.text += written.join('')
}

function Erase(paper, pencil, textToErase){
    if (pencil.eraserDead()) { return }
    var eraseLength = textToErase.length,
        paperText = paper.text.split(''),
        eraseIndex = paper.text.lastIndexOf(textToErase)
    if (eraseIndex < 0) {return paper}

    for ( var i = eraseIndex-1 + textToErase.length; i >= eraseIndex; i-- ){
        if (paperText[i] === ' ') { continue }
        if (pencil.eraserStrength){
            pencil.eraserStrength--
            paperText[i] = ' '
        }
        if (pencil.eraserDead()) { break }
    }

    paper.text = paperText.join('')
}

function InsertEdit(paper, pencil, newEditText){
    if (pencil.isDead()) { return }
    /**
     * Only insert into triple whitespace to leave the option of
     *   double whitespace for sentence break.
     */
    var insertPoint = paper.text.indexOf('   ')
    if (insertPoint < 0) { return paper }
    var paperText = paper.text.split('')
    var editTextIndex = 0

    for ( var i = insertPoint; editTextIndex < newEditText.length; i++ ){
        if (i >= paperText.length || pencil.isDead() ) { break }
        var char = newEditText[editTextIndex]
        if (paperText[i] === ' '){
            var valid = pencil.degradePoint(char)
            if (!valid) { break }
            paperText[i] = char
        } else {
            paperText[i] = '@'
            pencil.degradePoint('@')
        }
        editTextIndex++
    }

    paper.text = paperText.join('')
}

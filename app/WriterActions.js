
function Writer() {
    this.pencil = {}
    this.paper = {}
}

Writer.prototype.write = function write(text){
    Write(this.paper, this.pencil, text)
    return this
}

Writer.prototype.erase = function erase(text){
    Erase(this.paper, this.pencil, text)
    return this
}

Writer.prototype.insertEdit = function insertEdit(text) {
    InsertEdit(this.paper, this.pencil, text)
    return this
}

function Write(paper, pencil, newText){
    if (pencil.isDead()){ return paper }
    var written = []

    for ( var i = 0; i < newText.length; i++ ){
        if (!pencil.sharpness) { break }
        var char = newText[i]
        pencil.degradePoint(char)
        written.push(char)
    }

    paper.text += written.join('')
    return paper
}

function Erase(paper, pencil, textToErase){
    if (pencil.eraserDead()) { return paper }
    var eraseLength = textToErase.length,
        paperText = paper.text.split(''),
        eraseIndex = paper.text.lastIndexOf(textToErase)
    if (eraseIndex < 0) {return paper}

    for (var i = eraseIndex-1 + textToErase.length; i >= eraseIndex; i--){
        if (paperText[i] === ' ') { continue }
        if (pencil.eraserStrength){
            pencil.eraserStrength--
            paperText[i] = ' '
        }
        if (pencil.eraserDead()) { break }
    }

    paper.text = paperText.join('')
    return paper
}

function InsertEdit(paper, pencil, newEditText){
    if (pencil.isDead()) { return paper }
    /*****
     * Only insert to triple whitespace to leave the option of
     *   double whitespace as a sentence break.
     */
    var insertPoint = paper.text.indexOf('   ')
    if (insertPoint < 0) { return paper }
    var paperText = paper.text.split('')
    var editTextIndex = 0

    for (var i = insertPoint; editTextIndex < newEditText.length; i++ ){
        if (i >= paperText.length || pencil.isDead() ) { break }
        var char = newEditText[editTextIndex]
        if (paperText[i] === ' '){
            paperText[i] = char
            pencil.degradePoint(char)
        } else {
            paperText[i] = '@'
            pencil.degradePoint('@')
        }
        editTextIndex++
    }

    paper.text = paperText.join('')
    return paper
}

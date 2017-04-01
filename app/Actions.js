
function Write(paper, pencil, newText){
    if(pencil.dead){ return paper }
    var written = []

    for ( var i = 0; i < newText.length; i++ ){
        if (!pencil.currentPointDurability) { break }
        var char = newText[i]
        pencil.degradePoint(char)
        written.push(char)
    }

    paper.text += written.join('')
    return paper
}

function Erase(paper, pencil, textToErase){
    if(!pencil.currentEraserDurability) { return paper }
        var eraseLength = textToErase.length
        var paperText = paper.text.split('') // make a mutable copy
        indexOfTextToErase = paper.text.lastIndexOf(textToErase)
        if (indexOfTextToErase < 0) {return paper}

        for (var i = indexOfTextToErase -1 + eraseLength; i >= indexOfTextToErase; i--){
            var code = paperText[i].charCodeAt(0)
            if ((code <= 122 && code >= 33) && pencil.currentEraserDurability ){
                    pencil.currentEraserDurability--
                    paperText[i] = ' '
            }
        }

    paper.text = paperText.join('')
    return paper
}

function InsertEdit(paper, pencil, newEditText){
    if (pencil.dead) {return paper}
    // Only check for triple whitespace to leave the option of
    // double whitespace as a sentence break.
    var insertPoint = paper.text.indexOf('   ')
    if (insertPoint < 0) { return paper }  // no sufficient whitespace found
    var paperText = paper.text.split('')
    var editTextIndex = 0

    for ( var i = insertPoint; editTextIndex < newEditText.length; i++ ){
        if (i > paperText.length - 1) { break; }
        if (pencil.currentPointDurability < 1) { break }
        var char = newEditText[editTextIndex]
        if (paperText[i] === ' '){
            paperText[i] = char
            pencil.degradePoint(char)
        } else {
            // console.log('paper text', paperText.join(''));
            paperText[i] = '@'
            pencil.degradePoint('@')
        }
        editTextIndex++
    }

    paper.text = paperText.join('')
    return paper
}

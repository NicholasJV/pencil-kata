
function Write(paper, pencil, newText){
    if(pencil.dead){ return }
    var written = []

    for ( var i = 0; i < newText.length; i++ ){
        if (!pencil.currentPointDurability) { break }
        var char = newText[i]
        pencil.degradePoint(char)
        written.push(char)
        console.log(written.join(''))
        console.log(pencil.currentPointDurability)
    }

    paper.text += written.join('')
}

function Erase(paper, pencil, textToErase){
    var pageEndIndex = paper.text.length - 1
    var eraseLength = textToErase.length
    var paperCopy = paper

    // find last occurence:
    indexOfTextToErase = paper.text.lastIndexOf(textToErase)
    if (indexOfTextToErase < 0) {return paper}

    var paperText = paper.text.split('') // make a mutable copy

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
    // Only check for triple whitespace to leave the option of
    // double whitespace as a sentence break.
    var tripleWhite = paper.text.indexOf('   ')
    if (tripleWhite < 0) { return paper }  // no sufficient whitespace found
    var insertPoint = tripleWhite + 1
    var written = []   // to keep track of text for point degradation
    var paperText = paper.text.split('')
    var editTextIndex = 0

    for ( var i = insertPoint; editTextIndex < newEditText.length; i++ ){
        if (pencil.currentPointDurability < 1) { break }
        var char = newEditText[editTextIndex]
        if (paperText[i] === ' '){
            paperText[i] = char
            pencil.degradePoint(char)
            // written.push(char)
        } else {
            paperText[i] = '@'
            pencil.degradePoint('@')
            // written.push('@')
        }
        editTextIndex++
    }

    paper.text = paperText.join('')
    return paper
}

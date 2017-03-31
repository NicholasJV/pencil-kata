
function Write(paper, pencil, newText){
    paper.text += newText
    pencil.degradePoint(newText)
}

function Erase(paper, pencil, textToErase){
    var pageEndIndex = paper.text.length - 1
    var eraseLength = textToErase.length
    var paperCopy = paper

    // find last occurence:
    indexOfTextToErase = paper.text.lastIndexOf(textToErase)
    if (indexOfTextToErase < 0) {return paper}

    var textArray = paper.text.split('') // make a mutable copy

    for (var i = indexOfTextToErase -1 + eraseLength; i >= indexOfTextToErase; i--){
        var code = textArray[i].charCodeAt(0)
        if ((code <= 122 && code >= 33) && pencil.currentEraserDurability ){
                pencil.currentEraserDurability--
                textArray[i] = ' '
        }
    }

    paper.text = textArray.join('')
    return paper
}

function InsertEdit(paper, pencil, newEditText){

    // We check for triple whitespace to leave the option of
    // double whitespace as a sentence break.

    var insertPoint = paper.text.indexOf('   ')
    if (insertPoint < 0) {
        return paper
    }

    // logic below is basically correct, just have to figure out
    // incrementing both original text string and editText together

    /*

    // find first triple whitespace
    // if none, return paper unchanged

    // start loop over at indexOf(tripleWhite + 1)

    for ( var i = tripleWhite, j = 0; ; i++ ){
        if (text[i] === ' '){
               write character from newEditText[j]
            } else {
               write '@'
            }
        j++
    }

    */

}

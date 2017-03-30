
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
    // console.log('starting text : ', paper.text);

    // console.log('textToErase', textToErase);
    for (var i = indexOfTextToErase -1 + eraseLength; i >= indexOfTextToErase; i--){
        // console.log('text, [i]', textArray[i]);
        var code = textArray[i].charCodeAt(0)
        if ((code <= 122 && code >= 33) && pencil.currentEraserDurability ){
                pencil.currentEraserDurability--
                textArray[i] = ' '
        }
    }

    paper.text = textArray.join('')
    // console.log('ending text: ', paper.text);
    return paper
}

function InsertEdit(){

}


function Write(paper, pencil, newText){
    paper.text += newText
    pencil.degrade(newText)
}

function Erase(paper, pencil, textToErase){
    var pageEndIndex = paper.text.length - 1
    var eraseLength = textToErase.length
    var paperCopy = paper

    // find last occurence:
    indexOfTextToErase = paper.text.lastIndexOf(textToErase)
    if (indexOfTextToErase < 0) {return paper}

    var textArray = paper.text.split('') // make a mutable copy
    for (var i = indexOfTextToErase; i < indexOfTextToErase + eraseLength; i++){
        textArray[i] = ' '
    }

    paperCopy.text = textArray.join('')
    return paperCopy
}

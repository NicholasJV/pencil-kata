
function Pencil (pointDurability, eraserDurability, length) {
    // initial properties:
    this.pointDurabilityRating = pointDurability
    this.eraserDurabilityRating = eraserDurability
    this.length = length
    // mutable properties:
    this.currentPointDurability = pointDurability
    this.currentEraserDurability = eraserDurability
}

function Paper (title, initial_text){
    this.title = title
    this.text = initial_text
    this.timestamp = Date.now()
}

Pencil.prototype.sharpen = function() {
    this.currentPointDurability = this.pointDurabilityRating
    // TODO: explore edge cases
    return this
}

/*** ASCII reminder:   --------------*|
 *   33-64 puncuation and numbers
 *   65-90 uppercase letters
 *   91-122 lower lowercase letters
 *-----------------------------------*/
Pencil.prototype.degradePoint = function(text) {
    var points = 0
    for (var i = 0; i < text.length; i++) {
        var code = text.charCodeAt(i)
        // assumes punctuation are normal "characters" and degrade by 1
        if (code <= 122 && code >= 33){
            points++
            if (code <= 90 && code >= 65){
                // uppercase degradePoints by 2
                points++
            }
        }
    }
    // ensure no negative degradation
    if (points > this.currentPointDurability) {
      this.currentPointDurability = 0
    } else {
      this.currentPointDurability -= points
    }
    return this
}

Pencil.prototype.degradeEraser = function(text) {
    var points = 0
    for (var i = 0; i < text.length; i++) {
        var code = text.charCodeAt(i)
        if (code <= 122 && code >= 33){
            // this assumes punctuation degradePoints by 1
            points++
        }
    }

    // less important for eraser, but ensure no negative degradation
    if (points > this.currentEraserDurability) {
      this.currentEraserDurability = 0
    } else {
      this.currentEraserDurability -= points
    }
    return this
}


function Pencil (pointDurability, eraserDurability, length) {
    // initial properties:
    this.pointDurabilityRating = pointDurability
    this.eraserDurabilityRating = eraserDurability
    this.length = length
    // mutable properties:
    this.currentPointDurability = pointDurability
    this.currentEraserDurability = eraserDurability
}

Pencil.prototype.sharpen = function() {
    this.currentPointDurability = this.pointDurabilityRating
    // TODO: explore edge cases
    return this
}

Pencil.prototype.degradePoint = function(text) {
    var points = 0
    for (var i = 0; i < text.length; i++) {
        var code = text.charCodeAt(i)
        /*** ASCII reminder:
         *   33-64 puncuation and numbers
         *   65-90 uppercase letters
         *   91-122 lower lowercase letters
         *-------------------------------------*/
        if (code <= 122 && code >= 33){
            // this assumes punctuation degradePoints by 1
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
    // TODO: add logic here
}

function Paper (title, initial_text){
    this.title = title
    this.text = initial_text
    this.timestamp = Date.now()
}

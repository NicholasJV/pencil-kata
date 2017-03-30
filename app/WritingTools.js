
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
    this.pointDurability = this.pointDurabilityRating
    // TODO: explore edge cases
    return this
}

Pencil.prototype.degrade = function(text) {
    var points = 0
    for (var i = 0; i < text.length; i++) {
        var code = text.charCodeAt(i)
        /*** ASCII reminder:
         *   33-64 puncuation and numbers
         *   65-90 uppercase letters
         *   91-122 lower lowercase letters
         *-------------------------------------*/
        if (code <= 122 && code >= 33){
            // this assumes punctuation degrades by 1
            points++
            if (code <= 90 && code >= 65){
                // uppercase degrades by 2
                points++
            }
        }
    }
    this.currentPointDurability -= points
    return this
}

function Paper (title, initial_text){
    this.title = title
    this.text = initial_text
    this.timestamp = Date.now()
}

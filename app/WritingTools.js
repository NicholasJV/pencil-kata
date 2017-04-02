
function Paper (initial_text){
    this.text = initial_text
    this.timestamp = Date.now()
}

function Pencil (pointDurability, eraserDurability, length) {
    // initial properties:
    this.pointDurabilityRating = pointDurability
    this.eraserDurabilityRating = eraserDurability
    this.length = length
    this.dead = false
    // mutable properties:
    this.currentPointDurability = pointDurability // rename to "sharpness"
    this.currentEraserDurability = eraserDurability
}

Pencil.prototype.sharpen = function() {
    if (this.length === 0) { this.dead = true; return this}
    this.currentPointDurability = this.pointDurabilityRating
    this.length--
    return this
}

Pencil.prototype.degradePoint = function(char) {
    if ((char == ' ') || (char == '\t') || (char == '\n')){ return this }

    if (char !== char.toLowerCase()) {
      this.currentPointDurability -= 2
    } else {
      this.currentPointDurability--
    }

    return this
}

/*** ASCII reminder:   --------------*|
 *   33-64 puncuation and numbers
 *   65-90 uppercase letters
 *   91-122 lower lowercase letters
 *-----------------------------------*/

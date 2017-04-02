
function Paper (initial_text){
    this.text = initial_text || ''
    this.timestamp = Date.now()
}

function Pencil (point_durability, eraser_durability, length) {
    this.pointDurabilityRating = point_durability
    this.eraserDurabilityRating = eraser_durability
    this.length = length
    this.dead = false
    this.sharpness = point_durability
    this.eraserStrength = eraser_durability
}

Pencil.prototype.eraserDead = function() {
    !this.eraserStrength
}

Pencil.prototype.sharpen = function() {
    if (this.length === 0) { return this }
    this.sharpness = this.pointDurabilityRating
    this.length--
    return this
}

Pencil.prototype.isDead = function() {
  !this.length
}

Pencil.prototype.degradePoint = function(char) {
    if ((char == ' ') || (char == '\t') || (char == '\n')){ return this }

    if (char !== char.toLowerCase()) {
      this.sharpness -= 2
    } else {
      this.sharpness--
    }

    return this
}

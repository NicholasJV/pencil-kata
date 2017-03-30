
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

function Paper (title, initial_text){
    this.title = title
    this.text = initial_text
    this.timestamp = Date.now()
}

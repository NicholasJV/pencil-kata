
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
    console.log('point durability restored via sharpening');
    return this
}

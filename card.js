function Card(value) {
    this.value = value;
}

Card.prototype.getValue = function() {
    return this.value;
}

module.exports = Card;
function _getNextSibling() {
    var parent = this.parentNode,
        siblings = parent.childNodes;

    for (var i = 0, len = siblings.length; i < len; i++) {
        var node = siblings[i];
        if (node === this) {
            return siblings[i+1] || null;
        }
    }
}

domShim.getters.Node.nextSibling = {
    get: _getNextSibling
};
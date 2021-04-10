
function HtmlElement()  {
  this.click = function() {
    console.log('clicked');
  }
}

HtmlElement.prototype.focus = function() {
  console.log('focused');
}

function HtmlSelectElement(items = []) {
  this.item = items;
}

this.addItem = function(item) {
  this.item.push(item);
}

this.removeItem = function(item) {
  this.items.splice(this.items.indexOf(item),1)
}

HtmlSelectElement.prototype = new HtmlElement();
// HtmlSelectElement.prototype = Object,create(HtmlElement.prototype); //baseHtmlElement


Object.assign(HtmlSelectElement.prototype,  addItem, removeItem);
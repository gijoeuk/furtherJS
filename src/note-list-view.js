'use strict';

(function(exports){
  function ListView(list = new List){
    this.list = list
  }

  ListView.prototype.getHTML = function(){
    var toReturn = '<ul>'
    for( var i = 0 ; i < this.list.notes.length; i++ ) {
      toReturn = toReturn + "<li><div>" + this.list.notes[i]._text + "</div></li>";
    }
    toReturn = toReturn + '</ul>' 
    return toReturn;
  }

  exports.ListView = ListView
})(this);

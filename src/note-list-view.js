'use strict';

(function(exports){
  function ListView(list = new List){
    this.list = list
  }

  ListView.prototype.getHTML = function(){
    var topandtail = '<ul>'
    for( var i = 0 ; i < this.list.notes.length; i++ ) {
      topandtail = topandtail + "<li><div>" + this.list.notes[i]._text.slice(0,20) + "</div></li>";
    }
    topandtail = topandtail + '</ul>'
    return topandtail;
  }

  exports.ListView = ListView
})(this);

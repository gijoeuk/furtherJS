'use strict';

(function(exports){
  function List(){
    this.notes = [];
  };

  List.prototype.display = function() {
    return this.notes
  }

  List.prototype.store = function(text, Noteconstructor = Note) {
    // either text is passed in and
    var note = new Noteconstructor(text);
    // what?
    this.notes.push(note);
  }

  exports.List = List;
})(this);

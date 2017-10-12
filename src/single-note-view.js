'use strict';

(function(exports){
  function SingleNoteView(note = new Note){
    this.note = note
  }
  SingleNoteView.prototype.show = function(){
    return "<div>" + this.note._text + "</div>";
  }
  exports.SingleNoteView = SingleNoteView;
})(this);

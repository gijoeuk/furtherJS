(function(exports) {
  function NoteController(list = new List()){
  this.list = list
  this.list.store('Favourite drink: Seltzer');
  this.listView = new ListView(this.list)
}

  NoteController.prototype.changeGreeting = function() {

    document.getElementById('app').innerHTML = this.listView.getHTML()
  }
exports.NoteController = NoteController;
})(this);
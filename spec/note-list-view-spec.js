function testNoteList(){
  var list = new List();
  list.store('Sunali is about to smash her computer to pieces');
  listView = new ListView(list);
  text = '<ul><li><div>Sunali is about to s</div></li></ul>';
  assert.isTrue(listView.getHTML() === text);
}
testNoteList();

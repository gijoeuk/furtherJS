function testNoteList(){
  var list = new List();
  list.store('Marcus and Joe back in Citizen M');
  listView = new ListView(list);
  text = '<ul><li><div>Marcus and Joe back in Citizen M</div></li></ul>';
  assert.isTrue(listView.getHTML() === text);
}
testNoteList();

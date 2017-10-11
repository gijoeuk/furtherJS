function testNoteListRendered(){
  var list1 = new List();
  list1.store('Marcus and Joe back in Citizen M');

  listView = new ListView(list1);
  text = '<ul><li><div>Marcus and Joe back in Citizen M</div></li></ul>';
  assert.isTrue(listView.getHTML() === text);
}
testNoteListRendered();

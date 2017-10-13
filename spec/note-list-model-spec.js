function testListStoresNotes() {
  var list = new List();
  var dummyObject = 'test';
  list.store(dummyObject);
  var notesArray = list.display();
  var note1 = notesArray[0];
  assert.isTrue(note1.getText() === 'test');
}
testListStoresNotes();

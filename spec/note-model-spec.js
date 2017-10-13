function testNoteIsCreated() {
  var note = new Note('hi');
  assert.isTrue(note.getText() === 'hi');
};

testNoteIsCreated();

function testNoteIsCreated() {
  var note = new Note('hi');
  assert.isTrue(note.text === 'hi');
};

testNoteIsCreated();

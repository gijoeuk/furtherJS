function testNoteIsCreated() {
  var note = new Note('hi');
  assert.isTrue(note._text === 'hi');
};

testNoteIsCreated();

function testNoteIsCreated() {
  var note = new Note('hh');
  assert.isTrue(note.text === 'hi');
};

 testNoteIsCreated();

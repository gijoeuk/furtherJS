function testSingleNoteView() {
  var note = new Note('Sunali is a potty-mouth');
  singlenoteview = new SingleNoteView(note)
  text = '<div>Sunali is a potty-mouth</div>';
  assert.isTrue(singlenoteview.show(note) === text)
}
testSingleNoteView();

var assert = {
  isTrue: function(eventToCheck){
    if (!eventToCheck) {
      throw new Error("No: " + eventToCheck + " is WRONG!");
    }
    console.log('You nailed it you sexy mo-fo. BOOOOOOOOOMMMMMMMMM!!!!')
  }
};

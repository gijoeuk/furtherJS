var assert = {
  isTrue: function(eventToCheck){
    if (!eventToCheck) {
      throw new Error("No: " + eventToCheck + " is WRONG!");
    }
  }
};

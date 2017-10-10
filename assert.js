var assert = {
  isTrue: function(eventToCheck){
    if (!eventToCheck) {
      throw new Error("No, just no: " + eventToCheck + " is WRONG!");
    }
  }
};

function CustomString() {
  //customString().call(this);
}

CustomString.prototype = Object.create(string.prototype);
CustomString.constructor = CustomString;


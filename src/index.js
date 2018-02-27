class SmartCalculator {
  constructor(initialValue) {
    this.value = initialValue;
    this.prevOp = null;
    this.intermed = null;
    
  }

  add(number) {
    console.log(this.value,"value", number,"number", "ADDITION");
    this.intermed = number;
    this.prevOp = "add";
    this.value = this.value + number;
    console.log(this, "added");
    var res = this.value.valueOf();
    return this;
    //value.valueof(this);
  }
  subtract(number) {
    console.log(this.value,"value", number,"number", "SYBTRACTION");
    this.intermed = number;
    this.prevOp = "subtract";
    this.value = this.value - number;
    console.log(this, "subtracted");
    return this;
  }

  multiply(number) {
    console.log(this.value,"value", number,"number", "MYLTIPLICaTION");
    if(this.prevOp == null) {
      this.value = this.value * number;
    }
    else if (this.prevOp == "add") {
      console.log(this.intermed, "intermed", this.value, "value", number, "number")
      this.value = (this.value-this.intermed) + (this.intermed*number);
      this.prevOp = "myltiply";
    }
    else if (this.prevOp == "subtract") {
      console.log(this.intermed, "intermed", this.value, "value", number, "number")
      this.value = (this.value+this.intermed) - (this.intermed*number);
      this.prevOp = "myltiply";
    }
    
    //this.value = this.value * number;
    console.log(this, "multiplied");
    return this;
  }

  devide(number) {
    console.log(this.value,"value", number,"number", "DIVISION");
    if(this.prevOp == null) {
      this.value = this.value / number;
    }
    else if (this.prevOp == "add") {
      console.log(this.intermed, "intermed", this.value, "value", number, "number")
      this.value = (this.value-this.intermed) + (this.intermed/number);
      this.prevOp = "divide";
    
    }
    else if (this.prevOp == "subtract") {
      console.log(this.intermed, "intermed", this.value, "value", number, "number")
      this.value = (this.value+
        this.intermed) + (this.intermed/number);
      this.prevOp = "divide";
    
    }
    console.log(this, "divided");
    return this;
  }

  pow(number) {
    console.log(this.value,"value", number,"number", "POWER");
    if (this.prevOp == null) {
    this.value = Math.pow(this.value, number)
    };
    console.log(this, "powered");
    return this;
  }
  valueOf() {
    return this.value
  }
  
};

module.exports = SmartCalculator;

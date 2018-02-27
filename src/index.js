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
      this.intermed = number;
      this.value = this.value * number;
      
    
    }
    else if (this.prevOp == "add") {
      console.log(this.intermed, "intermed", this.value, "value", number, "number")
      this.value = (this.value-this.intermed) + (this.intermed*number);
      //this.prevOp = "myltiply";
    }
    else if (this.prevOp == "subtract") {
      console.log(this.intermed, "intermed", this.value, "value", number, "number")
      this.value = (this.value+this.intermed) - (this.intermed*number);
      //this.prevOp = "myltiply";
    }
    this.intermed = number;
    this.prevOp = "myltiply";//this.value = this.value * number;
    console.log(this, "multiplied");
    return this;
  }

  devide(number) {
    console.log(this.value,"value", number,"number", "DIVISION");
    if(this.prevOp == null) {
      this.intermed = number;
      this.value = this.value / number;
    }
    else if (this.prevOp == "add") {
      console.log(this.intermed, "intermed", this.value, "value", number, "number")
      this.value = (this.value-this.intermed) + (this.intermed/number);
    
    }
    else if (this.prevOp == "subtract") {
      console.log(this.intermed, "intermed", this.value, "value", number, "number")
      this.value = (this.value+
        this.intermed) + (this.intermed/number);
    
    }
    this.intermed = number;
    this.prevOp = "divide"
    console.log(this, "divided");
    return this;
  }

  pow(number) {
    console.log(this.value,"value", number,"number", "POWER");
    if (this.prevOp == null) {
    this.value = Math.pow(this.value, number)
   
    }
    else if (this.prevOp == "add") {
      console.log(this.intermed, "intermed", this.value, "value", number, "number","111")
      this.value = (this.value-this.intermed) + Math.pow(this.intermed, number);
     
    }
    else if (this.prevOp == "subtract") {
      console.log(this.intermed, "intermed", this.value, "value", number, "number","222")
      this.value = (this.value+this.intermed) - Math.pow(this.intermed, number);
     
    }
    
    else if (this.prevOp == "myltiply") {
      console.log(this.intermed, "intermed", this.value, "value", number, "number","333")
      this.value = (this.value/this.intermed) * Math.pow(this.intermed, number);
      
    }
    else if (this.prevOp == "divide") {
      console.log(this.intermed, "intermed", this.value, "value", number, "number","444")
      this.value = (this.value*this.intermed) / Math.pow(this.intermed, number);
      
    }
    
    this.prevOp = 'power';
    console.log(this, "powered");
    return this;
  }
  valueOf() {
    console.log(this.value)
    return this.value
  }
  
};

module.exports = SmartCalculator;

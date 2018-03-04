class SmartCalculator {
  constructor(initialValue) {
    this.value = initialValue;
    this.prevOp = null;
    this.intermed = null;
    this.midnum = null;
    this.mid = null;
    this.calcul = [initialValue];
    
  }

  add(number) {
    this.calcul.push("+", number);
    this.midnum = number;
    this.prevOp = "add";
    return this;
  
  }
  subtract(number) {
    this.calcul.push("-", number);
    this.prevOp = "subtract";
    this.midnum = number;
    return this;
  }

  multiply(number) { 
    this.calcul.push("*", number);
    this.prevOp = "multiply";
    this.midnum = number;
    return this;
  }

  devide(number) {
    this.calcul.push("/", number);
    this.prevOp = "divide";
    this.midnum = number;
    return this;
  }

  pow(number) {
    if(this.prevOp == null && this.midnum == null) {
      this.calcul = [];
      this.calcul.push("Math.pow("+this.value+","+number+')' );
      this.prevOp = "pow"; 
      console.log(this.calcul, "FIRST POW")
     }
     
    if(this.prevOp !== "pow"&& this.midnum !== null) {
     this.mid = number;
     this.calcul = this.calcul.slice(0,this.calcul.length-1);
     this.calcul.push("Math.pow("+this.midnum+","+number+')' );
     this.prevOp = "pow";
     console.log(this.calcul, "SECOND POW")
     return this;

      
    }
    if(this.prevOp == "pow"&& this.midnum !== null) {
      this.calcul = this.calcul.slice(0,this.calcul.length-1);
      this.intermed = ("Math.pow("+this.mid+","+number+')');
      this.calcul.push("Math.pow("+this.midnum+","+this.intermed+')' );
      this.mid = number;
      console.log(this.calcul, "THIRD POW")


    }
  
    return this;
  }
  valueOf() {
    this.calcul = this.calcul.join("")
    console.log(this.calcul)
    console.log(eval(this.calcul), "attempt")
   // console.log(this.value)
   if (!(eval(this.calcul))) {return 0}
    return eval(this.calcul)
  }
  
};

module.exports = SmartCalculator;

import React from "react";
import "./Calculator.css";

class Calculator extends React.Component {
  state = {
    currentOp: "",
    currentNumber: 0,
    currentTask: "",
    result: 0,
  };

  Numbers = (number) => {
    this.decimalFlag = false;
    if (this.equalClick) {
      this.Display = "";
      this.Operation = "";
      this.TotArray = [];
      this.equalClick = false;
    }
    number = number.toString();
    this.currentValue += number;
    this.Operation = this.currentValue;
    this.Display += number;
    this.setState({ currentNumber: this.currentValue });
    this.firstClick = false;
  };

  Operators = (op) => {
    if (!this.firstClick) {
      this.firstClick = false;
      this.decimalFlag = false;
      if (this.equalClick) {
        this.Display = this.state.result.toString();
        this.Operation = "";
        this.TotArray = [this.state.result.toString()];
        this.equalClick = false;
      }
      if (this.currentValue !== "") {
        this.TotArray.push(this.currentValue);
      }
      if (
        (op === "*" || op === "/") &&
        (this.TotArray[this.TotArray.length - 1] === "*" ||
          this.TotArray[this.TotArray.length - 1] === "/")
      ) {
        this.TotArray.pop();
        this.Display = this.Display.slice(0, this.Display.length - 1);
        this.Operation = op;
        this.setState({ currentOp: op });
      }
      this.minusFlag = false;
      this.TotArray.push(op);
      this.Display += op;
      this.currentValue = "";
      this.Operation = op;
      if (
        op === "-" &&
        !this.minusFlag &&
        isNaN(Number(this.TotArray[this.TotArray.length - 2]))
      ) {
        this.currentValue = op;
        this.Operation = op;
        this.minusFlag = true;
        this.TotArray.pop();
        this.setState({ currentOp: op });
      }
      if (
        op === "+" &&
        (this.TotArray[this.TotArray.length - 2] === "+" ||
          this.TotArray[this.TotArray.length - 2] === "-" ||
          this.TotArray[this.TotArray.length - 2] === "*" ||
          this.TotArray[this.TotArray.length - 2] === "/")
      ) {
        this.TotArray.pop();
        this.Display = this.Display.slice(0, this.Display.length - 1);
        this.setState({ currentOp: this.TotArray[this.TotArray.length - 2] });
      }
      if (
        op === "-" &&
        (this.TotArray[this.TotArray.length - 2] === "+" ||
          this.TotArray[this.TotArray.length - 2] === "-" ||
          this.TotArray[this.TotArray.length - 2] === "*" ||
          this.TotArray[this.TotArray.length - 2] === "/")
      ) {
        this.TotArray.pop();
        this.Display = this.Display.slice(0, this.Display.length - 1);
        this.setState({ currentOp: this.TotArray[this.TotArray.length - 2] });
      }
      if (
        (op === "*" || op === "/") &&
        (this.TotArray[this.TotArray.length - 2] === "+" ||
          this.TotArray[this.TotArray.length - 2] === "-")
      ) {
        this.TotArray.pop();
        this.Display = this.Display.slice(0, this.Display.length - 1);
        this.Operation = this.TotArray[this.TotArray.length - 1];
      }
      this.setState({ currentOp: op });
    }
  };
  DelEverything = () => {
    this.firstClick = true;
    this.Display = "";
    this.Operation = "";
    this.minusFlag = false;
    this.TotArray = [];
    this.currentValue = "";
    this.defaultValue = 0;
    this.setState({
      currentOp: "",
      currentNumber: 0,
      currentTask: "",
      result: 0,
    });
  };
  Decimals = () => {
    if (this.firstClick) {
      this.Display += "0.";
      this.Operation += "0.";
      this.currentValue += "0.";
      this.setState({ currentNumber: this.currentValue });
    }
    if (
      isNaN(Number(this.TotArray[this.TotArray.length - 1])) &&
      !this.firstClick &&
      !this.decimalFlag
    ) {
      this.decimalFlag = true;
      this.currentValue += ".";
      this.Operation += ".";
      this.Display += ".";
      this.setState({ currentNumber: this.currentValue });
    }
  };
  Equals = () => {
    if (this.currentValue !== "" && !isNaN(Number(this.currentValue))) {
      this.TotArray.push(this.currentValue);
      this.currentValue = "";
      this.Result = eval(this.TotArray.join(" "));
      this.Display += "=" + this.Result;
      this.Operation = this.Result;
      this.equalClick = true;
      this.setState({ result: this.Result });
    }
  };
  decimalFlag = false;
  Result = 0;
  equalClick = false;
  Display = "";
  minusFlag = false;
  Operation = "";
  TotArray = [];
  currentValue = "";
  firstClick = true;

  render() {
    let calcDisplay = 0;
    if (!this.firstClick) {
      calcDisplay = this.Operation;
    }
    return (
      <div id="calc-container">
        <div className="display">
          <div className="bdisplay">{this.Display}</div>
          <div className="disp">{calcDisplay}</div>
        </div>
        <div
          className="ac box"
          onClick={() => {
            this.DelEverything();
          }}
        >
          AC
        </div>
        <div
          className="divi box op"
          onClick={() => {
            this.Operators("/");
          }}
        >
          /
        </div>
        <div
          className="mul box op"
          onClick={() => {
            this.Operators("*");
          }}
        >
          *
        </div>
        <div
          className="7 box"
          onClick={() => {
            this.Numbers(7);
          }}
        >
          7
        </div>
        <div
          className="8 box"
          onClick={() => {
            this.Numbers(8);
          }}
        >
          8
        </div>
        <div
          className="9 box"
          onClick={() => {
            this.Numbers(9);
          }}
        >
          9
        </div>
        <div
          className="sub box op"
          onClick={() => {
            this.Operators("-");
          }}
        >
          -
        </div>
        <div
          className="4 box"
          onClick={() => {
            this.Numbers(4);
          }}
        >
          4
        </div>
        <div
          className="5 box"
          onClick={() => {
            this.Numbers(5);
          }}
        >
          5
        </div>
        <div
          className="6 box"
          onClick={() => {
            this.Numbers(6);
          }}
        >
          6
        </div>
        <div
          className="add box op"
          onClick={() => {
            this.Operators("+");
          }}
        >
          +
        </div>
        <div
          className="1 box"
          onClick={() => {
            this.Numbers(1);
          }}
        >
          1
        </div>
        <div
          className="2 box"
          onClick={() => {
            this.Numbers(2);
          }}
        >
          2
        </div>
        <div
          className="3 box"
          onClick={() => {
            this.Numbers(3);
          }}
        >
          3
        </div>
        <div
          className="equals box"
          onClick={() => {
            this.Equals();
          }}
        >
          =
        </div>
        <div
          className="zero box"
          onClick={() => {
            this.Numbers(0);
          }}
        >
          0
        </div>
        <div
          className="decimal box"
          onClick={() => {
            this.Decimals();
          }}
        >
          .
        </div>
      </div>
    );
  }
}

export default Calculator;

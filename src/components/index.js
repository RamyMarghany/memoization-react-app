import React, { useState } from "react";

//create an empty memoization object.
const memo = {};

const sumFun = (x, y) => {
  //log out the memoization object to see the result each time.
  console.log("Memoization", memo);
  return new Promise((resolve, reject) => {
    //if it has a sumition result before, return it directly and save the time.
    if (memo[x + "+" + y]) {
      resolve(memo[x + "+" + y]);
    }
    setTimeout(() => {
      const res = x + y;
      //save each sumition result in a memo object
      memo[x + "+" + y] = res;
      resolve(res);
    }, 2500);
    //incerease the time to act like a bad performance of the render and then understand the usage of the mememoization
  });
};

const Addition = () => {
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [sum, setSum] = useState(0);

  const addNums = () => {
    sumFun(+firstNum, +secondNum).then(res => {
      setSum(res);
    });
  };
  return (
    <>
      <input
        type="number"
        value={firstNum}
        onChange={e => setFirstNum(e.target.value)}
        placeholder="enter first number"
        className="form-control mt-5"
      />
      <input
        type="number"
        value={secondNum}
        placeholder="enter second number"
        onChange={e => setSecondNum(e.target.value)}
        className="form-control mt-3"
      />
      <p className="mt-4">Result: {sum}</p>
      <button className="btn btn-primary mt-3" onClick={addNums}>
        Sum two numbers
      </button>
    </>
  );
};

export default Addition;

import React, { useState } from "react";
import "./style.css";

import Cross from "../Cross";
import Circle from "../Circle";

let initData = ["", "", "", "", "", "", "", "", ""];

const Board = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [data, setData] = useState(initData);

  const mark = (v) => {
    if (lock) {
      return 0;
    } else if (data[v] === "") {
      if (count % 2 === 0) {
        let temp = data;
        temp[v] = "o";
        setData(temp);
      } else {
        let temp = data;
        temp[v] = "x";
        setData(temp);
      }
      checkWinner();
      setCount((x) => x + 1);
    }
  };

  const getSymbol = (val) => {
    if (val === "x") {
      return <Cross />;
    } else if (val === "o") {
      return <Circle />;
    } else {
      return;
    }
  };

  const checkWinner = () => {
    if (data[0] !== "" && data[0] === data[1] && data[1] === data[2]) {
      return wonGame(data[0]);
    }
    if (data[3] !== "" && data[3] === data[4] && data[4] === data[5]) {
      return wonGame(data[3]);
    }
    if (data[6] !== "" && data[6] === data[7] && data[7] === data[8]) {
      return wonGame(data[6]);
    }
    if (data[0] !== "" && data[0] === data[3] && data[3] === data[6]) {
      return wonGame(data[0]);
    }
    if (data[1] !== "" && data[1] === data[4] && data[4] === data[7]) {
      return wonGame(data[1]);
    }
    if (data[2] !== "" && data[2] === data[5] && data[5] === data[8]) {
      return wonGame(data[2]);
    }
    if (data[0] !== "" && data[0] === data[4] && data[4] === data[8]) {
      return wonGame(data[0]);
    }
    if (data[2] !== "" && data[2] === data[4] && data[4] === data[6]) {
      return wonGame(data[2]);
    }
    if (!data.includes("")) {
      return wonGame("draw");
    }
  };

  const wonGame = (player) => {
    setLock(true);
    console.log(player);
  };

  return (
    <div className="board_container">
      <div className="board">
        <div className="row one">
          <div className="box" onClick={() => mark(0)}>
            {getSymbol(data[0])}
          </div>
          <div className="box" onClick={() => mark(1)}>
            {getSymbol(data[1])}
          </div>
          <div className="box" onClick={() => mark(2)}>
            {getSymbol(data[2])}
          </div>
        </div>
        <div className="row two">
          <div className="box" onClick={() => mark(3)}>
            {getSymbol(data[3])}
          </div>
          <div className="box" onClick={() => mark(4)}>
            {getSymbol(data[4])}
          </div>
          <div className="box" onClick={() => mark(5)}>
            {getSymbol(data[5])}
          </div>
        </div>
        <div className="row three">
          <div className="box" onClick={() => mark(6)}>
            {getSymbol(data[6])}
          </div>
          <div className="box" onClick={() => mark(7)}>
            {getSymbol(data[7])}
          </div>
          <div className="box" onClick={() => mark(8)}>
            {getSymbol(data[8])}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;

import { useEffect } from "react";
import { React, useState } from "react";
import "./Input.css";

const Input = ({ setData }) => {
  const [firstUser, setFirstUser] = useState("");
  const [secondUser, setSecondUser] = useState("");
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    setData(dataArray);
  }, [dataArray]);

  const inputDataHandler = () => {
    let obj = [firstUser, secondUser];
    if (firstUser !== obj.firstUser || secondUser !== obj.secondUser)
      setDataArray([...dataArray, obj]);
  };

  return (
    <>
      <div className="input-main-cont">
        <h2>Enter your user</h2>
        <div className="input-data-entry">
          <input
            type="text"
            placeholder="User1"
            onChange={(e) => setFirstUser(e.target.value)}
          />
          <input
            type="text"
            placeholder="User2"
            onChange={(e) => setSecondUser(e.target.value)}
          />
          <select>
            <option>Select</option>
            <option>Friend</option>
          </select>
        </div>
        <div className="input-button">
          <button onClick={inputDataHandler}>Make Bonding</button>
        </div>
      </div>
    </>
  );
};

export default Input;

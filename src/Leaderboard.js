import React, { useState, useEffect } from "react";
import { database } from "./firebase.config";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  count,
  query,
  orderBy,
  limit,
  where,
} from "firebase/firestore";

function Leaderboard() {
  const [val, setVal] = useState([]);

  const value = collection(database, "numbers");

  const [data, setData] = useState([]);

  const [myArray, setMyArray] = useState([3, 1, 5, 6, 9]);

  const sortAscending = () => {
    const sortedArray = [...myArray].sort((a, b) => a - b);
    setMyArray(sortedArray);
  };

  useEffect(() => {
    const getData = async () => {
      const dbVal = await getDocs(value);
      setVal(dbVal.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      const dataArray = dbVal.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      dataArray.sort((a, b) =>
        a.boxes > b.boxes ? 1 : b.boxes > a.boxes ? -1 : 0
      );
      setData(dataArray);
    };
    getData();
  });

  return (
    <div>
      <h1>Leaderboard</h1>

   

      {/* {val.map((values) => (
        <div>
          <p>{values.id + " " + values.boxes}</p>
        </div>
      ))} */}

      <div>
        {data.map((item) => (
          <div key={item.id}>
            <p>{ item.id + " " + item.boxes}</p>{" "}
            {/* Replace "name" with the actual field name in your Firestore document */}
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;

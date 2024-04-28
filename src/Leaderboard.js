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
    limit
  } from "firebase/firestore";





function Leaderboard() {

  const [val, setVal] = useState([]);

  const value = collection(database, "numbers");

  useEffect(() => {
    const getData = async () => {
      const dbVal = await getDocs(value);
      setVal(dbVal.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  });

  return (
    <div>
      <h1>Leaderboard</h1>
      {
                val.map(values=> 
                <div>
                    <h1>{values.id}</h1>


                </div>)
            }
    </div>
  );
}

export default Leaderboard;

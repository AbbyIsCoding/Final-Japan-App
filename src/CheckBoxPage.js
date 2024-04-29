import React, { useState, useEffect } from "react";
import { auth, database } from "./firebase.config";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  count,
} from "firebase/firestore";
import CheckBoxList from "./CheckBoxList";

import { getAuth, onAuthStateChanged } from "firebase/auth";
function CheckBoxPage() {
  const [totalChecks, setTotalChecks] = useState("");
  const [id, setId] = useState("");
  const value = collection(database, "users");
  const [val, setVal] = useState([]);

  const user = auth.currentUser;

  const [show, setShow] = useState(false);

  const checkBoxes = [
    " Asked for directions in Japanese",
    " Engaged in a full business transaction in Japanese",
    " Spoke aloud in a Japanese classroom",
    " Gave up your seat on a train or bus for an elderly, disabled or pregnant person",
    " Got lost and successfully used your name badge to get back",
    " Tried speaking in Japanese and had a very amusing fail",
    " Helped your host family cook a meal",
    " Went to an Izakaya",
    " Slept on a futon",
    " Used a squat toilet",
    " Pet a Shiba dog (ask first!)",
    " Pet an Akita dog (ask first!)",
    " Ride the subway or a public bus (just with your host-family)",
    " Watch a movie in Japanese",
    " Take a photo of a sign with very strange English",

    " Attended a festival or life event", 
    " Attended baseball game or other sporting event",  
    " Cosplay", 
    " Karaoke (attended)", 
    " Karaoke (actually sang)",
    " Kimono (wore)",
    " Idoru concert", 
    " Martial arts", 
    " Pokemon center",  
    " Photo booth", 
    " Sporting event (took part)", 
    " Osen/public bath", 
    " Tea ceremony", 
    " Video game arcade", 
    
    " Anpan (red bean paste bread)",
    " Anago (conger eel)", 
    " Basashi (horse sushi)", 
    " Coolish (Vietnamese-style drinkable ice cream)", 
    " Goya (bitter gourd)", 
    " Green Tea flavored Kitkat", 
    " Gyutan (cow tongue)",
    " Ika (squid)",
    " Ikasumi (squid ink)",
    " Ikura (salmon eggs)",
    " Inago (locust)",
    " Melonpan (melon-shaped bread)",
    " Namako (sea slug)",
    " Nankotsu (fried chicken cartilage)",
    " Natto (fermented soybeans)",
    " Onigiri (rice balls with filling)",
    " Pokari sweat (soft drink)",
    " Qoo (soft drink)",
    " Ramen noodle soup",
    " Soba noodles",
    " Shirako (fish testes)",
    " Sushi (any kind)",
    " Tako (raw octopus)",
    " Takoyaki (fried octopus)",
    " Unagi (eel)",
    " Uni (sea urchin)",

    " Aeon Mall",
    " Beard Papa",
    " Bicu Camera",
    " Book Off",
    " Daimar!",
    " Daiso",
    " DonQuijote",
    " Ichiran",
    " Lucky Pierrot",
    " Mr. Donut",
    " Uniqlo",



  ];

 



  const [checkedState, setCheckedState] = useState(
    new Array(checkBoxes.length).fill(false)
  );

  const handleCheckboxChange = (index) => {
    const updatedCheckedState = checkedState.map((item, idx) =>
      idx === index ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  useEffect(() => {
    const getData = async () => {
      const dbVal = await getDocs(value);
      setVal(dbVal.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  });

  const handleCreate = async () => {
    console.log(countCheckedCheckboxes());
    
    await addDoc(value, {
      user: user.email, 
      boxes: countCheckedCheckboxes(),
    });
  };

  const handleDelete = async (id) => {
    const deleteVal = doc(database, "numbers", id);
    await deleteDoc(deleteVal);
  };

  const handleUpdate = async () => {
    const updateData = doc(database, "users", id);

    await updateDoc(updateData, {
   
      boxes: countCheckedCheckboxes(),
    });
  };

  const countCheckedCheckboxes = () => {
    return [checkedState.filter(Boolean).length];
  };

  return (
    <div className="container">
      <h1>Your checkbox list</h1>

      <strong>You've completed {countCheckedCheckboxes()}</strong>
      <CheckBoxList
        checkboxes={checkBoxes}
        checkedState={checkedState}
        handleCheckboxChange={handleCheckboxChange}
      />

      <button onClick={handleCreate}>Update your total!</button>

      {/* <button onClick={handleUpdate}>Update</button> */}

      {val.map((values) => (
        <div>
          <h1>{values.number1}</h1>
          <h1>{values.number2}</h1>

          {/* <button onClick={() => handleDelete(values.id)}>Delete</button> */}
        </div>
      ))}
    </div>
  );
}

export default CheckBoxPage;

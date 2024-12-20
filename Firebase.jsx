import React from 'react'
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from '../../Firebase';
const db = getFirestore(app);


async function AddData() {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Nayan Bhai Topper Of Rnw",
      last: "Topper",
      born: 2000
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export default function Firebase() {
  return (
    <div>
      <h1>Firebase</h1>
      <button onClick={AddData}>Add Data</button>
    </div>
  )
}

"use client";
import React from "react";
import addData, { getDocument } from "@/firebase/firestore/data";

export default async function Home() {
  const handleForm = async () => {
    const data = {
      name: "John snow",
      house: "Stark",
    };
    const { result, error } = await addData("users", "user-id", data);

    if (error) {
      return console.log(error);
    }
  };

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">Sign in</h1>
        <form onSubmit={handleForm} className="form">
          <button type="submit">Add data</button>
        </form>
      </div>
    </div>
  );
}

import { useState } from "react";
import { redirect } from "react-router";

export function NewUser() {
  const [nev, setNev] = useState("");
  const [email, setEmail] = useState("");

  const createNew = async () => {
    const newUser = {
      email: email,
      nev: nev,
    };

    await fetch("http://localhost:3000/felhasznalok", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newUser),
    });
  };

  return (
    <>
      <form onSubmit={() => {createNew(), redirect("users")}}>
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="nev">Név:</label>
        <input
          type="text"
          id="nev"
          value={nev}
          onChange={(e) => setNev(e.target.value)}
        />

        <button type="submit">Új felvétele</button>
      </form>
    </>
  );
}

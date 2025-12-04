import { useState } from "react"
import { redirect } from "react-router"

export function UpdateUser() {
    const [nev, setNev] = useState("")
    const [email, setEmail] = useState("")

    return <>
        <form onSubmit={() => redirect("/users")}>
            <label htmlFor="email">
                E-mail:
            </label>
            <input type="text" id="email" value={nev} onChange={(e) => setEmail(e.target.value)}/>
            
            <label htmlFor="nev">
                Név:
            </label>
            <input type="text" id="nev" value={email} onChange={(e) => setNev(e.target.value)}/>
            
            <button type="submit">Módosítás</button>
        </form>
    </>
}
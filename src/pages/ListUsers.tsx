import { useEffect, useState } from "react"
import { NavLink, redirect } from "react-router"

export function ListUsers() {
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        const res = await fetch("http://localhost:3000/felhasznalok")
        const data = await res.json()
        setUsers(data)
    }

    const createBasicData = async () => {
        await fetch("http://localhost:3000/felhasznalok/basic-data")
        fetchUsers()
    }

    const handleDelete = async (id: number) => {
        await fetch(`http://localhost:3000/felhasznalok/${id}`, {
            method: "DELETE"
        })
        fetchUsers()
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return<>
        <button onClick={createBasicData}>Teszt adatok felvétele</button>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.id}. {user.email} - {user.nev}
                    <NavLink to={"/users/update"}>
                        ⚙️
                    </NavLink>
                    <span style={{cursor: "pointer"}} onClick={() => handleDelete(user.id)}>
                        ❌ 
                    </span>
                </li>
            ))}
        </ul>
    </>
}
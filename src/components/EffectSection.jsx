import { useEffect, useState } from "react"
import Button from "./buttons/Button.jsx"
import Modal from "./Modal/Modal.jsx"

export default function EffectSection(){
    const [modal , setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([]);

    async function fetchUsers(){
        setLoading(true)
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const users = await response.json()
        setUsers(users)
        setLoading(false)
    }

   useEffect(() => {
     fetchUsers()
   }, [])

  
    return(
        <section>
            <h3>Effects</h3>

            <Button onClick={() => setModal(true)}>Open Information</Button>

            <Modal open={modal}>
                <h3>Hello from Modal</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, blanditiis expedita dignissimos laborum quidem iure est sequi, quos, perspiciatis officia esse! Rerum, iusto earum maxime porro nihil unde vero quam.</p>
                <Button onClick={() => setModal(false)}>Close Modal</Button>
            </Modal>
            {loading && <p>loading...</p>}
            {!loading && <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
                </ul>}
        </section>
    )
}
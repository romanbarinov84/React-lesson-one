import { useState } from "react"
import Button from "./buttons/Button.jsx"
import Modal from "./Modal/Modal.jsx"

export default function EffectSection(){
    const [modal , setModal] = useState(false)

    function openModal(){
        setModal(true)
    }
    return(
        <section>
            <h3>Effects</h3>

            <Button onClick={openModal}>Open Information</Button>

            <Modal open={modal}>
                <h3>Hello from Modal</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, blanditiis expedita dignissimos laborum quidem iure est sequi, quos, perspiciatis officia esse! Rerum, iusto earum maxime porro nihil unde vero quam.</p>
                <Button onClick={() => setModal(false)}>Close Modal</Button>
            </Modal>
        </section>
    )
}
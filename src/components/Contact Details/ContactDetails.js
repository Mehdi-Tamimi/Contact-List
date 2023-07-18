import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"


export const ContactDetails = () => {
    const {id} = useParams()
    const [contact,setContact] = useState({})
    useEffect(() => {
        
        const getData = async () => {
            try {
                const rawData = await fetch(`http://localhost:3000/contacts/${id}`)
                const {name,number} = await rawData.json()
                setContact({name: name, number: number})
            }
            catch (e) {
                console.log(e)
            }

        }
        getData()
    },[id])
    return (
        <div>
            <div>Name: {contact.name}</div>
            <div>Number: {contact.number}</div>
        </div>
    )
}
import { useParams,useNavigate } from "react-router-dom"
import { useRef, useState ,useEffect } from "react"
import axios from "axios"
import { Input } from "../Elemnts/Input"
import { Title } from "../Elemnts/Title"
import { SaveButton } from "../Elemnts/SaveButton"
import '../../styles/Elements/Form.css'
export const EditContat = ({getData}) => {
    const {id} = useParams()
    const [contact,setContact] = useState({name:"",number:""})
    const navigate = useNavigate()
    console.log(getData)
    useEffect(() => {
        
        const GetData = async () => {
            try {
                const rawData = await fetch(`http://localhost:3000/contacts/${id}`)
                const {name,number} = await rawData.json()
                setContact({name:name,number:number})
            }
            catch (e) {
                console.log(e)
            }

        }
        GetData()
    },[])
    const nameRef = useRef(null)
    const numberRef = useRef(null)

    const handleClick = () => {
        
        let name = nameRef.current.value
        let number = numberRef.current.value
        if (!name || !number) {
            alert('fill the form')
        }else{
            setContact({name: name,number: number})
            
        }
        
    }
    const handleOnSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:3000/contacts/${id}`,contact)
        getData()
        navigate('/')
    }

    return (
        <div className="FormHolder">
            <Title text={'Edit Contact'}/>
            <form className="Form" onSubmit={handleOnSubmit}>
                <Input Ref={nameRef} Value={contact.name} PlaceHolder='Name'/>
                <Input Ref={numberRef} Value={contact.number} PlaceHolder={'Number'}/>
                <SaveButton handleClick={handleClick}/>
            </form>
        </div>
    )
}
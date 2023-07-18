import { useRef , useState} from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { Home } from "../../Home/Home"
import { Input } from "../../Elemnts/Input"
import { Title } from "../../Elemnts/Title"
import { SaveButton } from "../../Elemnts/SaveButton"
import '../../../styles/Elements/Form.css'

const dataAPI = 'http://localhost:3000/contacts'

export const ContactForm = ({getData}) => {
    const [contact,setContact] = useState({name: "",number: ""})
    const navigate = useNavigate()
    const nameRef = useRef()
    const numberRef = useRef()
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
        await axios.post(dataAPI,contact)
        getData()
        navigate('/')
        
    }
    return (
        <div className="FormHolder">
            <Title text={'New Contact'}/>
            <form className="Form" onSubmit={handleOnSubmit}> 
                <Input Ref={nameRef} Value={''} PlaceHolder={'Name'}/>
                <Input Ref={numberRef} Value={''} PlaceHolder={'Number'}/>
                <SaveButton handleClick={handleClick}/>
            </form>
        </div>
    )
}

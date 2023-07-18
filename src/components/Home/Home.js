import { ContactList } from "./Elements/ContacList"
import '../../styles/Home/Home.css'
import { useNavigate } from "react-router-dom"
import { Title } from "../Elemnts/Title"
export const Home = ({contacts,getData}) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/add-contact')
    }
    return (
        <div className="Home">
            <div className="Header">
                <Title text='Contact List'/>
                <button className="Button" onClick={handleClick}>New Contact</button>
            </div>
            <ContactList contacts={contacts} getData={getData}/>
        </div>
    )
}
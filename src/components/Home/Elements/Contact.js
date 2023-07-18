import { Link, useNavigate } from 'react-router-dom'
import '../../../styles/Home/Elements/Contact.css'
import axios from 'axios'
import { Button } from './Button'


export const Contact = ({id,name,number,getData}) => {
    const navigate = useNavigate()
    const handleEditClick = () => {
        navigate(`/edit/${id}`)
    }
    const handleDeleteClick = async () => {
        await axios.delete(`http://localhost:3000/contacts/${id}`)
        getData()
    }
    
    return (
        <div className="Contact">
            <div className='Details'>
                <Link className='Name' to={`/${id}`}>Name: {name}</Link>
                <div className='Number'>Number: {number}</div>
            </div>
            <div className='ButtonHolder'>
                <Button handleClick={handleEditClick} text={'Edit'}/>
                <Button handleClick={handleDeleteClick} text={'Delete'}/>
            </div>
        </div>
     )

}
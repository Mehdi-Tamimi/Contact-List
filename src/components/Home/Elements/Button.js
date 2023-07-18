
import '../../../styles/Home/Elements/Buuton.css'
export const Button = ({text,handleClick}) => {


    return (
        <button className='Buttons' onClick={handleClick}>{text}</button>
    )
}
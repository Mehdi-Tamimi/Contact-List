
import '../../styles/Elements/Input.css'
export const Input = ({Ref,Value,PlaceHolder}) => {

    return (
         <input className='Input' ref={Ref} defaultValue={Value} placeholder={`${PlaceHolder}`}/>
    )

}
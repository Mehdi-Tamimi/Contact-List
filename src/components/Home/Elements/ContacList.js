import { Contact } from "./Contact"






export const ContactList = ({contacts,getData}) => {
    
    
    return (
        <div>
            {
                contacts.map((contact) => {
                    return (
                        <Contact 
                            key={contact.id}
                            id={contact.id}
                            name={contact.name}
                            number={contact.number}
                            getData={getData}
                            />
                    )
                    
                })
            }
        </div>
    )
}

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home/Home';
import { AddContact } from './components/AddContact/AddContact';
import { ContactDetails } from './components/Contact Details/ContactDetails';
import { EditContat } from './components/Edit Contact/EditContact';
import { Background } from './components/Home/Elements/BackGround';
import './styles/App/App.css'
import { useEffect,useState } from 'react';

function App() {
  const [contacts,setContacts] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  const getData = async () => {
      const dataAPI = 'http://localhost:3000/contacts'
  
      try {
          setIsLoading(true)
          const rawData = await fetch(dataAPI)
          const data = await rawData.json()
          setContacts(data)
          setIsLoading(false)
      }
      catch (e) {
          console.log(e)
      }
  
  }
  useEffect(() => {
      getData()
  },[])
  if (isLoading) {
    return <div className='Loading'>Loading...</div>
  }
  return (
    <div className='App'>
        <BrowserRouter>
            <Home contacts={contacts} getData={getData}/>
            
            <div className='Content'>
              <Routes>
                  <Route path='/' element={<Background/>}/>
                  <Route path='/add-contact' element={<AddContact getData={getData}/>}/>
                  <Route path='/:id' element={<ContactDetails/>}/>
                  <Route path='/edit/:id' element={<EditContat getData={getData}/>}/>
              </Routes>
            </div>
        </BrowserRouter>

    </div>
  );
}

export default App;

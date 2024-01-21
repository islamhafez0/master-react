
import { useState, useRef } from 'react';
import './App.css'
// import Heading from './components/Heading';
import Navbar from './components/Navbar'
import Form from './components/Form';
import { UserDetails } from './components/UserDetails';

interface Props {
  brand: string;
  titles: {
    Home: string,
    About: string,
    Services: string,
    Gallery: string,
  }
}
const props: Props = {
  brand: "Eslam",
  titles: {
    Home: "Home",
    About: "About",
    Services: "Services",
    Gallery: "Gallery",
  }
}

function App() {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: ""
})
console.log(data)
  return (
    <>
      <Navbar
        companyName={props.brand} 
        h={props.titles.Home}
        a={props.titles.About}
        s={props.titles.Services}
        g={props.titles.Gallery}
        login={login}
        setLogin={() => setLogin(!login)}
      />
      <br/>
      {!login ? (
        <Form setLogin={setLogin} login={login} data={data} setData={setData} />
      ) : (
        <>
          <p style={{ padding: "30px" }}>Welcome Back</p>
          {Object.values(data).every((value) => value !== "") && <UserDetails user={data} />}
        </>
      )}
    </>
  )
}

export default App

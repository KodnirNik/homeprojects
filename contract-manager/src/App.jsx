import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {
  const contact =[
    {id: 24, fullName: ' Harley Quinn', email: 'quinn@gmail.com', phone: '555-5555', gender: 'female' },
    {id: 45, fullName: ' Selina Kyle', email: 'cat@gmail.com', phone: '556-5666', gender: 'female' },
    {id: 12, fullName: 'Bruce Wain', email: 'bat@gmail.com', phone: '556-7777', gender: 'man' },
    {id: 10, fullName: 'Hit Ledjer', email: 'Joke@gmail.com', phone: '577-7788', gender: 'man' },
  ]



  return (
    <div className="App">
     <Header />
     <div className="container">

     <div className="row">
     <ContactList contacts ={ contact} />
     <AddContact />

     </div>
     </div>
    </div>
  );
}

export default App;

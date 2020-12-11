import React, { useContext } from 'react'

// Components
import Header from './components/Header';
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import { GlobalContext } from './context/GlobalState';


function App() {

  const { user } = useContext(GlobalContext)


  return (
    <>
      <div className="App">
        <Header />

        <section>
          {user ? <ChatRoom /> : <SignIn />}
        </section>
      </div>

    </>
  );
}

export default App;

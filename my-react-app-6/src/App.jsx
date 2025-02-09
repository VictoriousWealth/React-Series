import UserGreeting from "./UserGreeting.jsx"

function App() {

  return(
    <>
      <UserGreeting isLoggedIn={true} username="Nicko"/>
      <UserGreeting isLoggedIn={false} username="Nicko"/>
    </>
  )
}

export default App
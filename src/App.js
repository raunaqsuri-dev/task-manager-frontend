import logo from "./logo.svg";
import "./App.css";
// import Welcome from "./Welcome"; // ✅ Correct import
// import Header from "./Welcome";
// import Footer from "./Welcome";
import { Welcome, Header, Footer } from "./Welcome";
import ProfileCard from "./ProfileCard";
import DateInfo from "./DateInfo";
import Counter from "./Counter";
import ToggleMessage from "./ToggleMessage";
import FruitList from "./FruitList";  
import NameForm from "./NameForm";
import TaskManager from "./TaskManager"; // Assuming TaskManager is a component in your project   
import LoginForm from "./LoginForm"


function App() {
  return (
    <div className="App">
      <Header />
      <Welcome name="Raunaq" />
      <FruitList />
      <NameForm />
      <TaskManager />
      <LoginForm/>

      {/* <Welcome name="React Learner" /> */}
      <DateInfo />
      <Counter />
      <ToggleMessage />
      <ProfileCard name="Raunaq" age={25} city="New York" />
      <ProfileCard name="Alice" age={30} city="Los Angeles" />
      <ProfileCard name="Bob" age={28} city="Chicago" />
      <Footer />
    </div>
  );
}

export default App;

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   function handleLogin() {
//     setIsLoggedIn(true);
//   }

//   function handleLogout() {
//     setIsLoggedIn(false);
//   }

//   return (
//     <div>
//       {isLoggedIn ? (
//         <LogoutButton onClick={handleLogout} />
//       ) : (
//         <LoginButton onClick={handleLogin} />
//       )}
//     </div>
//   );
// }

// function LoginButton({ onClick }) {
//   return <button onClick={onClick}>Log In</button>;
// }

// function LogoutButton({ onClick }) {
//   return <button onClick={onClick}>Log Out</button>;
// }

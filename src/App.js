import './App.css';
import SignUp from './Components/Signup';
import AuthDetails from './Components/AuthDetails';
import SignIn from './Components/Signin';

function App() {
  return (
    <div className="App">
      <h1>Firebase Authentication</h1>
      <br/>
      <SignUp/>
      <SignIn/>
      <AuthDetails/>
    </div>
  );
}

export default App;

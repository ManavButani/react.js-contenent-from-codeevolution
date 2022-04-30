import './App.css';
import Greet from "./components/Name"
import Welcome from './components/Welcome';
function App() {
  return (
    <>
    <Greet name="Manav" />
    <Greet name="Modi" surname="Modi"> 
    <p> I am Flutter Developer</p>
    </Greet>
    <Greet name="Krenil" />
    <Welcome name="Raja"/>
    </>
  );
}
export default App;

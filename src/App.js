import logo from './logo.svg';
import './App.css';
import Bio from './floder/component/Bio';
import Profession from './floder/component/Profession';
import FullName from './floder/component/FullName';
import photo from './a.jpg'


function App() {
  const show=(x)=>{
    alert(x)
  }   
  return (
    <div className="App">
      <Bio age='17'>{photo}</Bio>
      <Profession job='student'></Profession>
      <FullName fct={show} FullName='houssem'></FullName>
    </div>
  );
}

export default App;

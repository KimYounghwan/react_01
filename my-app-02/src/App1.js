import logo from './logo.svg';
import './App.css';

export default function App() {
  const name = "홍길동"
  const p = {
    name:"김길동",
    age : 30
  }
  function formatName(person){
    const s =  person.name+"의 나이는1 "+person.age
    // const s =  `${person.name}의 나이는2 ${person.age}`
    // const s =  <span>{person.name}의 나이는3 {person.age}</span>
    return s
  }
  return (
    <div className="App">
      <h1>헬로 {name}</h1>
      <h2> {formatName(p)} </h2>
    </div>
  );
}



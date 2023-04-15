import { useEffect, useState } from "react";


function App() {
/* ПЕРВЫЙ СПОСОБ
//////////////////////////////////////

 /* const [advice, setAdvice] = useState("");

  useEffect(() => {
   const  getAdvice = async () => {
    const responce = await fetch (`https://api.adviceslip.com/advice`)
    const data = await responce.json()
    console.log(data.slip.advice);
    setAdvice(data.slip.advice)
  }
  getAdvice()
  }, [])

  return (
    <div className="App">
     <h2>{advice}</h2>
    </div>
  );*/

///////////////////////////////////////////
/* 1 СПОСОБ ДЗ
const [quoters, setQuoters] = useState("");

useEffect(() => {
  const getQuoters = async () => {
    const responce = await fetch (`https://api.quotable.io/random`);
    const data = await responce.json()
    console.log(data.content)
    setQuoters(data.content)
  }
  getQuoters()
}, [])

return (
  <h2>{quoters}</h2>
)*/

/* 2 СПОСОБ ДЗ*/

const [quoters, setQuoters] = useState("");
  
useEffect(() => {
  getQuoters();
}, [])

const getQuoters = async () => {
  const responce = await fetch (`https://api.quotable.io/random`);
  const data = await responce.json();
  console.log(data.content);
  setQuoters(data.content)
}
return (
  <h2>{quoters}</h2>
);
}

export default App;

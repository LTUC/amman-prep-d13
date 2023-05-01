import { useState } from "react";
import About from "../About/About";

export default function Home() {
  const [gender, setGender] = useState(true);

  return (
    <>
      <h1>Home page</h1>
      {/* <About username='Hasan' age={30}/>
      <About username='Raghad' age={20}/> */}
      {
        gender && <About username='Alaa' age={20}/>
      }
      {
        !gender && <About username='Hasan' age={30}/>
      }
    </>
  )
}
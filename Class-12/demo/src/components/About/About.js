import { useState } from "react";
import Button from "./Button/Button";

export default function About({username, age, changeUsername}) {
  const [name, changeName] = useState('');

  const handleChange = (e) => {
    changeName(e.target.value);
  }
  return (
    <>
      <p>This is About page</p>
      <p>Welcome {username} {age}</p>
      <input onChange={handleChange} type="text"/>
      <Button changeUsername={changeUsername} name={name} />
    </>
  )
}

// export default About;
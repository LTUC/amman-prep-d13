function Person(props) {
  let {name, age} = props;
  return (
    <>
      <p>Hello {name}, {age}</p>
    </>
  )
}

export default Person;
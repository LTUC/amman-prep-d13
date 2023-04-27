export default function List(props) {
  // console.log(props)

  return (
    <>
      {
        props.dataList.map(item =>
          <div key={item.name}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        )
      }
    </>
  )
}
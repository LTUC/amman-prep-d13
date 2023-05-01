import React from 'react'

export default function Button(props) {
  return (
    <button onClick={() => props
    .changeUsername(props.name)}>
      Change the name
    </button>
  )
}
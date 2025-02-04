import React from 'react'
import { useParams } from 'react-router-dom'

const List = () => {

  const {category} = useParams();

  return (
    <div>
      List
      <h1>{category}</h1>

      {category === "arka"?<h1>TRUE</h1>:<h1>FALSE</h1>}
    </div>

  )
}

export default List
import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const params = useParams()
  return (
    <div>
      <h1>I am user{params.username}</h1>
    </div>
  )
}

export default User

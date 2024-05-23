import React from 'react'
import withAuth from '../routes/WithAuth'

function Investments() {
  return (
    <div>Investments</div>
  )
}

export default withAuth(Investments)
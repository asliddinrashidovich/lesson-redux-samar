import React from 'react'
import Increase from './increase'
import Decrease from './decrease'
import Delete from './delet'

function Counter() {
  return (
    <div>
      <Increase/>
      <Decrease/>
      <Delete/>
    </div>
  )
}

export default Counter
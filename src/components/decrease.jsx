import { useDispatch } from "react-redux"
import { minuseState } from "../reducers/count"

function Decrease() {
  const dispatch = useDispatch()

  return (
    <>
      <button className='btn btn-warning' onClick={() => dispatch(minuseState())}>decrese</button>
    </>
  )
}

export default Decrease
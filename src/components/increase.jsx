import { useDispatch } from "react-redux"
import { piluseState } from "../reducers/count";

function Increase() {
  const dispatch = useDispatch();
  return (
    <>
      <button className='btn btn-success' onClick={() => dispatch(piluseState())}>increse</button>
    </>
  )
}

export default Increase
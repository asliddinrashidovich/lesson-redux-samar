import { useDispatch } from "react-redux"
import { restState } from "../reducers/count";

function Delete() {
  const dispatch = useDispatch();

  return (
    <>
      <button className='btn btn-danger' onClick={() => dispatch(restState())}>delete</button>
    </>
  )
}

export default Delete
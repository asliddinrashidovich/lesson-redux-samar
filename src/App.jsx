import { useSelector } from 'react-redux'
import Counter from './components/counter'

function App() {
  const state = useSelector(state => state.count)
  // console.log(state)/

  return (
    <div className='text-center border m-5'>
      <h1 >Count : {state}</h1>
      <Counter/>
    </div>
  )
}

export default App
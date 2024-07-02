import './App.css'
import Cards from './Components/Cards'

function App() {

  return (
    <>
    <div className='grid grid-cols-4'>
      <Cards title={"Amount Pending"} amount={"92,300"} orderCount={"23"}  />
      <Cards title={"Amount Pending"} amount={"92,300"}   />  
    </div>
    </>
  )
}

export default App

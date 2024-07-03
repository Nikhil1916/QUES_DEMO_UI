import './App.css'
import Cards from './Components/Cards'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'

function App() {

  return (
    <>
    <div className='flex items-start'>
    <Sidebar/>
    <div className='flex-1'>
    <Header/>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
      <Cards title={"Amount Pending"} amount={"$92,300"} orderCount={"23"} isBlue="true"  />
      <Cards title={"Amount Pending"} amount={"$92,300"} orderCount={"23"}  />
      <Cards title={"Amount Pending"} amount={"$92,30,000"}   />  
    </div>
    </div>
    </div>
    </>
  )
}

export default App

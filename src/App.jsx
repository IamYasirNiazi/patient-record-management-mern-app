import Header from './components/Header'
import AllButtons from './components/AllButtons'
import List from './components/List'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {

  return (
    <div className='d-flex flex-column gap-3'>
      <Header />
      <AllButtons />
      <List />
    </div>
  )
}

export default App

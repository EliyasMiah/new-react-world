
import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/Countries'

const counttriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())


function App() {


  return (
    <>

      <Suspense fallback ={<h3>Data is loading.....</h3>}>
        <Countries counttriesPromise = {counttriesPromise}></Countries>
      </Suspense>
   
    </>
  )
}

export default App

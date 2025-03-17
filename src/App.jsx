import React, { useEffect, useState } from 'react'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

const App = () => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  function handleToggleModal(){
    setShowModal(!showModal)
  }

  useEffect(() => {
    async function fetchAPIData(){
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`

      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      if(localStorage.getItem(localKey)){
        const ApiData = JSON.parse(localStorage.getItem(localKey))
        setData(ApiData)
        console.log("Fetched from cache today")
        return
      }
      localStorage.clear()



      try{
        const response = await fetch(url)
          const ApiData = await response.json()
          localStorage.setItem(localKey, JSON.stringify(ApiData))
          setData(ApiData)
          console.log("Fetched from API today")
        } catch(err){
        console.log(err.message)
      }
    }
    fetchAPIData()
  }, [])
  

  return (
    <>
    {data ? (<Main data={data} />) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
    {showModal && (<Sidebar data={data} handleToggleModal={handleToggleModal} />)}
    {data && (<Footer data={data} handleToggleModal={handleToggleModal}/>)}
    </>
  )
}

export default App
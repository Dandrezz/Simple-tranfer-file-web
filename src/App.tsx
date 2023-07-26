import { ChangeEvent, useRef } from 'react'
import './App.css'

function App() {

  const ref = useRef<HTMLInputElement>(null)
  
  const handleClick = () => {
    if(!ref?.current) return
    ref.current.click()
  }

  const handleFile = (e:ChangeEvent<HTMLInputElement>) => {
    if(!e.target.files) return
    console.log(e.target.files[0])
  }

  return (
    <>
      <h1>Simple tranfer file</h1>
      <div className="card">
        <input ref={ref} type="file" style={{display:'none'}} onChange={(e)=>handleFile(e)} />
        <button onClick={handleClick}>
          Upload file
        </button>
      </div>
    </>
  )
}

export default App

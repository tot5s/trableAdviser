
import { Pallete } from './components/pallete'
import './App.css'
import { useState } from 'react'
import Cases from './components/cases'


function App() {
  
  const [selCaseType, setSelCaseType] = useState('suitcase')
  const [selectColor, setSelectColor ] = useState('bg-[#ffffff]')

  return (
    <>
      <section className='max-w-[1200px] mx-auto translate-z-[0] h-screen'>
        <div className='py-4'>
          {selCaseType}
          <div className={`sample rounded-full w-50 h-50 border mx-auto ${selectColor}`}></div>
        </div>
        <div className='fixed bottom-0 left-0 w-full drop-shadow-[1px_1px_5px_#dddddd] bg-[#f8fafc] rounded-t-xl'>
          <Cases onSelectCase={setSelCaseType}></Cases>
          <Pallete onSelectColor={setSelectColor}></Pallete>
        </div>
      </section>
    </>
  )
}

export default App

import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger,SplitText);

function App() {
  return (
    <div className=' flex-center h-[100vh]'>
      <h1 className=' text-4xl text-indigo-500'>Hello there</h1>
    </div>
  )
}

export default App
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const textRef = useRef(null)

  useEffect(() => {
    const text = textRef.current

    gsap.fromTo(text, 
      {
        fontSize: '8rem',
        opacity: 1
      },
      {
        fontSize: '2rem',
        opacity: 0.8,
        scrollTrigger: {
          trigger: text,
          start: 'top top',
          end: '+=1000',
          scrub: true,
          pin: true
        }
      }
    )
  }, [])

  return (
    <div className="app">
      <div className="content">
        <h1 ref={textRef} className="scaling-text">
          Welcome to Parallax
        </h1>
      </div>
      <div className="spacer"></div>
    </div>
  )
}

export default App 
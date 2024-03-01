import { useState } from 'react'
import './App.css'
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBXQSIbAtbxmrBLk0WGGR1jigxdTkGLsyc",
  authDomain: "goal-tracker-hackbright.firebaseapp.com",
  projectId: "goal-tracker-hackbright",
  storageBucket: "goal-tracker-hackbright.appspot.com",
  messagingSenderId: "988533694289",
  appId: "1:988533694289:web:0850046f179ef1f6917d70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// remove these later
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

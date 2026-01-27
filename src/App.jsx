import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'

function App() {

  let [color, setColor] = useState("black");

      const handleButton = (color) => {
        
        setColor(color);
    };

  return (
    <>
     <div className="h-screen flex flex-col items-center justify-center" style={{ backgroundColor: color }}>
     
      <div className="mb-6 bg-white px-4 py-2 rounded-full flex gap-3 shadow-lg">

        <Button color="red" handleButton={handleButton}>
          Red
        </Button>

        <Button color="green" handleButton={handleButton}>
          Green
        </Button>

        <Button color="blue" handleButton={handleButton}>
          Blue
        </Button>

        <Button color="olive" handleButton={handleButton}>
          Olive
        </Button>

        <Button color="gray" handleButton={handleButton}>
          Gray
        </Button>

        <Button color="yellow" handleButton={handleButton}>
          Yellow
        </Button>

        <Button color="pink" handleButton={handleButton}>
          Pink
        </Button>

        <Button color="purple" handleButton={handleButton}>
          Purple
        </Button>

        <Button color="indigo" handleButton={handleButton}>
          Indigo
        </Button>

      </div>
    </div>
    </>
  )
}

export default App

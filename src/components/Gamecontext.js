import React from 'react'
import Quiz from './Quiz'
import EndScreen from './EndScreen'
import Menu from './Menu'
import {useState} from 'react'
import { GameStateContext } from "../helpers/Contexts"

function Gamecontext() {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0)

  return (
    <div>
       <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,
        }}
      >
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quiz />}
        {gameState === "finished" && <EndScreen />}
      </GameStateContext.Provider>
    </div>
  )
}

export default Gamecontext

import { useState } from "react"
import words from "./wordList.json"
import { HangmanWord } from "./HangmanWord"
import { Keyboard } from "./Keyboard"
import { HangmanDrawing } from "./HangmanDrawing copy"


function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)]
}


function App() {

  const [wordToGuess, setWordToGuess] = useState<string>(getRandomWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])


  return (
    <div style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center"
    }}>
      <div style={{
        fontSize: "2rem",
        textAlign: "center"
      }}>
        Win Lose
      </div>

      <HangmanDrawing />
      <HangmanWord />

      <div style={{
        alignSelf: "stretch"

      }}>
        <Keyboard />
      </div>
    </div>
  )


}
export default App

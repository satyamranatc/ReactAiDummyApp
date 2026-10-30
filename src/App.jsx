import React,{useState} from 'react'
import askAi from './AskAi'
export default function App() {

  let [output,setOutput] = useState("")

  async function handleAi(e)
  {
    e.preventDefault()
    let question = e.target[0].value
    let answer = await askAi(question)
    setOutput(answer)
  }

  return (
    <div>

        <center>
          <h1>The Ai chat App</h1>

          <div id="Form">
            <form onSubmit={handleAi}>
              <input type="text" placeholder='Search...' />
              <button>Ask Ai</button>
            </form>
          </div>

          <div id="outPut">
            {output}
          </div>

        </center>
      
    </div>
  )
}

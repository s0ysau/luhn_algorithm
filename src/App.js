import {useState} from "react"
import LuhnCheck from "./components/LuhnCheck";

import Form from "./components/Form";

export default function App () {
  const [num, setNum] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const validateNumber = async (validateNum) => {
    try {
    // const response = await fetch(validateNum)
    // const data = response.reverse()
    setNum(validateNum)
  } catch (err) {
    console.error(err)
    setErrorMessage(err.message)
  }
  // setNum(validateNum)
}

  return (
    <>
      <h1>Luhn Algorithm</h1>
      <Form numberValidated={validateNumber}/>
      <div>{errorMessage ? `Error:${errorMessage}` : ""}</div>
      <LuhnCheck num={num} />
    </>
  )
}
import {useState, useEffect} from "react"
import LuhnCheck from "./components/LuhnCheck";
import Form from "./components/Form";

export default function App () {
  const [num, setNum] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [popup, setPopup] = useState(false)

  const validateNumber = async (validateNum) => {
    try {
    setNum(validateNum)
  } catch (err) {
    console.error(err)
    setErrorMessage(err.message)
  }
}

  return (
    <>
      <h1 className="title">Luhn Algorithm</h1>
      <Form numberValidated={validateNumber}/>
      <div>{errorMessage ? `Error:${errorMessage}` : ""}</div>
      <LuhnCheck num={num} />
    </>
  )
}
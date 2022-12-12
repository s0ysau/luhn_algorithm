import { useState, useEffect } from "react"

export default function Form (props) {
  const [validateNum, setValidateNum] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (evt) => {
    const noLetters = evt.target.value.replace(/[^0-9.]/g, '')
    setValidateNum(noLetters); 
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // const checkLength = new Promise ((resolve, reject) => {
    //   if (validateNum.length === 16) {
    //     resolve(props.numberValidated(validateNum))
    //   } else {
    //     const err = "The number you have entered is incorrect."
    //     reject(err)
    //   }
    // })
    props.numberValidated(validateNum)
  }

  return(
    <>
      <form 
        onSubmit={handleSubmit}>
        <input type="text" maxLength={16} onChange={handleChange} placeholder="Please Enter your 16 digit number" className="input-field" value={validateNum}/>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

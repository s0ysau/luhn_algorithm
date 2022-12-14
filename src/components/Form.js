import { useState } from "react"

export default function Form (props) {
  const [validateNum, setValidateNum] = useState("")

  const handleChange = (evt) => {
    const noLetters = evt.target.value.replace(/[^0-9.]/g, '')
    setValidateNum(noLetters); 
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
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

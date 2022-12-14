import {useEffect, useState} from "react"
import Display from "./Display"

export default function LuhnCheck ({num}) {
  const testNum = num

  const algorithmCheck = (testNum) => {
    const toArr = testNum.split('')
                          .reverse()
                          .map(i => i * 1)
    const odds = toArr.filter((a,i) => i % 2 === 0)
    const evens = toArr.filter((a,i) => i % 2 === 1)
                      .map(i => i * 2)
                      .toString()
                      .split('')
                      .filter((i) => i % 1 === 0)
                      .map(i => i * 1)
    const sum = odds.concat(evens).reduce((a,c) => {
      return a + c
    }, 0)          
    return sum
  }


  return (
    <>
      {
        algorithmCheck(testNum) % 10 === 0 && testNum.length == 16 ? (
          <h2 className="result">Valid Number</h2>
        ) : (
        <h2 className="result">You have entered an invalid number</h2>
        )
      }
  </>
  )
}

/* 
    <>
      {
        algorithmCheck(testNum) % 10 === 0 && testNum.length == 16 ? (
          <h2 className="result">Valid Number</h2>
        ) : (
        <h2 className="result">You have entered an invalid number</h2>
        )
      }
    </>
*/
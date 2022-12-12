export default function LuhnCheck (props) {
  const testNum = props.num

  const toArr = testNum.split('').reverse()
  const odds = toArr.filter((a,i) => i % 2 === 0)
                    .map(i => i * 1)
  const evens = toArr.filter((a,i) => i % 2 === 1)
                    .map(i => i * 2)
                    .toString()
                    .split('')
                    .filter((i) => i % 1 === 0)
                    .map(i => i * 1)
  const sum = odds.concat(evens).reduce((a,c) => {
    return a + c
  }, 0)                    

  return (
    <>
        {
          sum % 10 === 0 ? (
          <div>
            <h1>Valid Number</h1>
          </div>
          ) : (
          <h1>You have entered an invalid number</h1>
          )
        }
    </>
  )
}
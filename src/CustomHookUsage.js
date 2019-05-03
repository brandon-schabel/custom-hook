import React from "react"

import useMyHook from "./useMyHook"

const CustomHookUsage = () => {
  const [test, addTest] = useMyHook()
  const [test2, addTest2] = useMyHook()

  return (
    <div>
      <button onClick={addTest}>Add</button>
      <button onClick={addTest2}>Add2</button>
      <div>
        {test.map(el => {
          return <div>{el}</div>
        })}
      </div>
      -----------
      <div>
        {test2.map(el => {
          return <div>{el}</div>
        })}
      </div>
    </div>
  )
}

export default CustomHookUsage

import React, { useState } from "react"

const useMyHook = () => {
  const [test, setTest] = useState([])

  const addTest = () => {
    setTest([...test, 'test'])
  }

  return [test, addTest]
}

export default useMyHook

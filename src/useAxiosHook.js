import React, { useState } from "react"
import axios from "axios"

const useAxiosHook = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [result, setResult] = useState({})
  const [error, setError] = useState(null)

  const fetchData = async url => {
    const apiData = await axios(url)
      .then(response => {
        setResult(response)
        setIsLoading(false)
        return response
      })
      .catch(error => {
        setIsLoading(false)
        setError(error)
      })

    return apiData
  }

  return [result, error, isLoading, fetchData]
}

export default useAxiosHook

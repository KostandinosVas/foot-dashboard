import { useState, useEffect } from 'react'
import { getScorers } from '../api/football'

const useScorers = (competitionCode) => {
  const [scorers, setScorers] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    const fetchScorers = async () => {
      try {
        setLoading(true)
        const response = await getScorers(competitionCode)
        setScorers(response.data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchScorers()
  }, [competitionCode])

  return { scorers, loading, error }
}

export default useScorers
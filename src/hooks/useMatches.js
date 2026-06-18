import { useState, useEffect } from 'react'
import { getMatches } from '../api/football'

const useMatches = (competitionCode) => {
  const [matches, setMatches] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        setLoading(true)
        const response = await getMatches(competitionCode)
        setMatches(response.data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchMatches()
  }, [competitionCode])

  return { matches, loading, error }
}

export default useMatches
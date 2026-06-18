import { useState, useEffect } from 'react'
import { getStandings } from '../api/football'

const useStandings = (competitionCode) => {
  const [standings, setStandings] = useState(null)
  const [loading, setLoading]     = useState(true)
  const [error, setError]         = useState(null)

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        setLoading(true)
        const response = await getStandings(competitionCode)
        setStandings(response.data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchStandings()
  }, [competitionCode])

  return { standings, loading, error }
}

export default useStandings
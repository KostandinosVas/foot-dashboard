import useStandings from '../hooks/useStandings'
import StandingsTable from '../components/StandingsTable'

const StandingsPage = () => {
  const { standings, loading, error } = useStandings('PL')

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  const table = standings.standings[0].table

  return <StandingsTable table={table} />
}

export default StandingsPage
import { useState } from 'react'
import useStandings from '../hooks/useStandings'
import StandingsTable from '../components/StandingsTable'
import PageHeader from '../components/PageHeader'

const COMPETITION_NAMES = {
  PL: 'Premier League',
  PD: 'La Liga',
  SA: 'Serie A',
  BL1: 'Bundesliga',
  FL1: 'Ligue 1',
}

const StandingsPage = () => {
  const [competitionCode, setCompetitionCode] = useState('PL')
  const { standings, loading, error } = useStandings(competitionCode)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  const table = standings.standings[0].table
  const season = standings.season.startDate.slice(0, 4)

  return (
    <>
      <PageHeader
        title={`${COMPETITION_NAMES[competitionCode]} Standings`}
        season={season}
        competitionCode={competitionCode}
        onCompetitionChange={setCompetitionCode}
      />
      <StandingsTable table={table} />
    </>
  )
}

export default StandingsPage
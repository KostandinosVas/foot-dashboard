import useStandings from '../hooks/useStandings';




const StandingPage = () => {
   const { standings, loading, error } = useStandings('PL')

   if (loading) return <div>Loading...</div>
   if (error)   return <div>Error: {error}</div>
 

   return <pre>{JSON.stringify(standings, null, 2)}</pre>
}

export default StandingPage;
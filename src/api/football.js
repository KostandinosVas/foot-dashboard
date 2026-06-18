import client from './client';

export const getStandings = (competitionCode)   => client.get(`/competitions/${competitionCode}/standings`)
export const getMatches   = (competitionCode)   => client.get(`/competitions/${competitionCode}/matches`)
export const getScorers   = (competitionCode)   => client.get(`/competitions/${competitionCode}/scorers`)
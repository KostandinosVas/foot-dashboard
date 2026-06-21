import styled from 'styled-components'

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
`

const Th = styled.th`
  text-align: left;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.textMuted};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-weight: 500;
`

const Td = styled.td`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
`

const Tr = styled.tr`
  &:hover {
    background: ${({ theme }) => theme.colors.surface};
  }
`

const TeamLogo = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  margin-right: ${({ theme }) => theme.spacing.sm};
  vertical-align: middle;
`

const StandingsTable = ({ table }) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>#</Th>
          <Th>Team</Th>
          <Th>P</Th>
          <Th>W</Th>
          <Th>D</Th>
          <Th>L</Th>
          <Th>GF</Th>
          <Th>GA</Th>
          <Th>GD</Th>
          <Th>Pts</Th>
        </tr>
      </thead>
      <tbody>
        {table.map((row) => (
          <Tr key={row.team.id}>
            <Td>{row.position}</Td>
            <Td>
              <TeamLogo src={row.team.crest} alt={row.team.name} />
              {row.team.name}
            </Td>
            <Td>{row.playedGames}</Td>
            <Td>{row.won}</Td>
            <Td>{row.draw}</Td>
            <Td>{row.lost}</Td>
            <Td>{row.goalsFor}</Td>
            <Td>{row.goalsAgainst}</Td>
            <Td>{row.goalDifference}</Td>
            <Td>{row.points}</Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  )
}

export default StandingsTable
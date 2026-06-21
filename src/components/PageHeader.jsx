import styled from 'styled-components'

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`

const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`

const SeasonBadge = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textMuted};
`

const Select = styled.select`
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-size: 0.9rem;
  cursor: pointer;
  outline: none;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

const COMPETITIONS = [
  { code: 'PL', name: 'Premier League' },
  { code: 'PD', name: 'La Liga' },
  { code: 'SA', name: 'Serie A' },
  { code: 'BL1', name: 'Bundesliga' },
  { code: 'FL1', name: 'Ligue 1' },
]

const PageHeader = ({ title, season, competitionCode, onCompetitionChange }) => {
  return (
    <Header>
      <TitleGroup>
        <Title>{title}</Title>
        {season && <SeasonBadge>Season {season}</SeasonBadge>}
      </TitleGroup>
      <Select value={competitionCode} onChange={(e) => onCompetitionChange(e.target.value)}>
        {COMPETITIONS.map((c) => (
          <option key={c.code} value={c.code}>
            {c.name}
          </option>
        ))}
      </Select>
    </Header>
  )
}

export default PageHeader
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
`

const Sidebar = styled.aside`
  width: 220px;
  background: ${({ theme }) => theme.colors.surface};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`

const Logo = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textMuted};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radii.sm};
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.border};
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.border};
  }
`

const Main = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.xl};
`

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Sidebar>
        <Logo>⚽ FootballDB</Logo>
        <StyledNavLink to="/">Standings</StyledNavLink>
        <StyledNavLink to="/scorers">Top Scorers</StyledNavLink>
        <StyledNavLink to="/matches">Matches</StyledNavLink>
      </Sidebar>
      <Main>{children}</Main>
    </Wrapper>
  )
}

export default Layout
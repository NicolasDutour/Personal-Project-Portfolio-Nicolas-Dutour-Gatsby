import styled from "styled-components"

export const DetailsWrapper = styled.div`
    background-color: #202330;
    color: white;
    height: 100%;

  @media (max-width: 1160px) {
    flex-direction: column;
    margin-bottom: 30px;
    padding: 0 50px;
  }
`

export const Title = styled.h1`
  padding-top: 30px;
  font-size: 2rem;
  text-align: center;
  color: ${props => props.theme.secondary};
`

export const SubTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
`

export const Description = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 50px;
`

export const Para = styled.div`
  text-align: left;
  margin-bottom: 30px;
`

export const StyledLink = styled.a`
  color: #b12e1f;

  &:hover {
    color: ${props => props.theme.primary};
  }
`

export const Show = styled.span`
  color: #b12e1f;
`

export const DividerWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`

export const Divider = styled.div`
  width: 50px;
  height: 5px;
  background-color: #b12e1f;
`
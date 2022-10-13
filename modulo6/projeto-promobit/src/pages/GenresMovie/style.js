import styled from 'styled-components'

export const DivContainer = styled.div`

  align-items: center;
  background: var(--purple);
`
export const Content = styled.div`
  max-width: 1100px;
  text-align: center;
  padding: 5.3rem 0;
  margin: 0 auto;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    line-height: 3.5rem;
    color: var(--white);

  }

  h2 {
    font-size: 1.0rem;
    font-weight: bold;
    font-weight: 700;
    line-height: 3.5rem;
    color: var(--white);
    margin-top: 1rem;
  }

  @media (max-width: 720px) {
    text-align: center;
    margin: 0 1rem 0;
  }
`
export const DivButton = styled.div`
margin-bottom: -4%;
`
export const Button = styled.button`
  height: 2rem;
  margin-left: 0.7rem;
  margin-inline-start: 0.5rem;
  margin-bottom: 0.75rem;
  border: 0;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  width: auto;
  font-weight: 700;
  color: ${props => (props.selecioned ? '#FFFFFF' : '#323232')};
  background-color: ${props => (props.selecioned ? '#D18000' : '#fff')};
  svg {
    width: 1rem;
    height: 1rem;
    margin-left: 0.1rem;
  }
  `
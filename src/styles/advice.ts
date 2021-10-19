import styled from 'styled-components'

const Main = styled.main`
  height: 100vh;
  width: 80vw;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`

const Header = styled.header``

const Title = styled.h1`
  position: absolute;
  display: block;
  top: 30px;
  left: 35px;

  &[class*="upperTitle"] {
    color: ${props => props.theme.contrast};
    font-size: 3rem;
  }

  &[class*="bottomTitle"] {
    margin-top: 26px;
    color: ${props => props.theme.purple};
    font-size: 5rem;
  }
`

const Card = styled.div`
  background-color: #EAE4E0;
  width: 700px;
  display: flex;

  border-radius: 20px;

  .image {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    
    img {
      border-radius: 0 20px 20px 0;
      border-left: 1px solid rgba()
    }
  }
`

const AdviceText = styled.p`
  flex: 1;
  padding: 50px;

  font-size: 3.2rem;
  font-weight: bold;
  color: ${props => props.theme.purple};

  .author {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;

    font-size: 3rem;
    font-weight: 400;
    color: #937c6e;
  }
`

export { Main, Header, Title, Card, AdviceText }


import styled from 'styled-components'

const Main = styled.main`
  height: 100vh;
  width: 80vw;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes movement {
    0%   {margin-top: -30px;}
    25%  {margin-top: 0;}
    50%  {margin-top: -30px;}
    75%  {margin-top: 0;}
    100% {margin-top: -30px;}
  }

  .image {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    animation-name: movement;
    animation-duration: 4s;
    animation-iteration-count: infinite;

    img {
      max-height: 600px;
    }
  }
`

const Aside = styled.aside`
  flex: 1;
  display: flex;
  justify-content: center;
`

const Title = styled.h1`
  &[class*="upperTitle"] {
    color: ${props => props.theme.contrast};
    font-size: 6rem;
  }

  &[class*="bottomTitle"] {
    margin-top: -16px;
    color: ${props => props.theme.purple};
    font-size: 14rem;
  }
`

const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;

  font-size: 3rem;
  font-weight: bold;
  color: #fefefe;
  background-color: ${props => props.theme.purple};

  padding: 5px;
  width: 360px;
  height: 80px;

  border-radius: 20px;

  transition: all 300ms;

  &:hover {
    background-color: #600050;
  }
`

export { Main, Aside, Title, Button }
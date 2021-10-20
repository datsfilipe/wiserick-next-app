import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 12px 10px 12px;
  border: none;
  outline: none;
  border-radius: 10px;

  cursor: pointer;

  position: absolute;
  display: block;
  top: 30px;
  right: 35px;
  background-color: rgba(0,0,0,0.2);

  .button-image {
    margin-top: 2px;
  }

  &:hover {
    background-color: rgba(0,0,0,0.3);
  }

  &:active {
    background-color: rgba(0,0,0,0.5);
  }
`

export { Button }
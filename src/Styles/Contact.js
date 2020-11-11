import styled from "styled-components"

export const FormWrapper = styled.div`
    margin: 0 auto;
    background-color: #202330;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    @media all and (max-width: 960px) {
        width: 90%;
    }
`

export const Form = styled.form`
    margin-top: 30px;
    width: 40%;
`

export const Title = styled.h1`
    padding-top: 30px;
    font-size: 2rem;
    text-align: center;
    color: ${props => props.theme.secondary};
`

export const Input = styled.input`
    display: block;
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0 20px 0;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid black;
    &:focus {
      outline: none;
    }
`

export const Textarea = styled.textarea`
  display: block;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0 20px 0;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid black;
  &:focus {
    outline: none;
  }
`

export const Button = styled.input`
  display: block;
  width: 30%;
  padding: 12px 20px;
  margin: 8px 0 20px 0;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
  background-color: #b12e1f;
  color: white;
  transition: background-color 1s, color 1s;
  border: none;

  &:hover {
    background-color: white;
    color: #b12e1f;
  }
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
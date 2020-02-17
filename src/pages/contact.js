import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import Layout from "../components/layout"

const FormWrapper = styled.div`
  width: 60%;
  margin: 0 auto;

  @media all and (max-width: 960px) {
    width: 90%;
  }
`

const Title = styled.h1`
  font-size: 2rem;
  margin-top: 30px;
  text-align: center;
  color: ${props => props.theme.secondary};
`

const Input = styled.input`
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

const Textarea = styled.textarea`
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

const Button = styled.input`
  display: block;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0 20px 0;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
  border: 1px solid black;
  background-color: white;
  color: #b12e1f;
  transition: background-color 1s, color 1s;

  &:hover {
    background-color: #b12e1f;
    color: white;
  }
`

const DividerWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`

const Divider = styled.div`
  width: 50px;
  height: 5px;
  background-color: #b12e1f;
  margin-bottom: 60px;
`

const Contact = () => (
  <Layout id="contact">
    <SEO title="Contact" />
    <Title>Contact</Title>

    <DividerWrapper>
      <Divider />
    </DividerWrapper>
    <FormWrapper>
      <form action="https://formspree.io/xzbrroaq" method="post">
        <label htmlFor="name">Nom complet</label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Prénom Nom"
          required
        />
        <label htmlFor="email">Email</label>
        <Input
          type="email"
          name="_replyto"
          id="email"
          placeholder="email@exemple.fr"
          required
        />
        <label htmlFor="message">Message</label>
        <Textarea
          rows="5"
          name="message"
          id="message"
          placeholder="Ecrivez votre message ici..."
          required
        ></Textarea>
        <input
          type="hidden"
          name="_subject"
          id="email-subject"
          value="Contact Form Submission"
        />
        <Button type="submit" value="Envoyer" />
      </form>
    </FormWrapper>
  </Layout>
)

export default Contact

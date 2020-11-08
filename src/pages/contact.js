import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { FormWrapper, Title, Input, Textarea, Button, DividerWrapper, Divider, Form } from '../Styles/Contact'

const Contact = () => (
  <Layout id="contact">
    <SEO title="Contact" />
    <FormWrapper>
      <Title>Contact</Title>
      <DividerWrapper>
        <Divider />
      </DividerWrapper>
      <Form action="https://formspree.io/xzbrroaq" method="post">
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
          rows="10"
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
      </Form>
    </FormWrapper>
  </Layout>
)

export default Contact

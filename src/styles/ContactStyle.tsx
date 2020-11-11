import styled from "styled-components";

const ContactStyle = styled.section`
  max-width: 500px;
  width: 90vw;
  height: 70vh;
  margin: 12vh auto;
  padding: 2em;
  background: var(--light);
  color: var(--white);
  border-radius: 4rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.26);
  .contact__title {
    font-size: 2.5rem;
    font-weight: var(--boldFont);
    text-align: center;
    padding: 0.5em 0;
  }
  .contact__form {
    display: flex;
    flex-flow: column;
    label {
      font-weight: var(--lightFont);
      font-size: 1.25rem;
      padding: 0.25em 0;
    }
    input {
      background: none;
      border: none;
      border-bottom: 1px solid white;
      margin: 0.5em 0;
      font-size: 1.25rem;
      color: var(--white);
      ::placeholder {
        font-size: 1rem;
        color: var(--white);
        opacity: 0.5;
        font-style: italic;
      }
      :focus,
      :active {
        outline: none;
        border-bottom: 2px solid white;
        background: none;
      }
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      -webkit-text-fill-color: var(--white);
    }
    textarea {
      border: 1px solid var(--white);
      background: none;
      height: 5rem;
      padding: 0.5em 0.25em;
      margin: 0.5em 0;
      color: var(--white);
      ::placeholder {
        font-size: 1rem;
        color: var(--white);
        opacity: 0.5;
        font-style: italic;
      }
      :focus,
      :active {
        outline: none;
        background: none;
        border: 2px solid var(--white);
      }
    }
    .contact__btn {
      background: none;
      border: none;
      margin: 1em auto;
      width: 100px;
      img {
        height: 50px;
      }
      :focus,
      :active {
        outline: none;
      }
      :hover,
      :active {
        transform: scale(1.2)
      }
    }
  }
`

export default ContactStyle


import styled, { keyframes } from 'styled-components';
import background from '../assets/background.svg'

const bgEntranceAnimation = keyframes`
  0% {background-position: 400% 100%}
  100% {background-position: bottom right}
`

const formEntranceAnimation = keyframes`
  0% { transform: translateX(-50%) translateY(50%); opacity: 0}
  100% {tranform: translateX(0) translateY(0); opacity: 1}
`

const formExitAnimation = keyframes`
  0% {tranform: translateX(0) translateY(0); opacity: 1}
  49% {transform: translateX(50%) translateY(-50%); opacity: 0}
  50% { transform: translateX(-50%) translateY(50%); opacity: 0}
  100% {tranform: translateX(0) translateY(0); opacity: 1}
`

const ContactStyle = styled.section`
  width: 100%;
  min-height: 100vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${background});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom right;
  animation: ${bgEntranceAnimation} 1s 1;
  .container {
    max-width: 600px;
    width: 90vw;
    padding: 2em;
    background: var(--white);
    color: var(--light);
    border-radius: 4rem;
    box-shadow: 0 3px 5px rgba(0,0,0,0.26);
    animation: ${formEntranceAnimation} 0.5s forwards;
    &.sent {
      animation: ${formExitAnimation} 0.5s 1;
    }
    .contact__title {
      font-size: 2.5rem;
      font-weight: var(--boldFont);
      text-align: center;
      padding: 0.5em 0;
    }
    .contact__validation {
      text-align: center;
      font-size: 1rem;
      color: #5C946E;
      padding: 0.15em;
      min-height: 2em;
    }
    .contact__form {
      display: flex;
      flex-flow: column;
      label {
        font-size: 1.25rem;
        padding: 0.25em 0;
      }
      input {
        background: none;
        border: none;
        border-bottom: 1px solid var(--light);
        margin: 0.5em 0;
        font-size: 1.25rem;
        color: var(--dark);
        ::placeholder {
          font-size: 1rem;
          color: var(--light);
          opacity: 0.5;
          font-style: italic;
        }
        :focus,
        :active {
          outline: none;
          border-bottom: 3px solid var(--light);
          background: none;
        }
      }
      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      input:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;
        -webkit-text-fill-color: var(--dark);
      }
      textarea {
        background: none;
        max-width: calc(500px-2em);
        height: 5rem;
        padding: 0.5em 0.25em;
        border: 1px solid var(--light);
        margin: 0.5em 0;
        font-size: 1.25rem;
        color: var(--dark);
        resize: vertical;
        ::placeholder {
          font-size: 1rem;
          color: var(--light);
          opacity: 0.5;
          font-style: italic;
        }
        :focus,
        :active {
          outline: none;
          background: none;
          border: 3px solid var(--light);
        }
      }
      .contact__btn {
        background: none;
        border: none;
        margin: 1em auto;
        width: 100px;
        cursor: pointer;
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
  }
`

export default ContactStyle


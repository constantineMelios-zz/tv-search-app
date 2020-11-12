import styled from "styled-components";

const SortByStyle = styled.form`
  max-width: 800px;
  width: 90vw;
  margin: auto;
  padding: 1.5em;
  background: var(--light);
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  border-radius: 2em;
  box-shadow: 0 2px 5px rgba(0,0,0,0.26);
  .sort__title {
    font-size: 1.5rem;
    padding: 0.5em 0;
    flex: 0 1 20%;
    min-width: max-content;
    text-align: right;
  }
  .sort__radios {
    flex: 1 1 80%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-evenly;
    .sort__radio-container {
      padding: 0.50em;
    }
  }
  .sort__label {
    font-size: 1.25rem;
    opacity: 0.8;
    cursor: pointer;
    transition: opacity 0.25s ease;
    :hover {
      opacity: 1;
    }
    .sort__radio {
      position: relative;
      :before {
        content: "";
        width: 13px;
        height: 13px;
        position: absolute;
        left: 0;
        top: 0;
        background: var(--light);
        border: 1px solid var(--white);
        border-radius: 100%;
        transition: background 0.25s ease;
      }
      &:checked {
        opacity: 1;
        :before {
          background: var(--dark);
          opacity: 1;
        }
      }
    }  
  }
`

export default SortByStyle
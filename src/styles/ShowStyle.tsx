import styled from "styled-components";

const ShowStyle = styled.div`
  margin: 0.5em;
  width: 250px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.26);
  border-radius: 2em;
  cursor: pointer;
  color: var(--dark);
  display: grid;
  grid-template-columns: minmax(150px 250px) minmax(150px 500px) 50px;
  grid-template-rows: repeat(3, auto);
  justify-items: center;
  align-items: center;
  grid-template-areas:
    "img title title"
    "img desc desc"
    "img . votes";
  transition: width 0.25s ease;
  @media (max-width: 650px){
    width: 150px;
  }
  :focus {
    outline: none;
  }
  &.open {
    width: 1100px;
    z-index: 1;
    .show__title,
    .show__description,
    .show__votes {
      opacity: 1;
      display: block;
    }
    @media (max-width: 650px){
      width: 350px;
    }
  }
  :hover,
  :active {
    box-shadow: 0 2px 5px rgba(0,0,0,0.96);
  }
  .show__title{
    grid-area: title;
    margin-top: 1em;
    font-size: 1.5rem;
    font-weight: var(--boldFont);
    opacity: 0;
    display: none;
  }
  .show__img {
    grid-area: img;
    border-radius: 2em;
    width: 250px;
    @media (max-width: 650px){
      width: 150px;
    }
  }
  .show__description {
    grid-area: desc;
    padding: 0 2em;
    font-size: 1.05rem;
    line-height: 1.1em;
    opacity: 0;
    display: none;
  }
  .show__votes {
    grid-area: votes;
    margin-bottom: 1em;
    padding: 0 1em;
    font-size: 2.5rem;
    font-weight: var(--boldFont);
    color: #5C946E;
    span {
      font-size: 1rem;
      color: var(--darker);
    }
    opacity: 0;
    display: none;
  }
`

export default ShowStyle
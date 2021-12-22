import styled from "styled-components";

export const LinkWrapper = styled.a`
  text-decoration: none;
`

export const Wrapper = styled.li`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  & > .image {
    display: inline-block;
    width: 100%;
    height: 500px;
  }
`

export const Image = styled.div`
  background-image: ${({background}) => `url(${background})`};
  background-position: center;
  background-size: cover;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: .75rem;

  ${({ theme }) => theme.mq.atDesktop`
    flex-direction: row;
    justify-content: space-between;

  `} 

  & > figcaption {
    ${({theme}) => theme.text.t2}
    color: var(--plum-dark);
    font-weight: 600;
    text-align: center;
    margin-top: .5rem;

    ${({ theme }) => theme.mq.atDesktop`
    text-align: end;
    white-space: nowrap;
    margin-top: 0;

  `} 
  }

  & > a {
    ${({theme}) => theme.text.bm}
    color: var(--plum-dark);
    text-decoration: underline;
    margin-top: 1.75rem;
    
    ${({ theme }) => theme.mq.atDesktop`
      text-align: end;
      white-space: nowrap;
      margin-top: 0;

    `} 
  }


`
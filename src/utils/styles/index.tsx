import styled from 'styled-components'
import type { PageProps } from './styleTypes';




export const InputField=styled.input`
font-family:'Inter';
outline:none;
border:none;
color:#fff;
font-size:18px;
width:100%;
box-sizing:border-box;
background-color:inherit;
padding:0;
margin: 4px 0;
`;

export const InputContainer=styled.div`
background-color:#131313;
padding:12px 16px;
border-radius:10px;
width:100%;
box-sizing:border-box;
`;

export const InputLabel=styled.label`
display:block;
color:#8f8f8f;
font-size:14px;
margin:4px 0
`;

export const Button = styled.button`
  width: 100%;
  color: #fff;
  background-color: #2b09ff;
  outline: none;
  border: none;
  font-family: 'Inter';
  font-size: 16px;
  border-radius: 10px;
  padding: 25px 0;
  font-weight: 500;
  transition: 250ms background-color ease, 250ms box-shadow ease;

  &:hover {
    background-color: rgba(57, 27, 252, 0.9);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(42, 9, 255, 0.3);  
  }
`;

export const Page=styled.div<PageProps>`
height:100%;
background-color: #1a1a1a;
display:${(props)=>props.display};
justify-content:${(props)=>props.justifyContent};
align-items:${(props)=>props.alignItems};
`
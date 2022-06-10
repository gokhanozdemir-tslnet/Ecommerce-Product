import styled from "styled-components";

export const Button = styled.button`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const BuyButton = styled(Button)`
  text-align: center;
  font-size: 24px;
  color: #fff;
  width: 100%;
  padding: 15px;
  border: 0px;
  outline: none;
  cursor: pointer;
  margin-top: 5px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: ${(props) => (props.backColor ? props.backColor : "white")};
`;

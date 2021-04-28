import styled from "styled-components";

export const InputMd = styled.input`
  width: ${props => (props.customWidth ? `${props.customWidth}px;` : "384px;")};
  height: 40px;
  background: ${props =>
    props.customBgColor
      ? `${props.customBgColor} 0% 0% no-repeat padding-box;`
      : " #f5f5f5 0% 0% no-repeat padding-box;"};
  border-radius: 10px;
  opacity: 1;
  text-align: center;
  font-size: 17px;
  font-family: Roboto;
  letter-spacing: 1.36px;
  color: #000;
  opacity: 1;
  outline: none;
  border: ${props => (props.isError ? "1px solid red" : "0px")};
  margin: ${props => (props.customMargin ? props.customMargin : "5px 0px")};

  ::-webkit-input-placeholder {
    /* Edge */
    color: #a8a8a8;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #a8a8a8;
  }

  ::placeholder {
    color: #a8a8a8;
  }
`;

export const InputSubmit = styled.input`
  height: 40px;
  min-width: ${props => (props.minWidth ? props.minWidth : "152px")};
  padding: 0px 15px 0px 15px;
  border: 0px;
  background: #c98c81 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 40px #00000033;
  border-radius: 10px;
  opacity: 1;
  font: Bold 15px/18px Roboto;
  letter-spacing: 1.2px;
  color: #171f32;
  outline: none;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  margin: ${props => (props.customMargin ? props.customMargin : " 0px;")};
`;
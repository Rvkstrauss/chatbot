import styled from 'styled-components';

const StyledChatInput = styled("form")`
  background-color: ${props => props.theme.secondaryLightColor};
  border-bottom-left-radius: 4px 14px;
  font-size: .9em;
  border-bottom-right-radius: 4px 14px;
  margin: 0;
  display: flex;
  margin: 0% 0% 0% 0%;
  width: 94%;
  padding: 2% 3% 2% 3%;
  min-height: 9%;
    .chat {
      font-size: 16px
      margin: 0;
      height: inherit;
      border-radius: 4px;
      width: inherit;
      border: 3px solid ${props => { 
        return props.theme.secondaryDarkColor}};
    }
    .send {
      height: inherit;
      margin: 0;
      border: none;
      align-items: center;
      display: flex;
      img {
        height: 20px;
        width: 20px;
      }
    }
  }
`;

export default StyledChatInput;
import styled from 'styled-components';

const StyledChatArea = styled("div")`
  background-color: ${props => props.theme.primaryLightColor};
  border-top-right-radius: 4px 0;
  border-top-left-radius: 4px 0;
  font-size: .9em;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px 0;
  clear: both;
  overflow: scroll;
  ul {
    padding: 17px;
  }
`;

export default StyledChatArea;
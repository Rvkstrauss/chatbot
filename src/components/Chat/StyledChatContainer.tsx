import styled from 'styled-components';

const StyledChatContainer = styled("div")`
  height: 100vh;
  color: ${(props: any) => props.theme.primaryDarkColor};
  background-color: ${(props: any) => props.theme.primaryLightColor};
  box-shadow: 0px 0px 3px 2px rgba(112,112,112,0.66);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

export default StyledChatContainer;
import React, {Component} from 'react';
// import BotProvider from './utils/userProvider'
import ChatPage from './components/Chat/ChatPage';
import { theme } from './theme';
import styled from 'styled-components';

class App extends Component {
  public render() {

    return (
      <StyledAppContainer theme={theme}>
        <ChatPage/>
      </StyledAppContainer>
    )
  }
}

export default App;


const StyledAppContainer = styled("div")`
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.secondaryDarkColor}
`;
import * as React from 'react';
import { readRecord } from './storage-service';
import { theme, ThemeProvider } from '../theme';

export interface IAppContext {
  
  username: string;
  messages: []
  // ctrlEnterOptionsTitle: string;
  // ctrlEnterSendingOptions: {
  //  option1: string;
  //  option2: string;
  // }
}

const context = React.createContext<IAppContext | any>(null);

const AppContextProvider = context.Provider;
export const AppContextConsumer = context.Consumer;

export default class UserProvider extends React.Component {
  public state = {
    username: readRecord('username') || 'guest',
    messages: []
  };

  public render() {

    return (
      <AppContextProvider value={{
        state: this.state,
        changeUsername: this.changeUsername
      }}>
        <ThemeProvider theme={theme}>
          {this.props.children as any}
        </ThemeProvider>
      </AppContextProvider>
    )
  }

  private changeUsername = (name: string) => {
    this.setState({
      username: name
    });
  };
}
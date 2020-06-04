import * as io from "socket.io-client";
import { IMessage } from "src/types";
import { readRecord } from "src/utils/storage-service";

const EVENTS = {
  CONNECT: "connect",
  DISCONNECT: "disconnect",
  MESSAGE: "message",
};

export default class Socket {
  public username: string;
  public port: string;
  private onChange: (isConnected: boolean) => void;
  private onMessage: (message: IMessage) => void;
  private socket: any;

  constructor(
    onChange: (isConnected: boolean) => void,
    onMessage: (message: IMessage) => void
  ) {
    this.onChange = onChange;
    this.onMessage = onMessage;
    this.socket = "";
    this.username = readRecord("username") || "guest";
    this.port = "";
  }

  public connect = (username: string, port: string) => {
    this.username = username;
    this.port = port;

    const host = `http://localhost:${3001}`; // Running from local network
    this.socket = io.connect(host);

    this.socket.on(EVENTS.CONNECT, this.onConnected);
  };

  public onConnected = () => {
    this.sendMessage({ from: this.username, content: this.username, type: "greet" });
    this.socket.on(EVENTS.MESSAGE, this.onMessage);
    this.onChange(true);
  };

  public sendMessage = (message: IMessage) => {
    try {
      if (typeof this.socket.emit === "function") {
        this.socket.emit(EVENTS.MESSAGE, message);
      } else {
        console.log("Cannot emit socket messages. Socket.io not connected.");
      }
    } catch (e) {
      console.log(e)
    }
  };

  public disconnect = () => this.socket.close();
}

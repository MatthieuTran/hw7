import socket from "./ws-client";
import { ChatForm, ChatList, promptForUsername } from "./dom";

const FORM_SELECTOR = '[data-chat="chat-form"]';
const INPUT_SELECTOR = '[data-chat="message-input"]';
const LIST_SELECTOR = '[data-chat="message-list"]';

let username = "";
username = promptForUsername();

class ChatApp {
  constructor() {
    this.chatForm = new ChatForm(FORM_SELECTOR, INPUT_SELECTOR);
    this.chatList = new ChatList(LIST_SELECTOR, username);

    socket.init("ws://localhost:3001");
    socket.registerOpenHandler(() => {
      this.chatForm.init((text) => {
        let message = new ChatMessage({ message: text });
        socket.sendMessage(message.serialize());
      });
    });

    socket.registerMessageHandler((datta) => {
      console.log(data);
      let message = new ChatMessage(data);
      this.chatList.drawMessage(message.serialize());
    });
  }
}

class ChatMessage {
  constructor({
    message: m,
    user: username,
    timestamp: t = new Date().getTime(),
  }) {
    this.message = m;
    this.user = u;
    this.timestamp = t;
  }
}

export default ChatApp;

import { useEffect, useRef } from 'react';
import { Widget, addResponseMessage, renderCustomComponent, toggleInputDisabled, addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import { io } from "socket.io-client";
import { InitForm } from './InitForm';
import { PhotoMessage } from './PhotoMessage';
import { FileMessage } from './FileMessage';
import { UploadMessage } from './UploadMessage';

import SocketIOFileUpload from 'socketio-file-upload';


const socket = io(process.env.REACT_APP_SOCKET_IO_URL, {
  transports: ['websocket'],
  upgrade: false ,
  rejectUnauthorized: false ,
});

// client-side
socket.on("connect", (s) => {});

socket.on('error', () => {});

socket.on('disconnect', () => {
  toggleInputDisabled()
});

socket.on('chat id message', (msg) => {
  window.localStorage.setItem('socketId', msg)
});

socket.on('chat message', function(msg){
    addResponseMessage(msg.msgText);
});

socket.on('photo message', function(msg){
    const src = msg.link;
    renderCustomComponent(PhotoMessage, {src});
});

socket.on('fileMeta message', function(msg){
    const href = msg.fileLink;
    if (msg.isPhoto) {
            renderCustomComponent(PhotoMessage, {src: href, alignRight: true});
    } else {
            renderCustomComponent(FileMessage, {href, alignRight: true});
    }
});

socket.on('file message', function(msg){
    const href = msg.fileLink;
    renderCustomComponent(FileMessage, {href});
});

socket.on('previous messages', function(msg){
    for (const message of msg) {
      if (message.msgFrom === 'client') {
        addUserMessage(message.msgText);
      } 
      if (message.msgTo === 'client') {
        addResponseMessage(message.msgText);
      }
      if (message.photoFrom === 'client') {
        renderCustomComponent(PhotoMessage, {src: message.photoLink, alignRight: true});
      }
      if (message.photoTo === 'client') {
        renderCustomComponent(PhotoMessage, {src: message.photoLink});
      }
      if (message.fileFrom === 'client') {
        renderCustomComponent(FileMessage, {href: message.fileLink, alignRight: true});
      }
      if (message.fileTo === 'client') {
        renderCustomComponent(FileMessage, {href: message.fileLink});
      }
    }
});


const fileUploads = [];

const uploader = new SocketIOFileUpload(socket);
uploader.listenOnInput(document.getElementById("livx-chat-siofu_input"));
uploader.addEventListener('progress', (p) => {
  const name = p.name, loaded = p.bytesLoaded / p.file.size;
  if (!fileUploads[name]) {
    renderCustomComponent(UploadMessage, {name, getLoaded: (n) => fileUploads[n], alignRight: true});
  }
  fileUploads[name] = loaded;
});

function App() {
  
  const isInitFormShown = useRef(true);

  const handleInitForm = ({name, email}) => {
      const initMessage = {type: "init", receiverChatId: window.livxChatId, chatCustomerName: name, chatCustomerPhone: email , location:window.location.href, captchaCode: "N/A"};
      socket.emit('init message', initMessage);
      window.localStorage.setItem('chatCustomerName', name);
      window.localStorage.setItem('chatCustomerPhone', email);
    };

  useEffect(() => {

    addResponseMessage('Welcome to chat!');
    renderCustomComponent(InitForm, {handleInitForm, isShown: isInitFormShown});
    toggleInputDisabled()

    const name = window.localStorage.getItem('chatCustomerName');
    const email = window.localStorage.getItem('chatCustomerPhone');
    const socketId = window.localStorage.getItem('socketId');

    if (name && email && socketId) {
      const initMessage = {socketId, type: "init", receiverChatId: window.livxChatId, chatCustomerName: name, chatCustomerPhone: email , location:window.location.href, captchaCode: "N/A"};
      socket.emit('init message', initMessage);
    }

    socket.on('ready message', (msg) => {
        setTimeout(toggleInputDisabled, 100)
        isInitFormShown.current = false;
    });

  }, []);
  
  const handleNewUserMessage = (newMessage) => {
    socket.emit('chat message', newMessage );
  };
  
  return (
    <div className="App">
    <Widget 
          handleNewUserMessage={handleNewUserMessage}  
          title="Live Chat"
          subtitle="Online Support"
          emojis={true} />
    </div>
  );
}

export default App;

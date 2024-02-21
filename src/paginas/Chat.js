import React from 'react';
import { useState } from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
const API_KEY = "";
// "Explícale cosas como lo harías con un niño de 10 años que aprende a codificar".
const Chat = () => {
    const [isTyping, setIsTyping] = useState(false);
  //para la escritura del mensaje  
  const [messages, setMessages] = useState([
    {
      message: "¡Hola, soy Jeff! ¡Pregúntame lo que sea!",
      sentTime: "En este momento",
      sender: "ChatGPT"
    }
  ]) //   [[[]]]


  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: 'outgoing'
    }

    const newMessages = [...messages, newMessage]; //aqui se lista los mensajes antiguos y lo recientes 

    //actualiza el estado de nuestros mensajes  
    setMessages(newMessages);

    //establece un indicador de escritura (ejemplo chat esta escribiendo ....)
    setIsTyping(true);

    //procesam los mensajes a chat gpt , para enviar y ver la respuesta 
    await processMessageToChatGPT(newMessages);

  }

  async function processMessageToChatGPT(chatMessages){
    // ChatMessages { remitente: "usuario" o "chatGPT", mensaje: "El contenido del mensaje aqui"}
    //La API espera objetos en el formato {rol: "usuario" o "asistente", "contenido": "El contenido del mensaje aqui"}

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message}
    });


    // rol: "usuario" --->un mensaje de usuario, "asistente" ---> una respuesta del chatGPT
    // "Sistema" --->Generalmente un mensaje inicial que define como deseamos que hable ChatGPT

    const systemMessage ={
      role: "system",
      content: "Explica como si tuviera 7 años y recien estuviera aprendiendo sobre computadoras y tu nombre es Jeff"  
      //Habla como un pirata, 
      //Explica como si fueras un inginiero de software con 10 años de expariencia
      //Explique las cosas como si estuviera hablando con un profesional de software con 2 años de experiencia.
      //Explica todos los conceptos como si tuvieras 10 años.
      //Explica como si tuviera 7 años y recien estuviera aprendiendo sobre computadoras

    }


    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,  // El mensaje del sistema DEFINE la lógica de nuestro chatGPT
        ...apiMessages // Los mensajes de nuestro chat con ChatGPT
      ]
    }


    await fetch("https://api.openai.com/v1/chat/completions", 
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      //console.log(data.choices[0].message.content);
      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "ChatGPT"
      }]);
      setIsTyping(false);
    });


  }


  return (
    <>
      <div className="App">
        <div style={{ position:"relative", height: "100%", width: "100%"  }}>
          <MainContainer>
            <ChatContainer>
              <MessageList
              typingIndicator={isTyping ? <TypingIndicator content="Tu Asesor está escribiendo" /> : null}
              >
                {messages.map((message, i) => {
                console.log(message)
                return <Message key={i} model={message} />
                })}

              </MessageList>
              <MessageInput placeholder="Escribe aquí tu pregunta..." onSend={handleSend} /> 
            </ChatContainer>
          </MainContainer>

        </div>
      </div>
      </>
    );
};

export default Chat;
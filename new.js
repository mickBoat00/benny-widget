(function () {
  const button = document.createElement('div');
  button.style.position = 'fixed';
  button.style.bottom = '20px';
  button.style.right = '20px';
  button.style.width = '50px';
  button.style.height = '50px';
  button.style.borderRadius = '50%';
  button.style.backgroundImage = 'url("./b5.png")';
  button.style.backgroundSize = 'cover';
  button.style.backgroundPosition = 'center';
  button.style.cursor = 'pointer';
  button.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
  button.style.zIndex = '9999';

  button.style.animation = 'bounce 0.9s infinite alternate ease-in-out';

  const keyframes = document.createElement('style');
  keyframes.innerHTML = `
    @keyframes bounce {
      0% {
        transform: translateY(0) scale(1);
      }
      100% {
        transform: translateY(-20px) scale(1.05);
      }
    }

    /* Media queries for responsive design */


    @media (max-width: 480px) {
      .chat-interface {
        width: 95% !important;
        right: 2.5% !important;
        left: 2.5% !important;
        height: 80vh !important;
        bottom: 80px !important;
      }
    }
  `;
  document.head.appendChild(keyframes);

  button.style.transition = 'box-shadow 0.3s ease-in-out';
  let glowing = false;
  let glowInterval;

  function startGlowEffect() {
    glowInterval = setInterval(() => {
      if (glowing) {
        button.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
      } else {
        button.style.boxShadow = '0 4px 20px rgba(175,89,0,255)';
      }
      glowing = !glowing;
    }, 1000);
  }

  startGlowEffect();


  const chatInterface = document.createElement('div');
  chatInterface.className = 'chat-interface';
  chatInterface.style.position = 'fixed';
  chatInterface.style.bottom = '90px';
  chatInterface.style.right = '20px';
  chatInterface.style.width = '420px';
  chatInterface.style.maxWidth = '100%';
  chatInterface.style.height = '80vh';
  chatInterface.style.backgroundColor = 'white';
  chatInterface.style.border = '1px solid #ccc';
  chatInterface.style.borderRadius = '8px';
  chatInterface.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
  chatInterface.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans"';
  chatInterface.style.display = 'none';
  chatInterface.style.zIndex = '9999';
  chatInterface.style.flexDirection = 'column';   
  chatInterface.style.overflow = 'hidden';

  const chatHeader = document.createElement('div');
  chatHeader.className = 'chat-header';
  chatHeader.style.display = 'flex';
  chatHeader.style.alignItems = 'center';
  chatHeader.style.padding = '4px';
  chatHeader.style.backgroundColor = '#112a52';
  chatHeader.style.color = 'white';
  chatHeader.style.borderBottom = '1px solid #f0f0f0';

  const headerCenter = document.createElement('div');
  headerCenter.className = 'header-center';
  headerCenter.style.flex = '8';
  headerCenter.style.display = 'flex';
  headerCenter.style.justifyContent = 'center';
  headerCenter.style.alignItems = 'center';
  headerCenter.style.gap = '8px';

  const title = document.createElement('h2');
  title.textContent = 'Ask Benny';
  title.style.fontSize = '18px';
  title.style.fontWeight = '600';
  title.style.margin = '0';
  title.style.padding = '8px 0';

  headerCenter.appendChild(title);

  const headerRight = document.createElement('div');
  headerRight.className = 'header-right';
  headerRight.style.flex = '1';
  headerRight.style.display = 'flex';
  headerRight.style.justifyContent = 'center';
  headerRight.style.alignItems = 'center';

  const closeButton = document.createElement('div');
  closeButton.className = 'close-button';
  closeButton.innerHTML = 'X';
  closeButton.style.fontSize = '20px';
  closeButton.style.fontWeight = '600';
  closeButton.style.width = '30px';
  closeButton.style.height = '30px';
  closeButton.style.borderRadius = '50%';
  closeButton.style.display = 'flex';
  closeButton.style.justifyContent = 'center';
  closeButton.style.alignItems = 'center';
  closeButton.style.cursor = 'pointer';
  closeButton.style.transition = 'background-color 0.2s, color 0.2s';

  closeButton.addEventListener('mouseover', () => {
    closeButton.style.backgroundColor = '#888';
    closeButton.style.color = 'white';
  });

  closeButton.addEventListener('mouseout', () => {
    closeButton.style.backgroundColor = 'transparent';
    closeButton.style.color = 'white';
  });

  headerRight.appendChild(closeButton);

  chatHeader.appendChild(headerCenter);
  chatHeader.appendChild(headerRight);

  const messagesArea = document.createElement('div');
  messagesArea.style.flex = '1';
  messagesArea.style.overflowY = 'auto';
  messagesArea.style.padding = '4px 10px';
  messagesArea.style.display = 'flex';
  messagesArea.style.flexDirection = 'column';
  messagesArea.style.backgroundImage = 'url("./chat-bg.svg")';
  messagesArea.style.backgroundSize = 'cover';
  messagesArea.style.backgroundPosition = 'center';
  messagesArea.style.gap = '10px';

  const welcomeContainer = document.createElement('div');
  welcomeContainer.style.display = 'flex';
  welcomeContainer.style.alignItems = 'center';
  welcomeContainer.style.gap = '1px';
  welcomeContainer.style.alignSelf = 'flex-start';
  welcomeContainer.style.padding = '8px';
  welcomeContainer.style.maxWidth = '100%';
  welcomeContainer.style.boxSizing = 'border-box';

  const avatarImage = document.createElement('img');
  avatarImage.src = './b5.png';
  avatarImage.alt = 'Assistant Avatar';
  avatarImage.style.width = '30px';
  avatarImage.style.height = '30px';
  avatarImage.style.borderRadius = '50%';
  avatarImage.style.objectFit = 'cover';
  avatarImage.style.flexShrink = '0';

  const welcomeMessage = document.createElement('div');
  welcomeMessage.style.padding = '8px 12px';
  welcomeMessage.style.borderRadius = '8px';
  welcomeMessage.style.color = '#1F2937';
  welcomeMessage.style.backgroundColor = 'white';
  welcomeMessage.style.maxWidth = 'calc(100% - 40px)';
  welcomeMessage.style.wordWrap = 'break-word';
  welcomeMessage.style.overflow = 'hidden';
  welcomeMessage.innerHTML = '<p style="margin: 0;">Hi there! How can I help you today?</p>';

  welcomeContainer.appendChild(avatarImage);
  welcomeContainer.appendChild(welcomeMessage);

  messagesArea.appendChild(welcomeContainer);

  const inputArea = document.createElement('div');
  inputArea.className = 'chat-input-container';
  inputArea.style.padding = '16px';
  inputArea.style.borderTop = '1px solid #f0f0f0';

  const inputWrapper = document.createElement('div');
  inputWrapper.className = 'input-wrapper';
  inputWrapper.style.display = 'flex';
  inputWrapper.style.border = '1px solid #ddd';
  inputWrapper.style.borderRadius = '8px';
  inputWrapper.style.overflow = 'hidden';

  const chatInput = document.createElement('input');
  chatInput.type = 'text';
  chatInput.id = 'chat-input';
  chatInput.placeholder = 'Ask a question';
  chatInput.style.flex = '1';
  chatInput.style.padding = '12px 16px';
  chatInput.style.border = 'none';
  chatInput.style.outline = 'none';
  chatInput.style.fontSize = '14px';
  chatInput.style.width = '100%';
  chatInput.style.boxSizing = 'border-box';

  const sendButton = document.createElement('button');
  sendButton.id = 'send-button';
  sendButton.style.backgroundColor = '#e6e6e6';
  sendButton.style.border = 'none';
  sendButton.style.padding = '0 16px';
  sendButton.style.cursor = 'pointer';
  sendButton.style.transition = 'background-color 0.2s';
  sendButton.style.whiteSpace = 'nowrap';

  sendButton.addEventListener('mouseover', () => {
  sendButton.style.backgroundColor = '#d9d9d9';
  });
  sendButton.addEventListener('mouseout', () => {
  sendButton.style.backgroundColor = '#e6e6e6';
  });

  const buttonIcon = document.createElement('span');
  buttonIcon.innerText = 'Send';
  sendButton.appendChild(buttonIcon);

  const disclaimer = document.createElement('div');
  disclaimer.className = 'disclaimer';
  disclaimer.style.textAlign = 'center';
  disclaimer.style.fontSize = '12px';
  disclaimer.style.color = '#666';
  disclaimer.style.marginTop = '12px';

  const disclaimerText = document.createTextNode('By chatting, you agree to this ');
  const disclaimerLink = document.createElement('a');
  disclaimerLink.href = '#';
  disclaimerLink.textContent = 'disclaimer';
  disclaimerLink.style.color = '#0066cc';
  disclaimerLink.style.textDecoration = 'none';
  const disclaimerEndText = document.createTextNode('.');

  disclaimer.appendChild(disclaimerText);
  disclaimer.appendChild(disclaimerLink);
  disclaimer.appendChild(disclaimerEndText);

  inputWrapper.appendChild(chatInput);
  inputWrapper.appendChild(sendButton);

  inputArea.appendChild(inputWrapper);
  inputArea.appendChild(disclaimer);

  function addMessage(text, isSender) {
    const messageDiv = document.createElement('div');
    messageDiv.style.alignSelf = isSender ? 'flex-end' : 'flex-start';
    messageDiv.style.backgroundColor = isSender ? '#d9d9d9' : '#f0f0f0';
    messageDiv.style.color = '#333';
    messageDiv.style.padding = '8px 12px';
    messageDiv.style.borderRadius = '8px 8px 0px 8px';
    messageDiv.style.maxWidth = '70%';
    messageDiv.style.wordWrap = 'break-word';
    messageDiv.style.boxSizing = 'border-box';
    messageDiv.innerText = text;
    messagesArea.appendChild(messageDiv);
    messagesArea.scrollTop = messagesArea.scrollHeight;
  }

  sendButton.addEventListener('click', () => {
    let text = chatInput.value.trim();

    if (text) {

      addMessage(text, true);
      chatInput.value = '';

      const responseDiv = document.createElement('div');
      responseDiv.style.display = 'flex';
      responseDiv.style.alignItems = 'flex-start'; 
      responseDiv.style.gap = '8px'; 
      responseDiv.style.alignSelf = 'flex-start';
      responseDiv.style.padding = '8px';
      responseDiv.style.boxSizing = 'border-box';
      responseDiv.style.width = '100%';

      const responseAvatar = document.createElement('img');
      responseAvatar.src = './b5.png';
      responseAvatar.alt = 'Benny Avatar';
      responseAvatar.style.width = '30px';
      responseAvatar.style.height = '30px';
      responseAvatar.style.borderRadius = '50%'; 
      responseAvatar.style.objectFit = 'cover';
      responseAvatar.style.marginTop = '16px';
      responseAvatar.style.flexShrink = '0';

      const responseMessage = document.createElement('div');
      responseMessage.style.padding = '8px 12px';
      responseMessage.style.borderRadius = '8px';
      responseMessage.style.backgroundColor = 'white';
      responseMessage.style.color = '#1F2937';
      responseMessage.style.maxWidth = 'calc(100% - 50px)';
      responseMessage.style.wordWrap = 'break-word';
      responseMessage.style.overflow = 'hidden';

      responseDiv.appendChild(responseAvatar);
      responseDiv.appendChild(responseMessage);
      messagesArea.appendChild(responseDiv);

      responseMessage.innerHTML = `<div><p>Typing...<p></div>`;

      const url = new URL('http://bennychat-env-staging-v3.eba-4x2h6mpd.us-east-1.elasticbeanstalk.com/get_chatbot_response/');
      url.searchParams.append('input_message', text);
      url.searchParams.append('module', 'general');


      fetch(url, {
        method: 'GET'
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        responseMessage.innerText = '';
        let receivedText = '';
        let messageId = null; 

        function readStream() {
          return reader.read().then(({ done, value }) => {
            if (done) {
              return;
            }
            
            const chunk = decoder.decode(value, { stream: true });
            receivedText += chunk;
          //   responseDiv.innerText += chunk;
            if (!messageId) {
              const idMatch = receivedText.match(/MESSAGE_ID:(\d+)/);
              if (idMatch) {
                  messageId = idMatch[1];
                  receivedText = receivedText.replace(/MESSAGE_ID:\d+\n/, "");
              }
            }

            responseMessage.innerHTML = receivedText;
            
            return readStream();
          });
        }
        
        return readStream();
      })

      .catch(error => {
        console.error('Error:', error);
        responseDiv.innerText = 'Sorry, there was an error connecting to the chat service.';
      });
    }
  });

  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendButton.click();
    }
  });

  // Assemble the chat interface
  chatInterface.appendChild(chatHeader);
  chatInterface.appendChild(messagesArea);
  chatInterface.appendChild(inputArea);

  button.addEventListener('click', () => {
    chatInterface.style.display = chatInterface.style.display === 'none' ? 'flex' : 'none';
    
    if (chatInterface.style.display === 'flex') {
      chatInput.focus();
      
      button.style.animation = 'none';
      clearInterval(glowInterval);
      button.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
      button.style.transform = 'translateY(0) scale(1)';
    } else {

      button.style.animation = 'bounce 1s infinite alternate ease-in-out';
      startGlowEffect();
    }
  });


  closeButton.addEventListener('click', () => {
    chatInterface.style.display = 'none';
    button.style.animation = 'bounce 1s infinite alternate ease-in-out';
    startGlowEffect();
  });


  window.addEventListener('resize', () => {
    if (window.innerWidth <= 480) {
      button.style.bottom = '10px';
      button.style.right = '10px';
    } else {
      button.style.bottom = '20px';
      button.style.right = '20px';
    }
  });


  if (window.innerWidth <= 480) {
    button.style.bottom = '10px';
    button.style.right = '10px';
  }


  document.body.appendChild(button);
  document.body.appendChild(chatInterface);
})();
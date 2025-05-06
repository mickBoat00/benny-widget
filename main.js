(function () {
    // Create button
    const button = document.createElement('div');
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.width = '60px';
    button.style.height = '60px';
    button.style.borderRadius = '50%';
    button.style.backgroundImage = 'url("./benny2.png")';
    button.style.backgroundSize = 'cover';
    button.style.backgroundPosition = 'center';
    button.style.cursor = 'pointer';
    button.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    button.style.zIndex = '9999';

  
    // Create chat interface
    const chatInterface = document.createElement('div');
    chatInterface.style.position = 'fixed';
    chatInterface.style.bottom = '90px';
    chatInterface.style.right = '20px';
    chatInterface.style.width = '400px';
    chatInterface.style.height = '500px';
    chatInterface.style.backgroundImage = 'url("./chat-bg.svg")';
    chatInterface.style.backgroundSize = 'cover';
    chatInterface.style.backgroundPosition = 'center';
    chatInterface.style.border = '1px solid #ccc';
    chatInterface.style.borderRadius = '8px';
    chatInterface.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    chatInterface.style.fontFamily = 'sans-serif';
    chatInterface.style.display = 'none';
    chatInterface.style.zIndex = '9999';
    chatInterface.style.flexDirection = 'column';
    chatInterface.style.overflow = 'hidden';
  
    // Create chat header
    const chatHeader = document.createElement('div');
    chatHeader.style.padding = '10px';
    chatHeader.style.backgroundColor = '#112a52';
    chatHeader.style.color = '#fff';
    chatHeader.style.display = 'flex';
    chatHeader.style.justifyContent = 'space-between';
    chatHeader.style.alignItems = 'center';
    chatHeader.style.borderTopLeftRadius = '8px';
    chatHeader.style.borderTopRightRadius = '8px';
  
    const headerTitle = document.createElement('div');
    headerTitle.innerText = 'Benny';
    headerTitle.style.fontWeight = 'bold';
  
    const closeButton = document.createElement('div');
    closeButton.innerText = '✕';
    closeButton.style.cursor = 'pointer';
    
    closeButton.addEventListener('click', (e) => {
      e.stopPropagation();
      chatInterface.style.display = 'none';
    });
  
    chatHeader.appendChild(headerTitle);
    chatHeader.appendChild(closeButton);
  
    // Create chat messages area
    const messagesArea = document.createElement('div');
    messagesArea.style.flex = '1';
    messagesArea.style.overflowY = 'auto';
    messagesArea.style.padding = '10px';
    messagesArea.style.display = 'flex';
    messagesArea.style.flexDirection = 'column';
    messagesArea.style.gap = '10px';
  
    // Add a welcome message
    const welcomeMessage = document.createElement('div');
    welcomeMessage.style.alignSelf = 'flex-start';
    welcomeMessage.style.backgroundColor = '#e7f3fe';
    welcomeMessage.style.padding = '8px 12px';
    welcomeMessage.style.borderRadius = '8px';
    welcomeMessage.style.maxWidth = '70%';
    welcomeMessage.style.color = '#1F2937';
    welcomeMessage.innerText = 'Hi there! How can I help you today?';
    messagesArea.appendChild(welcomeMessage);
  
    // Create input area
    const inputArea = document.createElement('div');
    inputArea.style.padding = '10px';
    inputArea.style.borderTop = '1px solid #eee';
    inputArea.style.display = 'flex';
    inputArea.style.gap = '10px';
  
    const textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.placeholder = 'What would you like to know?';
    textInput.style.flex = '1';
    textInput.style.padding = '8px';
    textInput.style.border = '1px solid #ddd';
    textInput.style.borderRadius = '20px';
    textInput.style.outline = 'none';
  
    const sendButton = document.createElement('button');
    sendButton.innerText = 'Send';
    sendButton.style.backgroundColor = '#007BFF';
    sendButton.style.color = '#fff';
    sendButton.style.border = 'none';
    sendButton.style.borderRadius = '20px';
    sendButton.style.padding = '8px 16px';
    sendButton.style.cursor = 'pointer';
  
    // Function to add messages
    function addMessage(text, isSender) {
      const messageDiv = document.createElement('div');
      messageDiv.style.alignSelf = isSender ? 'flex-end' : 'flex-start';
      messageDiv.style.backgroundColor = isSender ? '#AACFBE' : '#e7f3fe';
      messageDiv.style.color = '#1F2937';
      messageDiv.style.padding = '8px 12px';
      messageDiv.style.borderRadius = '8px';
      messageDiv.style.maxWidth = '70%';
      messageDiv.innerText = text;
      messagesArea.appendChild(messageDiv);
      messagesArea.scrollTop = messagesArea.scrollHeight;
    }
  
    // Event listeners
    sendButton.addEventListener('click', () => {
      const text = textInput.value.trim();
      if (text) {
        addMessage(text, true);
        textInput.value = '';
        
        // Create response message container but leave it empty
        const responseDiv = document.createElement('div');
        responseDiv.style.alignSelf = 'flex-start';
        responseDiv.style.backgroundColor = '#e7f3fe';
        responseDiv.style.color = '#1F2937';
        responseDiv.style.padding = '8px 12px';
        responseDiv.style.borderRadius = '8px';
        responseDiv.style.maxWidth = '70%';
        responseDiv.innerText = '';
        messagesArea.appendChild(responseDiv);
        
        // Show typing indicator
        responseDiv.innerText = 'Typing...';
        
        // Fetch streaming response from API
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
          responseDiv.innerText = '';
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

              responseDiv.innerHTML = receivedText;
              
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
  
    textInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendButton.click();
      }
    });
  
    // Assemble the chat interface
    inputArea.appendChild(textInput);
    inputArea.appendChild(sendButton);
  
    chatInterface.appendChild(chatHeader);
    chatInterface.appendChild(messagesArea);
    chatInterface.appendChild(inputArea);
  
    // Toggle chat interface on button click
    button.addEventListener('click', () => {
      chatInterface.style.display = chatInterface.style.display === 'none' ? 'flex' : 'none';
      if (chatInterface.style.display === 'flex') {
        textInput.focus();
      }
    });
  
    // Append to body
    document.body.appendChild(button);
    document.body.appendChild(chatInterface);
})();
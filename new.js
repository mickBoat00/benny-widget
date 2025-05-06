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
    chatInterface.style.width = '420px';
    chatInterface.style.height = '80vh';
    chatInterface.style.backgroundColor = 'white'
    chatInterface.style.border = '1px solid #ccc';
    chatInterface.style.borderRadius = '8px';
    chatInterface.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    chatInterface.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans"';
    chatInterface.style.display = 'none';
    chatInterface.style.zIndex = '9999';
    chatInterface.style.flexDirection = 'column';   
    chatInterface.style.overflow = 'hidden';
  
    // Create chat header
    const chatHeader = document.createElement('div');
    chatHeader.className = 'chat-header';
    chatHeader.style.display = 'flex';
    chatHeader.style.alignItems = 'center';
    chatHeader.style.padding = '4px';
    chatHeader.style.backgroundColor = '#112a52';
    chatHeader.style.color = 'white';
    chatHeader.style.borderBottom = '1px solid #f0f0f0';

    // Create header center section
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

    headerCenter.appendChild(title);

    const headerRight = document.createElement('div');
    headerRight.innerText = 'X'
    headerRight.fontSize = '20px'
    headerRight.style.fontWeight = '600';
    headerRight.className = 'header-right';
    headerRight.style.flex = '1';
    headerRight.style.cursor = 'pointer'

    

    // Create minus icon
    // const minusIcon = document.createElement('i');
    // minusIcon.className = 'fa-solid fa-minus';
    // headerRight.appendChild(minusIcon);

    chatHeader.appendChild(headerCenter);
    chatHeader.appendChild(headerRight);
    // const chatHeader = document.createElement('div');
    // chatHeader.style.display = 'flex';
    // chatHeader.style.alignItems = 'center';
    // chatHeader.style.padding = '16px';
    // chatHeader.style.backgroundColor = 'white';
    // chatHeader.style.borderBottom = '3px solid #112a52';
    // chatHeader.style.color = '#fff';
    // chatHeader.style.justifyContent = 'space-between';
    // chatHeader.style.borderTopLeftRadius = '8px';
    // chatHeader.style.borderTopRightRadius = '8px';
  
    // const headerTitle = document.createElement('div');
    // headerTitle.innerText = 'Benny';
    // headerTitle.style.fontWeight = 'bold';
  
    // const closeButton = document.createElement('div');
    // closeButton.innerText = '✕';
    // closeButton.style.cursor = 'pointer';
    
    // closeButton.addEventListener('click', (e) => {
    //   e.stopPropagation();
    //   chatInterface.style.display = 'none';
    // });
  
    // chatHeader.appendChild(headerTitle);
    // chatHeader.appendChild(closeButton);
  
    // Create chat messages area

    const messagesArea = document.createElement('div');
    messagesArea.style.flex = '1';
    messagesArea.style.overflowY = 'auto';
    messagesArea.style.padding = '4px 10px';
    messagesArea.style.display = 'flex';
    messagesArea.style.flexDirection = 'column';
    messagesArea.style.backgroundImage = 'url("./chat-bg.svg")';
    messagesArea.style.backgroundSize = 'cover';
    messagesArea.style.backgroundPosition = 'center';
    // messagesArea.style.backgroundColor = '#f9f9f9';

    messagesArea.style.gap = '10px';

    // Create the container for both image and message
    const welcomeContainer = document.createElement('div');
    welcomeContainer.style.display = 'flex';
    welcomeContainer.style.alignItems = 'center';
    welcomeContainer.style.gap = '1px';
    welcomeContainer.style.alignSelf = 'flex-start';
    welcomeContainer.style.padding = '8px';
    // welcomeContainer.style.maxWidth = '70%';

    // Create the avatar/image element
    const avatarImage = document.createElement('img');
    avatarImage.src = './benny2.png'; // Replace with your actual image source
    avatarImage.alt = 'Assistant Avatar';
    avatarImage.style.width = '30px';
    avatarImage.style.height = '30px';
    avatarImage.style.borderRadius = '50%'; // Makes the image rounded/circular
    avatarImage.style.objectFit = 'cover';

    // Create the welcome message text div
    const welcomeMessage = document.createElement('div');
    welcomeMessage.style.padding = '8px 12px';
    welcomeMessage.style.borderRadius = '8px';
    welcomeMessage.style.color = '#1F2937';
    welcomeMessage.style.backgroundColor = 'white'; // Uncommented this line
    welcomeMessage.innerHTML = '<p>Hi there! How can I help you today?</p>' ;

    // Assemble the container
    welcomeContainer.appendChild(avatarImage);
    welcomeContainer.appendChild(welcomeMessage);

    // Add the complete container to the messages area
    messagesArea.appendChild(welcomeContainer);
  
    // Add a welcome message
    // const welcomeMessage = document.createElement('div');
    // welcomeMessage.style.alignSelf = 'flex-start';
    // // welcomeMessage.style.backgroundColor = '#e7f3fe';
    // welcomeMessage.style.padding = '8px 12px';
    // welcomeMessage.style.borderRadius = '8px';
    // welcomeMessage.style.maxWidth = '70%';
    // welcomeMessage.style.color = '#1F2937';
    // welcomeMessage.innerText = 'Hi there! How can I help you today?';
    // messagesArea.appendChild(welcomeMessage);

    // Create the main input container
    const inputArea = document.createElement('div');
    inputArea.className = 'chat-input-container';
    inputArea.style.padding = '16px';
    inputArea.style.borderTop = '1px solid #f0f0f0';

    // Create the input wrapper
    const inputWrapper = document.createElement('div');
    inputWrapper.className = 'input-wrapper';
    inputWrapper.style.display = 'flex';
    inputWrapper.style.border = '1px solid #ddd';
    inputWrapper.style.borderRadius = '8px';
    inputWrapper.style.overflow = 'hidden';

    // Create the text input
    const chatInput = document.createElement('input');
    chatInput.type = 'text';
    chatInput.id = 'chat-input';
    chatInput.placeholder = 'Ask a question';
    chatInput.style.flex = '1';
    chatInput.style.padding = '12px 16px';
    chatInput.style.border = 'none';
    chatInput.style.outline = 'none';
    chatInput.style.fontSize = '14px';

    // Create the send button
    const sendButton = document.createElement('button');
    sendButton.id = 'send-button';
    sendButton.style.backgroundColor = '#e6e6e6';
    sendButton.style.border = 'none';
    sendButton.style.padding = '0 16px';
    sendButton.style.cursor = 'pointer';
    sendButton.style.transition = 'background-color 0.2s';

    // Add hover effect to the send button
    sendButton.addEventListener('mouseover', () => {
    sendButton.style.backgroundColor = '#d9d9d9';
    });
    sendButton.addEventListener('mouseout', () => {
    sendButton.style.backgroundColor = '#e6e6e6';
    });

    // Create the button icon
    const buttonIcon = document.createElement('span');
    buttonIcon.innerText = 'Send';
    sendButton.appendChild(buttonIcon);

    // const buttonIcon = document.createElement('i');
    // buttonIcon.className = 'fa-solid fa-arrow-right';
    // sendButton.appendChild(buttonIcon);

    // Create the disclaimer
    const disclaimer = document.createElement('div');
    disclaimer.className = 'disclaimer';
    disclaimer.style.textAlign = 'center';
    disclaimer.style.fontSize = '12px';
    disclaimer.style.color = '#666';
    disclaimer.style.marginTop = '12px';

    // Create the disclaimer text and link
    const disclaimerText = document.createTextNode('By chatting, you agree to this ');
    const disclaimerLink = document.createElement('a');
    disclaimerLink.href = '#';
    disclaimerLink.textContent = 'disclaimer';
    disclaimerLink.style.color = '#0066cc';
    disclaimerLink.style.textDecoration = 'none';
    const disclaimerEndText = document.createTextNode('.');

    // Assemble the disclaimer
    disclaimer.appendChild(disclaimerText);
    disclaimer.appendChild(disclaimerLink);
    disclaimer.appendChild(disclaimerEndText);

    // Assemble the input wrapper
    inputWrapper.appendChild(chatInput);
    inputWrapper.appendChild(sendButton);

    // // Assemble the main container
    inputArea.appendChild(inputWrapper);
    inputArea.appendChild(disclaimer);

  
    // Create input area
    // const inputArea = document.createElement('div');
    // inputArea.style.padding = '10px';
    // inputArea.style.borderTop = '1px solid #f0f0f0';
    // inputArea.style.display = 'flex';
    // inputArea.style.gap = '10px';
  
    // const textInput = document.createElement('input');
    // textInput.type = 'text';
    // textInput.placeholder = 'What would you like to know?';
    // textInput.style.flex = '1';
    // textInput.style.padding = '8px';
    // textInput.style.border = '1px solid #ddd';
    // textInput.style.borderRadius = '20px';
    // textInput.style.outline = 'none';
  
    // const sendButton = document.createElement('button');
    // sendButton.innerText = 'Send';
    // sendButton.style.backgroundColor = '#007BFF';
    // sendButton.style.color = '#fff';
    // sendButton.style.border = 'none';
    // sendButton.style.borderRadius = '20px';
    // sendButton.style.padding = '8px 16px';
    // sendButton.style.cursor = 'pointer';
  
    // Function to add messages
    function addMessage(text, isSender) {
      const messageDiv = document.createElement('div');
      messageDiv.style.alignSelf = isSender ? 'flex-end' : 'flex-start';
      messageDiv.style.backgroundColor = isSender ? '#d9d9d9' : '#f0f0f0';
      messageDiv.style.color = '#333';
      messageDiv.style.padding = '8px 12px';
      messageDiv.style.borderRadius = '8px 8px 0px 8px ';
      messageDiv.style.maxWidth = '70%';
      messageDiv.innerText = text;
      messagesArea.appendChild(messageDiv);
      messagesArea.scrollTop = messagesArea.scrollHeight;
    }
  
    // Event listeners
    sendButton.addEventListener('click', () => {
      let text = chatInput.value.trim();

      if (!text) text = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ?';

      if (text) {
        console.log(text)
        addMessage(text, true);
        chatInput.value = '';

        // Create response message container but leave it empty
        const responseDiv = document.createElement('div');
        responseDiv.style.display = 'flex';
        responseDiv.style.alignItems = 'flex-start'; 
        responseDiv.style.gap = '8px'; 
        responseDiv.style.alignSelf = 'flex-start';
        responseDiv.style.padding = '8px';

        const responseAvatar = document.createElement('img');
        responseAvatar.src = './benny2.png';
        responseAvatar.alt = 'Benny Avatar';
        responseAvatar.style.width = '30px';
        responseAvatar.style.height = '30px';
        responseAvatar.style.borderRadius = '50%'; 
        responseAvatar.style.objectFit = 'cover';
        responseAvatar.style.marginTop = '16px';

        const responseMessage = document.createElement('div');
        responseMessage.style.padding = '8px 12px';
        responseMessage.style.borderRadius = '8px';
        responseMessage.style.backgroundColor = 'white';
        responseMessage.style.color = '#1F2937';
        responseMessage.style.maxWidth = 'calc(100% - 50px)';

        responseDiv.appendChild(responseAvatar);
        responseDiv.appendChild(responseMessage);
        messagesArea.appendChild(responseDiv);

        // Show typing indicator
        responseMessage.innerText = 'Typing...';

        responseMessage.innerHTML = `<div>
            <p>Handshake is an online platform used by Morgan State University to facilitate career opportunities for students and alumni. It allows users to discover jobs and internships, while employers can connect with top talent. Here are some key features of Handshake as it relates to Morgan State University:</p>
            <ul>
            <li>Access to a large pool of students, with nearly 2,000 students logging in weekly.</li>
            <li>Employers can post job and internship opportunities, organize interviews, and review resumes.</li>
            <li>Students receive bi-monthly emails with a digest of available positions.</li>
            <li>Machine learning algorithms help students receive listings related to their areas of interest.</li>
            <li>Faculty and staff can use Handshake to view job postings, workshops, career fairs, and employer information to support students' career development.</li>
            </ul>
            <p>To get started, students and alumni can access Handshake through <a href="https://morgan.joinhandshake.com" target="_blank">this link</a>.</p>
        </div>`;
        // const responseDiv = document.createElement('div');
        // responseDiv.style.display = 'flex';
        // responseDiv.style.alignItems = 'flex-start';
        // responseDiv.style.gap = '10px';
        // responseDiv.style.alignSelf = 'flex-start';
        // responseDiv.style.padding = '8px';

        // const responseAvatar = document.createElement('img');
        // responseAvatar.src = './benny2.png'; // Replace with your actual image source
        // responseAvatar.alt = 'Benny Avatar';
        // responseAvatar.style.width = '30px';
        // responseAvatar.style.height = '30px';
        // responseAvatar.style.borderRadius = '50%'; // Makes the image rounded/circular
        // responseAvatar.style.objectFit = 'cover'
        // responseAvatar.style.alignSelf = 'flex-start'

        // const reponseMessage = document.createElement('div');
        // reponseMessage.style.backgroundColor = 'white';
        // reponseMessage.style.padding = '8px 12px';
        // // reponseMessage.style.border = '1px solid black';
        // reponseMessage.style.borderRadius = '0px 18px 18px 18px ';
        // reponseMessage.style.color = '#1F2937';
        // reponseMessage.innerText = '';
        // // reponseMessage.style.backgroundColor = '#e7f3fe'; // Uncommented this line
        // // reponseMessage.innerHTML =


        // // responseDiv.style.alignSelf = 'flex-start';
        // // responseDiv.style.backgroundColor = '#e7f3fe';
        // // responseDiv.style.color = '#1F2937';
        // // responseDiv.style.padding = '8px 12px';
        // // responseDiv.style.borderRadius = '8px';
        // // responseDiv.style.maxWidth = '70%';
        // // responseDiv.innerText = '';
        // responseDiv.appendChild(responseAvatar)
        // responseDiv.appendChild(reponseMessage)
        // messagesArea.appendChild(responseDiv);
        
        // // Show typing indicator
        // reponseMessage.innerText = 'Typing...';
        
        // reponseMessage.innerHTML = `<div>
        // <p>Handshake is an online platform used by Morgan State University to facilitate career opportunities for students and alumni. It allows users to discover jobs and internships, while employers can connect with top talent. Here are some key features of Handshake as it relates to Morgan State University:</p>
        // <ul>
        // <li>Access to a large pool of students, with nearly 2,000 students logging in weekly.</li>
        // <li>Employers can post job and internship opportunities, organize interviews, and review resumes.</li>
        // <li>Students receive bi-monthly emails with a digest of available positions.</li>
        // <li>Machine learning algorithms help students receive listings related to their areas of interest.</li>
        // <li>Faculty and staff can use Handshake to view job postings, workshops, career fairs, and employer information to support students' career development.</li>
        // </ul>
        // <p>To get started, students and alumni can access Handshake through <a href="https://morgan.joinhandshake.com" target="_blank">this link</a>.</p>
        // </div>`;
    //     // Fetch streaming response from API
    //     const url = new URL('http://bennychat-env-staging-v3.eba-4x2h6mpd.us-east-1.elasticbeanstalk.com/get_chatbot_response/');
    //     url.searchParams.append('input_message', text);
    //     url.searchParams.append('module', 'general');
        
    //     fetch(url, {
    //       method: 'GET'
    //     })
    //     .then(response => {
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //       }
          
    //       const reader = response.body.getReader();
    //       const decoder = new TextDecoder();
    //       responseDiv.innerText = '';
    //       let receivedText = '';
    //       let messageId = null; 
          
          
    //       function readStream() {
    //         return reader.read().then(({ done, value }) => {
    //           if (done) {
    //             return;
    //           }
              
    //           const chunk = decoder.decode(value, { stream: true });
    //           receivedText += chunk;
    //         //   responseDiv.innerText += chunk;
    //           if (!messageId) {
    //             const idMatch = receivedText.match(/MESSAGE_ID:(\d+)/);
    //             if (idMatch) {
    //                 messageId = idMatch[1];
    //                 receivedText = receivedText.replace(/MESSAGE_ID:\d+\n/, "");
    //             }
    //           }

    //           responseDiv.innerHTML = receivedText;
              
    //           return readStream();
    //         });
    //       }
          
    //       return readStream();
    //     })
    //     .catch(error => {
    //       console.error('Error:', error);
    //       responseDiv.innerText = 'Sorry, there was an error connecting to the chat service.';
    //     });
      }
    });
  
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendButton.click();
      }
    });
  
    // Assemble the chat interface
    // inputArea.appendChild(textInput);
    // inputArea.appendChild(sendButton);
  
    chatInterface.appendChild(chatHeader);
    chatInterface.appendChild(messagesArea);
    chatInterface.appendChild(inputArea);
  
    // Toggle chat interface on button click
    button.addEventListener('click', () => {
      chatInterface.style.display = chatInterface.style.display === 'none' ? 'flex' : 'none';
      if (chatInterface.style.display === 'flex') {
        chatInput.focus();
      }
    });
  
    // Append to body
    document.body.appendChild(button);
    document.body.appendChild(chatInterface);
})();
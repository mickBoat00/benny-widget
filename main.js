(function () {
    // Create button
    const button = document.createElement('div');
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.width = '60px';
    button.style.height = '60px';
    button.style.borderRadius = '50%';
    button.style.backgroundColor = '#007BFF';
    button.style.color = '#fff';
    button.style.display = 'flex';
    button.style.alignItems = 'center';
    button.style.justifyContent = 'center';
    button.style.cursor = 'pointer';
    button.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    button.style.zIndex = '9999';
    button.innerText = '💬';
  
    // Create quote popup
    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.bottom = '90px';
    popup.style.right = '20px';
    popup.style.maxWidth = '250px';
    popup.style.padding = '15px';
    popup.style.background = '#f9f9f9';
    popup.style.border = '1px solid #ccc';
    popup.style.borderRadius = '8px';
    popup.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    popup.style.fontFamily = 'sans-serif';
    popup.style.display = 'none';
    popup.style.zIndex = '9999';
  
    const quote = document.createElement('p');
    quote.innerText = '“The best way to get started is to quit talking and begin doing.” – Walt Disney';
    quote.style.margin = '0';
    quote.style.fontStyle = 'italic';
  
    popup.appendChild(quote);
  
    // Toggle popup on click
    button.addEventListener('click', () => {
      popup.style.display = popup.style.display === 'none' ? 'block' : 'none';
    });
  
    // Append to body
    document.body.appendChild(button);
    document.body.appendChild(popup);
  })();
  
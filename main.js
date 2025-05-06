(function() {
    // Create a container
    const container = document.createElement('div');
    container.style.border = '1px solid #ccc';
    container.style.padding = '10px';
    container.style.fontFamily = 'sans-serif';
    container.style.maxWidth = '300px';
    container.style.margin = '10px auto';
    container.style.background = '#f9f9f9';
  
    // Add a quote
    const quote = document.createElement('p');
    quote.innerText = "“The best way to get started is to quit talking and begin doing.” – Walt Disney";
    quote.style.fontStyle = 'italic';
  
    container.appendChild(quote);
  
    // Inject it into the page
    document.currentScript.parentNode.insertBefore(container, document.currentScript);
  })();
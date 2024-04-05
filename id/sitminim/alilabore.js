// In the sending context (e.g., main page)
client.postMessage({ type: 'greeting', text: 'Hello from the main page!' }, '*');

// In the receiving context (e.g., iframe or worker)
self.addEventListener('message', event => {
  if (event.data.type === 'greeting') {
    console.log('Received message:', event.data.text);
  }
});

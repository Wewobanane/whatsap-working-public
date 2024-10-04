const chatList = document.getElementById("chat-list");
      const chatWindow = document.getElementById("chat-window");
      const chatName = document.getElementById("chat-name");
      const chatMessages = document.getElementById("chat-messages");
      const messageInput = document.getElementById("message-input");
      const sendButton = document.getElementById("send-button");

      const chats = [
        { name: "Alice", lastMessage: "Hey, how are you?" },
        { name: "Bob", lastMessage: "Can we meet tomorrow?" },
        { name: "Charlie", lastMessage: "Did you see the news?" },
        { name: "David", lastMessage: "Thanks for your help!" },
        { name: "A", lastMessage: "Hey, how are you?" },
        { name: "Bob", lastMessage: "Can we meet tomorrow?" },
        { name: "Charlie", lastMessage: "Did you see the news?" },
        { name: "David", lastMessage: "Thanks for your help!" },
        { name: "Alice", lastMessage: "Hey, how are you?" },
        { name: "Bob", lastMessage: "Can we meet tomorrow?" },
        { name: "Charlie", lastMessage: "Did you see the news?" },
        { name: "David", lastMessage: "Thanks for your help!" },
        { name: "Alice", lastMessage: "Hey, how are you?" },
        { name: "Bob", lastMessage: "Can we meet tomorrow?" },
        { name: "Charlie", lastMessage: "Did you see the news?" },
        { name: "David", lastMessage: "Thanks for your help!" },
        { name: "Alice", lastMessage: "Hey, how are you?" },
        { name: "Bob", lastMessage: "Can we meet tomorrow?" },
        { name: "Charlie", lastMessage: "Did you see the news?" },
        { name: "David", lastMessage: "Thanks for your help!" },
        { name: "A", lastMessage: "Hey, how are you?" },
        { name: "Bob", lastMessage: "Can we meet tomorrow?" },
        { name: "Charlie", lastMessage: "Did you see the news?" },
        { name: "David", lastMessage: "Thanks for your help!" },
        { name: "Alice", lastMessage: "Hey, how are you?" },
        { name: "Bob", lastMessage: "Can we meet tomorrow?" },
        { name: "Charlie", lastMessage: "Did you see the news?" },
        { name: "David", lastMessage: "Thanks for your help!" },
        { name: "Alice", lastMessage: "Hey, how are you?" },
        { name: "Bob", lastMessage: "Can we meet tomorrow?" },
        { name: "Charlie", lastMessage: "Did you see the news?" },
        { name: "David", lastMessage: "Thanks for your help!" },
        { name: "Alice", lastMessage: "Hey, how are you?" },
        { name: "Bob", lastMessage: "Can we meet tomorrow?" },
        { name: "Charlie", lastMessage: "Did you see the news?" },
        { name: "David", lastMessage: "Thanks for your help!" },
        { name: "A", lastMessage: "Hey, how are you?" },
        { name: "Bob", lastMessage: "Can we meet tomorrow?" },
        { name: "Charlie", lastMessage: "Did you see the news?" },
        { name: "David", lastMessage: "Thanks for your help!" },
        { name: "Alice", lastMessage: "Hey, how are you?" },
        { name: "Bob", lastMessage: "Can we meet tomorrow?" },
        { name: "Charlie", lastMessage: "Did you see the news?" },
        { name: "David", lastMessage: "Thanks for your help!" },
        { name: "Alice", lastMessage: "Hey, how are you?" },
        { name: "Bob", lastMessage: "Can we meet tomorrow?" },
        { name: "Charlie", lastMessage: "Did you see the news?" },
        { name: "David", lastMessage: "Thanks for your help!" },
        { name: "Alice", lastMessage: "Hey, how are you?" },
        { name: "Bob", lastMessage: "Can we meet tomorrow?" },
        { name: "Charlie", lastMessage: "Did you see the news?" },
        { name: "David", lastMessage: "Thanks for your help!" },
        { name: "A", lastMessage: "Hey, how are you?" },
        { name: "Bob", lastMessage: "Can we meet tomorrow?" },
        { name: "Charlie", lastMessage: "Did you see the news?" },
        { name: "David", lastMessage: "Thanks for your help!" },
        { name: "Alice", lastMessage: "Hey, how are you?" },
        { name: "Bob", lastMessage: "Can we meet tomorrow?" },
        { name: "Charlie", lastMessage: "Did you see the news?" },
        { name: "David", lastMessage: "Thanks for your help!" },
        { name: "Alice", lastMessage: "Hey, how are you?" },
        { name: "Bob", lastMessage: "Can we meet tomorrow?" },
        { name: "Charlie", lastMessage: "Did you see the news?" },
        { name: "David", lastMessage: "Thanks for your help!" },
        { name: "Alice", lastMessage: "Hey, how are you?" },
        { name: "Bob", lastMessage: "Can we meet tomorrow?" },
        { name: "Charlie", lastMessage: "Did you see the news?" },
        { name: "David", lastMessage: "Thanks for your help!" },
        { name: "A", lastMessage: "Hey, how are you?" },
        { name: "Bob", lastMessage: "Can we meet tomorrow?" },
        { name: "Charlie", lastMessage: "Did you see the news?" },
        { name: "David", lastMessage: "Thanks for your help!" },
        { name: "Alice", lastMessage: "Hey, how are you?" },
        { name: "Bob", lastMessage: "Can we meet tomorrow?" },
        { name: "Charlie", lastMessage: "Did you see the news?" },
        { name: "David", lastMessage: "Thanks for your help!" },
        { name: "Alice", lastMessage: "Hey, how are you?" },
        { name: "Bob", lastMessage: "Can we meet tomorrow?" },
        { name: "Charlie", lastMessage: "Did you see the news?" },
        { name: "David", lastMessage: "Thanks for your help!" },
      ];

      chats.forEach((chat) => {
        const chatItem = document.createElement("div");
        chatItem.classList.add("chat-item");
        chatItem.innerHTML = `
                <div class="chat-avatar"></div>
                <div class="chat-details">
                    <div class="chat-name">${chat.name}</div>
                    <div class="chat-last-message">${chat.lastMessage}</div>
                </div>
            `;
        chatItem.addEventListener("click", () => {
          openChat(chat.name);
        });
        chatList.appendChild(chatItem);
      });

      function openChat(name) {
        chatName.textContent = name;
        chatWindow.style.display = "flex";
        chatMessages.innerHTML = "";
        addMessage(`Welcome to your chat with ${name}!`, false);
        addMessage("This is a demo message.", true);
      }

      function closeChat() {
        chatWindow.style.display = "none";
      }

      function addMessage(message, isSent) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.classList.add(isSent ? "sent" : "received");
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }

      function sendMessage() {
        const message = messageInput.value.trim();
        if (message) {
          addMessage(message, true);
          messageInput.value = "";

          // Simulate received message after a short delay
          setTimeout(() => {
            addMessage(
              `This is a demo reply from ${chatName.textContent}!`,
              false
            );
          }, 1000);
        }
      }

      sendButton.addEventListener("click", sendMessage);
      messageInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          sendMessage();
        }
      });
      function showSection(sectionId) {
        // Hide all sections
        const sections = document.querySelectorAll(".section");
        sections.forEach((section) => {
          section.style.display = "none";
        });

        // Show the selected section
        document.getElementById(sectionId).style.display = "block";
      }
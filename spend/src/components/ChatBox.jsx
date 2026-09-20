import { useState } from "react";

function ChatBox({ totalExpense, remainingSavings, transactionCount }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! Ask me about your spending." },
  ]);

  const reply = (text) => {
    const q = text.toLowerCase();

    if (q.includes("expense") || q.includes("spent")) {
      return `Your total expense is ₹${totalExpense}.`;
    }
    if (q.includes("saving") || q.includes("remaining")) {
      return `Your remaining savings are ₹${remainingSavings}.`;
    }
    if (q.includes("transaction")) {
      return `You have ${transactionCount} transaction(s).`;
    }
    if (q.includes("hello") || q.includes("hi")) {
      return "Hey! I can show your expenses, savings and transactions.";
    }

    return "Try asking: total expense, remaining savings, or transactions.";
  };

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;

    setMessages((prev) => [
      ...prev,
      { from: "user", text },
      { from: "bot", text: reply(text) },
    ]);
    setInput("");
  };

  return (
    <div className="chat-widget">
      {open && (
        <div className="chat-box">
          <div className="chat-header">
            <span>💬 Spend Chat</span>
            <button onClick={() => setOpen(false)}>×</button>
          </div>

          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`chat-message ${message.from}`}>
                {message.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask something..."
            />
            <button onClick={sendMessage}>➤</button>
          </div>
        </div>
      )}

      {!open && (
        <button className="chat-toggle" onClick={() => setOpen(true)}>
          💬
        </button>
      )}
    </div>
  );
}

export default ChatBox;

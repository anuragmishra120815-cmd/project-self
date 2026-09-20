import { useState } from "react";

function ChatBox({ totalExpense, remainingSavings, transactionCount }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! I'm your SpendAI assistant 🤖 Ask me about your spending or savings.",
    },
  ]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    setMessages((prev) => [...prev, { from: "user", text }]);
    setInput("");
    setLoading(true);

    const financialContext = `
Current financial information:
- Total expense: ₹${totalExpense}
- Remaining savings: ₹${remainingSavings}
- Total transactions: ${transactionCount}

User's question:
${text}

Give a short, practical and easy-to-understand response based on the user's financial information. If the user asks for a tip, make it specific to these numbers.
`;

    try {
      const response = await fetch("http://localhost:5000/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: financialContext,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.answer || "Something went wrong");
      }

      setMessages((prev) => [
        ...prev,
        { from: "bot", text: data.answer || "I couldn't generate a response." },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "❌ Could not connect to SpendAI backend. Make sure the server is running on port 5000.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-widget">
      {open && (
        <div className="chat-box">
          <div className="chat-header">
            <span>🤖 SpendAI Chat</span>
            <button onClick={() => setOpen(false)}>×</button>
          </div>

          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`chat-message ${message.from}`}>
                {message.text}
              </div>
            ))}

            {loading && (
              <div className="chat-message bot">Thinking... 🤔</div>
            )}
          </div>

          <div className="chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask about your spending..."
            />
            <button onClick={sendMessage} disabled={loading}>
              ➤
            </button>
          </div>
        </div>
      )}

      {!open && (
        <button className="chat-toggle" onClick={() => setOpen(true)}>
          🤖
        </button>
      )}
    </div>
  );
}

export default ChatBox;

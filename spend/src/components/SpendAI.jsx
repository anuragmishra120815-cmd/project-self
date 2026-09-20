import { useState } from "react";

function SpendAI({ totalExpense, remainingSavings, transactionCount, expenses = [] }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim() || loading) return;

    setLoading(true);
    setAnswer("");

    const context = `
You are SpendAI, a personal financial assistant.

User financial data:
- Total expense: ₹${totalExpense}
- Remaining savings: ₹${remainingSavings}
- Total transactions: ${transactionCount}
- Expense history: ${JSON.stringify(expenses)}

User question:
${question}

Give a short, practical and personalized answer. Use the provided data and do not invent transactions or amounts.
`;

    try {
      const response = await fetch("http://localhost:5000/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: context }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.answer || "Something went wrong");
      }

      setAnswer(data.answer || "No answer received.");
    } catch (error) {
      setAnswer("❌ Could not connect to SpendAI backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="analytics-card spend-ai-card">
      <h2>🤖 SpendAI</h2>
      <p>Your personal AI financial assistant</p>

      <div className="spend-ai-row">
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && askAI()}
          placeholder="Ask about your spending..."
        />
        <button onClick={askAI} disabled={loading}>
          {loading ? "Thinking..." : "Ask SpendAI"}
        </button>
      </div>

      {answer && <p className="spend-ai-answer">💰 {answer}</p>}
    </div>
  );
}

export default SpendAI;

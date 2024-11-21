import React, { useState, useEffect } from "react";

const QuotesFetcher = () => {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);
  const category = "inspirational";
  const apiKey = "YOUR_API_KEY"; // Replace with your actual API key

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/quotes?category=${category}`,
          {
            headers: { "X-Api-Key": apiKey },
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        setQuote(data[0]); 
      } catch (err) {
        setError(err.message);
      }
    };

    fetchQuote();
  }, [category, apiKey]);

  return (
    <div>
      <h1>Quote of the Day</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {quote ? (
        <div className="">
          <p>
            <strong>{quote.quote}</strong>
          </p>
          <p>- {quote.author}</p>
        </div>
      ) : (
        !error && <p>Loading...</p>
      )}
    </div>
  );
};

export default QuotesFetcher;

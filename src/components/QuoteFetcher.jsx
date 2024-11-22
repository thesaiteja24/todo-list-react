import React, { useState, useEffect } from "react";

const QuotesFetcher = () => {
  // Static values for testing styles
  const staticQuote = {
    quote:
      "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  };

  const [quote, setQuote] = useState(staticQuote);
  const [error, setError] = useState(null);
  const category = "inspirational";
  const apiKey = "YOUR_API_KEY"; // Replace with your actual API key

  // Commented out API call
  /*
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
        setQuote(data[0]); // Assuming the API returns an array of quotes
      } catch (err) {
        setError(err.message);
      }
    };

    fetchQuote();
  }, [category, apiKey]);
  */

  return (
    <div className="md:mt-12">
      <h1 className="text-center font-bold text-xl mb-2">Quote of the Day</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {quote ? (
        <div>
          <p className="my-8 text-center mx-2">
            <strong className="tangerine-regular text-4xl p">
              "{quote.quote}"
            </strong>
          </p>
          <p className="font-mono text-center">- {quote.author}</p>
        </div>
      ) : (
        !error && <p>Loading...</p>
      )}
    </div>
  );
};

export default QuotesFetcher;

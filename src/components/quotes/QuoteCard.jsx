import React, { useState, useEffect } from "react";
import DailyQuote from "../../utilities/quoteUtils";

const QuoteCard = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        setLoading(true);
        const fetchedQuote = await DailyQuote();
        setQuote(fetchedQuote);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (error) {
    return (
      <div className="md:mt-12">
        <h1 className="text-center font-bold text-xl mb-2">Quote of the Day</h1>
        <p className="text-center text-red-600">Failed to load quote</p>
      </div>
    );
  }

  return (
    <div className="md:mt-8">
      <h1 className="text-center font-bold text-xl mb-2">Quote of the Day</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="p-2">
          <p className="my-8 text-center mx-2">
            <strong className="tangerine-regular text-4xl">
              "{quote.quote}"
            </strong>
          </p>
          <p className="font-mono text-center">- {quote.author}</p>
        </div>
      )}
    </div>
  );
};

export default QuoteCard;

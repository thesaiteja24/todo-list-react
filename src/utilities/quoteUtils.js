import axios from "axios";

const staticQuote = {
  quote:
    "The only limit to our realization of tomorrow is our doubts of today.",
  author: "Franklin D. Roosevelt",
};

async function DailyQuote() {
  const apiKey = import.meta.env.VITE_QUOTE_API;

  try {
    // Check localStorage
    const cachedQuote = localStorage.getItem("dailyQuote");
    const lastUpdated = localStorage.getItem("lastUpdated");
    const currentDate = new Date().toISOString().split("T")[0];

    if (cachedQuote && lastUpdated === currentDate) {
      return JSON.parse(cachedQuote);
    }

    // Fetch new quote
    const response = await axios.get("https://api.api-ninjas.com/v1/quotes", {
      headers: { "X-Api-Key": apiKey },
    });

    // axios automatically throws for non-200 responses, and data is in response.data
    const newQuote = response.data[0];

    // Cache the new quote
    localStorage.setItem("dailyQuote", JSON.stringify(newQuote));
    localStorage.setItem("lastUpdated", currentDate);

    return newQuote;
  } catch (error) {
    console.error("Failed to fetch quote:", error);
    return staticQuote;
  }
}

export default DailyQuote;

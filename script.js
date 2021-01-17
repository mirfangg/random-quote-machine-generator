const QUOTESOURCE = [
    {
        author: "Nelson Mandela",
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall"
    },
    {
        author: "Walt Disney",
        quote: "The way to get started is to quit talking and begin doing"
    },
    {
        author: "James Cameron",
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success"
    },
    {
        author: "Kevin Kruse",
        quote: "Life isn’t about getting and having, it’s about giving and being."

    },
    {
        author: "Napoleon Hill",
        quote: "Whatever the mind of man can conceive and believe, it can achieve."

    },
    {
        author: "Albert Einstein",
        quote: "Strive not to be a success, but rather to be of value."

    },
    {
        author: "Robert Frost",
        quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference."

    },
    {
        author: "Florence Nightingale",
        quote: "I attribute my success to this: I never gave or took any excuse."

    }
]

window.onload = init;

function init() {
    generateQuote();
}

// Generate Quote
function generateQuote() {
    let quoteSize = QUOTESOURCE.length;
    let randomIndex = Math.floor(Math.random() * quoteSize);
    let randomQuoteData = QUOTESOURCE[randomIndex];

    let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22Winning%20isn%E2%80%99t%20everything%2C%20but%20wanting%20to%20win%20is.%22%20Vince%20Lombardi";

    // Add the Quote
    let quoteInApiFormat = randomQuoteData.quote.replace(/ /g, "%20");
    twitterLink += quoteInApiFormat;

    // Add the Author
    let authorInApiFormat = randomQuoteData.author.replace(/ /g, "%20");
    twitterLink += authorInApiFormat;

    document.getElementById("tweet-quote").href = twitterLink;
    document.getElementById("text").innerText = randomQuoteData.quote;
    document.getElementById("author").innerText = randomQuoteData.author;
}
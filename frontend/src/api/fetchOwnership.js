// Mocked ownership data fetcher

export async function fetchOwnership(ticker) {
    // Simulate a small delay like an actual network request
    await new Promise(resolve => setTimeout(resolve, 500));
  
    // Optional: log for debug
    console.log("Fetching ownership data for:", ticker);
  
    // Return demo data — you can replace with real API integration later
    return [
      { owner: "BlackRock", shares: 12500000, percent: 7.21 },
      { owner: "Vanguard", shares: 9500000, percent: 5.48 },
      { owner: "State Street", shares: 6300000, percent: 3.65 },
      { owner: "Retail Investors", shares: 22000000, percent: 12.71 }
    ];
  }
  
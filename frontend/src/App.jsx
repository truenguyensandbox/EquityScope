import { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CompanyTable from './components/CompanyTable';
import ErrorBoundary from './components/ErrorBoundary';  // <-- Add this import

function App() {
  const [ticker, setTicker] = useState("AAPL");

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-linen text-gray-900 font-sans">
        <Header />
        <main className="p-6 space-y-8 max-w-6xl mx-auto">
          <SearchBar onSearch={setTicker} />
          <CompanyTable ticker={ticker} />
        </main>
        <footer className="mt-16 text-center text-xs text-gray-400 pb-6">
          💖 Demo data shown for portfolio use.{" "}
          <span className="italic">"Stealing source code since '98" for fun and learning.</span>
        </footer>
      </div>
    </ErrorBoundary>
  );
}

export default App;

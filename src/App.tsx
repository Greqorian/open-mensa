import React from 'react';
import './App.scss';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import LandingPage from './components/LandingPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  return (
    <div className="App">
        <QueryClientProvider client={queryClient}>
       <LandingPage />
     </QueryClientProvider>
    </div>
  );
}

export default App;

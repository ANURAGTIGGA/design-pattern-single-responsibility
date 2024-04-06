
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import Products from './pages/Products'

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Products></Products>
    </QueryClientProvider>
  )
}

export default App

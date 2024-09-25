import './App.css'
import AppRouter from  '@/navigation/Routes'
import { CookiesProvider } from 'react-cookie';
import { Toaster } from './components/ui/toaster';

function App() {

  return (
    <>
      <CookiesProvider defaultSetOptions={{ path: '/' }}>
          <AppRouter/>
          <Toaster/>
      </CookiesProvider>
    </>
  )
}

export default App

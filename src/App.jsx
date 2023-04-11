
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './api/router'
import AuthProvider from './context/AuthProvider'
const queryClient = new QueryClient()

function App() {

  return (
  

    <QueryClientProvider client={queryClient}>
 <AuthProvider>

   <div className='max-w-[1440px] mx-auto'>
      < RouterProvider router={router}>
    </RouterProvider>
  </div>

 </AuthProvider>
</QueryClientProvider>

  )
}

export default App

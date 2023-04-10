import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './api/router'
import AuthProvider from './context/AuthProvider'

function App() {

  return (
 <AuthProvider>
   <div className='max-w-[1440px] mx-auto'>
      < RouterProvider router={router}>
    </RouterProvider>
  </div>
 </AuthProvider>
  )
}

export default App

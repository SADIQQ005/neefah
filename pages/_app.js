import { AuthProvider } from '../contexts/AuthContext'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp

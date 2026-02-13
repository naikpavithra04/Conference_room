import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";
import { BookingProvider } from "./context/BookingContext";

function App() {
  return (
    <AuthProvider>
      <BookingProvider>
        <Navbar />
        <AppRoutes />
      </BookingProvider>
    </AuthProvider>
  );
}

export default App;

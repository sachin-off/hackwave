import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import FashionSearchPage from "./pages/fashion-search";
import AboutPage from "./pages/about";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/fashion-search" element={
            <ProtectedRoute>
              <FashionSearchPage />
            </ProtectedRoute>
          } />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

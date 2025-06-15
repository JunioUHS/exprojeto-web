import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "sonner";
import { AuthProvider } from "./providers/AuthProvider";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Login } from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Rota raiz redireciona para dashboard se logado, senão para login */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />

            {/* Rota de login */}
            <Route path="/login" element={<Login />} />

            {/* Rota protegida do dashboard */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* Rota 404 - redireciona para dashboard */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>

          {/* Toast notifications */}
          <Toaster
            position="bottom-right"
            richColors
            closeButton
            duration={5000}
          />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

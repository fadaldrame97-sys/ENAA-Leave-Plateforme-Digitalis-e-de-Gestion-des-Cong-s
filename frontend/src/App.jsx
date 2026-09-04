import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import NewRequestPage from "./pages/NewRequestPage";

function App() {
  const [user, setUser] = useState(null);
  const [showNewRequest, setShowNewRequest] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  if (!user) {
    return <LoginPage onLoginSuccess={setUser} />;
  }

  if (showNewRequest) {
    return <NewRequestPage onBack={() => setShowNewRequest(false)} />;
  }

  return (
    <DashboardPage
      user={user}
      onLogout={handleLogout}
      onNewRequest={() => setShowNewRequest(true)}
    />
  );
}

export default App;
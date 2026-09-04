import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import NewRequestPage from "./pages/NewRequestPage";
import ApprovalsPage from "./pages/ApprovalsPage";

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("dashboard");

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setPage("dashboard");
  };

  if (!user) {
    return <LoginPage onLoginSuccess={setUser} />;
  }

  if (page === "newRequest") {
    return <NewRequestPage onBack={() => setPage("dashboard")} />;
  }

  if (page === "approvals") {
    return <ApprovalsPage onBack={() => setPage("dashboard")} />;
  }

  return (
    <DashboardPage
      user={user}
      onLogout={handleLogout}
      onNewRequest={() => setPage("newRequest")}
      onApprovals={() => setPage("approvals")}
    />
  );
}

export default App;
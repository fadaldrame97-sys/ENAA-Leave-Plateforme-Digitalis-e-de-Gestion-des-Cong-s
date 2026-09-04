import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import NewRequestPage from "./pages/NewRequestPage";
import ApprovalsPage from "./pages/ApprovalsPage";
import ApprovalsHRPage from "./pages/ApprovalsHRPage";

function App() {
  var userState = useState(null);
  var user = userState[0];
  var setUser = userState[1];

  var pageState = useState("dashboard");
  var page = pageState[0];
  var setPage = pageState[1];

  function handleLogout() {
    localStorage.removeItem("token");
    setUser(null);
    setPage("dashboard");
  }

  function goToNewRequest() {
    setPage("newRequest");
  }

  function goToApprovals() {
    setPage("approvals");
  }

  function goToApprovalsHR() {
    setPage("approvalsHR");
  }

  function goToDashboard() {
    setPage("dashboard");
  }

  if (user === null) {
    return <LoginPage onLoginSuccess={setUser} />;
  }

  if (page === "newRequest") {
    return <NewRequestPage onBack={goToDashboard} />;
  }

  if (page === "approvals") {
    return <ApprovalsPage onBack={goToDashboard} />;
  }

  if (page === "approvalsHR") {
    return <ApprovalsHRPage onBack={goToDashboard} />;
  }

  return (
    <DashboardPage
      user={user}
      onLogout={handleLogout}
      onNewRequest={goToNewRequest}
      onApprovals={goToApprovals}
      onApprovalsHR={goToApprovalsHR}
    />
  );
}

export default App;
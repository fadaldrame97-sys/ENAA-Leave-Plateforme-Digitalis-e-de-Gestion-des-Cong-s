export default function DashboardPage(props) {
  var user = props.user;
  var onLogout = props.onLogout;
  var onNewRequest = props.onNewRequest;
  var onMyRequests = props.onMyRequests;
  var onApprovals = props.onApprovals;
  var onApprovalsHR = props.onApprovalsHR;

  var afficherBoutonManager = false;
  if (user.role === "manager") {
    afficherBoutonManager = true;
  }

  var afficherBoutonRH = false;
  if (user.role === "rh") {
    afficherBoutonRH = true;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-sm w-full max-w-sm space-y-3">
        <h1 className="text-lg font-semibold">Bienvenue, {user.name}</h1>
        <p className="text-sm text-gray-600">Email : {user.email}</p>
        <p className="text-sm text-gray-600">Rôle : {user.role}</p>

        <button
          onClick={onNewRequest}
          className="w-full bg-green-700 text-white rounded-lg py-2 text-sm font-medium hover:opacity-90"
        >
          Nouvelle demande de congé
        </button>

        <button
          onClick={onMyRequests}
          className="w-full bg-gray-700 text-white rounded-lg py-2 text-sm font-medium hover:opacity-90"
        >
          Mes demandes
        </button>

        {afficherBoutonManager === true && (
          <button
            onClick={onApprovals}
            className="w-full bg-blue-700 text-white rounded-lg py-2 text-sm font-medium hover:opacity-90"
          >
            Demandes à valider (Manager)
          </button>
        )}

        {afficherBoutonRH === true && (
          <button
            onClick={onApprovalsHR}
            className="w-full bg-purple-700 text-white rounded-lg py-2 text-sm font-medium hover:opacity-90"
          >
            Demandes à valider (RH)
          </button>
        )}

        <button
          onClick={onLogout}
          className="w-full bg-gray-100 text-gray-700 rounded-lg py-2 px-4 text-sm hover:bg-gray-200"
        >
          Déconnexion
        </button>
      </div>
    </div>
  );
}
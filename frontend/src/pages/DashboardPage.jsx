export default function DashboardPage({ user, onLogout, onNewRequest }) {
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
          onClick={onLogout}
          className="w-full bg-gray-100 text-gray-700 rounded-lg py-2 px-4 text-sm hover:bg-gray-200"
        >
          Déconnexion
        </button>
      </div>
    </div>
  );
}
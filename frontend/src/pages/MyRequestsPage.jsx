import { useState, useEffect } from "react";
import { leaveService } from "../services/api";

export default function MyRequestsPage(props) {
  var onBack = props.onBack;

  var demandesState = useState([]);
  var demandes = demandesState[0];
  var setDemandes = demandesState[1];

  var loadingState = useState(true);
  var loading = loadingState[0];
  var setLoading = loadingState[1];

  useEffect(function () {
    leaveService.getMyRequests().then(function (res) {
      setDemandes(res.data);
      setLoading(false);
    });
  }, []);

  function texteStatut(statut) {
    if (statut === "pendingManager") {
      return "En attente du manager";
    }
    if (statut === "pendingHR") {
      return "En attente RH";
    }
    if (statut === "approved") {
      return "Approuvée";
    }
    if (statut === "rejected") {
      return "Refusée";
    }
    return statut;
  }

  function couleurStatut(statut) {
    if (statut === "approved") {
      return "text-green-700";
    }
    if (statut === "rejected") {
      return "text-red-700";
    }
    return "text-orange-600";
  }

  function renderDemande(demande) {
    return (
      <div key={demande.id} className="bg-white p-4 rounded-xl shadow-sm space-y-1">
        <p className="text-sm text-gray-600">
          Du {demande.date_debut.slice(0, 10)} au {demande.date_fin.slice(0, 10)}
        </p>
        <p className="text-sm text-gray-600">Motif : {demande.motif}</p>
        <p className={"text-sm font-medium " + couleurStatut(demande.statut)}>
          {texteStatut(demande.statut)}
        </p>
      </div>
    );
  }

  var listeDemandes = [];
  for (var i = 0; i < demandes.length; i++) {
    listeDemandes.push(renderDemande(demandes[i]));
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-lg mx-auto space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold text-green-700">Mes demandes</h1>
          <button onClick={onBack} className="text-sm text-gray-500 hover:text-gray-700">
            Retour
          </button>
        </div>

        {loading === true && <p className="text-sm text-gray-500">Chargement...</p>}

        {loading === false && demandes.length === 0 && (
          <p className="text-sm text-gray-500">Aucune demande pour le moment.</p>
        )}

        {loading === false && demandes.length > 0 && (
          <div className="space-y-3">{listeDemandes}</div>
        )}
      </div>
    </div>
  );
}
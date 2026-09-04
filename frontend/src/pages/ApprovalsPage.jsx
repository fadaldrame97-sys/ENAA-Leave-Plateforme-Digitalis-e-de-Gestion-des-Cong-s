import { useState, useEffect } from "react";
import { leaveService } from "../services/api";

export default function ApprovalsPage(props) {
  var onBack = props.onBack;

  var demandesState = useState([]);
  var demandes = demandesState[0];
  var setDemandes = demandesState[1];

  var loadingState = useState(true);
  var loading = loadingState[0];
  var setLoading = loadingState[1];

  function chargerDemandes() {
    setLoading(true);
    leaveService.getPendingManager().then(function (res) {
      setDemandes(res.data);
      setLoading(false);
    });
  }

  useEffect(function () {
    chargerDemandes();
  }, []);

  function handleApprove(id) {
    leaveService.approve(id).then(function () {
      chargerDemandes();
    });
  }

  function handleReject(id) {
    leaveService.reject(id).then(function () {
      chargerDemandes();
    });
  }

  function renderDemande(demande) {
    function onClickRefuser() {
      handleReject(demande.id);
    }

    function onClickApprouver() {
      handleApprove(demande.id);
    }

    return (
      <div key={demande.id} className="bg-white p-4 rounded-xl shadow-sm space-y-2">
        <p className="text-sm font-medium">{demande.utilisateur.name}</p>
        <p className="text-sm text-gray-600">
          Du {demande.date_debut.slice(0, 10)} au {demande.date_fin.slice(0, 10)}
        </p>
        <p className="text-sm text-gray-600">Motif : {demande.motif}</p>
        <div className="flex gap-2 pt-2">
          <button
            onClick={onClickRefuser}
            className="flex-1 bg-gray-100 text-gray-700 rounded-lg py-2 text-sm hover:bg-gray-200"
          >
            Refuser
          </button>
          <button
            onClick={onClickApprouver}
            className="flex-1 bg-green-700 text-white rounded-lg py-2 text-sm hover:opacity-90"
          >
            Approuver
          </button>
        </div>
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
          <h1 className="text-lg font-semibold text-green-700">Demandes en attente</h1>
          <button onClick={onBack} className="text-sm text-gray-500 hover:text-gray-700">
            Retour
          </button>
        </div>

        {loading === true && <p className="text-sm text-gray-500">Chargement...</p>}

        {loading === false && demandes.length === 0 && (
          <p className="text-sm text-gray-500">Aucune demande en attente.</p>
        )}

        {loading === false && demandes.length > 0 && (
          <div className="space-y-3">{listeDemandes}</div>
        )}
      </div>
    </div>
  );
}
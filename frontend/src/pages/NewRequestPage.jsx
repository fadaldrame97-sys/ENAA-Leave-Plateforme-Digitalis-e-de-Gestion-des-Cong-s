import { useState } from "react";
import { leaveService } from "../services/api";

export default function NewRequestPage({ onBack }) {
  const [dateDebut, setDateDebut] = useState("");
  const [dateFin, setDateFin] = useState("");
  const [typeJournee, setTypeJournee] = useState("journee_entiere");
  const [motif, setMotif] = useState("");

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await leaveService.createRequest({
        type_conge_id: 1,
        date_debut: dateDebut,
        date_fin: dateFin,
        type_journee: typeJournee,
        motif: motif,
      });
      setSuccess(true);
    } catch (err) {
      setError("Erreur lors de la soumission.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-sm w-full max-w-sm text-center space-y-4">
          <p className="text-green-700 text-sm">
            Demande soumise avec succès. En attente de validation du manager.
          </p>
          <button
            onClick={onBack}
            className="bg-gray-100 text-gray-700 rounded-lg py-2 px-4 text-sm hover:bg-gray-200"
          >
            Retour au tableau de bord
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-sm w-full max-w-sm space-y-4"
      >
        <h1 className="text-lg font-semibold text-green-700">
          Nouvelle demande de congé
        </h1>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Début</label>
            <input
              type="date"
              value={dateDebut}
              onChange={(e) => setDateDebut(e.target.value)}
              required
              className="w-full border rounded-lg px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Fin</label>
            <input
              type="date"
              value={dateFin}
              onChange={(e) => setDateFin(e.target.value)}
              required
              className="w-full border rounded-lg px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Type</label>
          <select
            value={typeJournee}
            onChange={(e) => setTypeJournee(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 text-sm"
          >
            <option value="journee_entiere">Journée entière</option>
            <option value="demi_journee">Demi-journée</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Motif</label>
          <textarea
            value={motif}
            onChange={(e) => setMotif(e.target.value)}
            rows={3}
            className="w-full border rounded-lg px-3 py-2 text-sm"
          />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <div className="flex gap-2">
          <button
            type="button"
            onClick={onBack}
            className="flex-1 bg-gray-100 text-gray-700 rounded-lg py-2 text-sm hover:bg-gray-200"
          >
            Annuler
          </button>
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-green-700 text-white rounded-lg py-2 text-sm font-medium hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Envoi..." : "Soumettre"}
          </button>
        </div>
      </form>
    </div>
  );
}
<?php

namespace App\Services;

use App\Models\DemandeConge;
use App\Models\User;

class WorkflowEngineService
{
    
    public function creerDemande(User $utilisateur, array $donnees): DemandeConge
    {
        return DemandeConge::create([
            'utilisateur_id' => $utilisateur->id,
            'type_conge_id' => $donnees['type_conge_id'],
            'date_debut' => $donnees['date_debut'],
            'date_fin' => $donnees['date_fin'],
            'type_journee' => $donnees['type_journee'],
            'motif' => $donnees['motif'] ?? null,
            'statut' => 'pendingManager',
            'date_creation' => now(),
        ]);
    }
 }
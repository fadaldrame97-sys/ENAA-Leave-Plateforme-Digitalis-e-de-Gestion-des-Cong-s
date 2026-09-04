<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDemandeCongeRequest;
use App\Models\DemandeConge;
use App\Services\WorkflowEngineService;
use Illuminate\Http\Request;

class DemandeCongeController extends Controller
{
    public function __construct(protected WorkflowEngineService $workflow){
    }

  
    public function store(StoreDemandeCongeRequest $request){
        $demande = $this->workflow->creerDemande($request->user(), $request->validated());

        return response()->json($demande, 201);
    }

    public function mesRequetes(Request $request){
        $demandes = DemandeConge::where('utilisateur_id', $request->user()->id)
            ->with('typeConge')
            ->orderBy('date_creation', 'desc')
            ->get();

        return response()->json($demandes);
    }


     public function enAttenteManager(){

        $demandes = DemandeConge::where('statut', 'pendingManager')
            ->with('utilisateur', 'typeConge')
            ->get();

        return response()->json($demandes);
    }

     public function enAttenteRH(){
        $demandes = DemandeConge::where('statut', 'pendingHR')
            ->with('utilisateur', 'typeConge')
            ->get();

        return response()->json($demandes);
    }

     public function approuver(DemandeConge $demandeConge, Request $request)
    {
        if ($demandeConge->statut === 'pendingManager') {
            $this->workflow->approuverParManager($demandeConge);
        } elseif ($demandeConge->statut === 'pendingHR') {
            $this->workflow->approuverParRH($demandeConge);
        }

        return response()->json($demandeConge->fresh());
    }

}
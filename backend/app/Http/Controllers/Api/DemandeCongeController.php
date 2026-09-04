<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDemandeCongeRequest;
use App\Models\DemandeConge;
use App\Services\WorkflowEngineService;
use Illuminate\Http\Request;

class DemandeCongeController extends Controller
{
    public function __construct(protected WorkflowEngineService $workflow)
    {
    }

  
    public function store(StoreDemandeCongeRequest $request)
    {
        $demande = $this->workflow->creerDemande($request->user(), $request->validated());

        return response()->json($demande, 201);
    }
}
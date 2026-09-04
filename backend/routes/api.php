<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\DemandeCongeController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::post('/demandes-conge', [DemandeCongeController::class, 'store']);
    Route::get('/demandes-conge/me', [DemandeCongeController::class, 'mesRequetes']);
    Route::get('/demandes-conge/pending-manager', [DemandeCongeController::class, 'enAttenteManager']);
    Route::get('/demandes-conge/pending-hr', [DemandeCongeController::class, 'enAttenteRH']);
    Route::post('/demandes-conge/{demandeConge}/approve', [DemandeCongeController::class, 'approuver']);
    Route::post('/demandes-conge/{demandeConge}/reject', [DemandeCongeController::class, 'refuser']);
});
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PlanRemplacement extends Model
{
    use HasFactory;

    protected $table = 'plans_remplacement';

    protected $fillable = [
        'demande_conge_id',
        'utilisateur_id',
        'nom_propose',
        'date_rattrapage',
        'module_concerne',
        'statut',
    ];

    protected function casts(): array
    {
        return [
            'date_rattrapage' => 'date',
        ];
    }

    public function demandeConge()
    {
        return $this->belongsTo(DemandeConge::class, 'demande_conge_id');
    }

    public function utilisateur()
    {
        return $this->belongsTo(User::class, 'utilisateur_id');
    }
}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DemandeConge extends Model
{
    use HasFactory;

    protected $table = 'demandes_conge';

    protected $fillable = [
        'utilisateur_id',
        'type_conge_id',
        'date_debut',
        'date_fin',
        'type_journee',
        'motif',
        'statut',
        'date_creation',
    ];

    protected function casts(): array
    {
        return [
            'date_debut' => 'date',
            'date_fin' => 'date',
            'date_creation' => 'datetime',
        ];
    }

    public function utilisateur()
    {
        return $this->belongsTo(User::class, 'utilisateur_id');
    }

    public function typeConge()
    {
        return $this->belongsTo(TypeConge::class, 'type_conge_id');
    }

    public function justifications()
    {
        return $this->hasMany(Justification::class, 'demande_conge_id');
    }

    public function planRemplacement()
    {
        return $this->hasOne(PlanRemplacement::class, 'demande_conge_id');
    }

    public function notifications()
    {
        return $this->hasMany(Notification::class, 'demande_conge_id');
    }
}
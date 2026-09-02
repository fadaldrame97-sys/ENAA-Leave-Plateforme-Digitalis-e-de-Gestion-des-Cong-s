<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SoldeConge extends Model
{
    use HasFactory;

    protected $fillable = [
        'utilisateur_id',
        'type_conge_id',
        'solde_acquis',
        'solde_pris',
        'annee',
    ];

    public function utilisateur()
    {
        return $this->belongsTo(User::class, 'utilisateur_id');
    }

    public function typeConge()
    {
        return $this->belongsTo(TypeConge::class, 'type_conge_id');
    }
}
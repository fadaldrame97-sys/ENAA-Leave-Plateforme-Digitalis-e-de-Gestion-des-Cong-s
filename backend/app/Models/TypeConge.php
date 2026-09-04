<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypeConge extends Model
{
    use HasFactory;

    protected $table = 'types_conge';

    protected $fillable = ['nom', 'jour_reste_par_mois', 'necessite_justificatif'];

    protected function casts(): array
    {
        return [
            'necessite_justificatif' => 'boolean',
        ];
    }

    public function demandesConge()
    {
        return $this->hasMany(DemandeConge::class, 'type_conge_id');
    }

    public function soldesConge()
    {
        return $this->hasMany(SoldeConge::class, 'type_conge_id');
    }
}
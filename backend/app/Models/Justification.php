<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Justification extends Model
{
    use HasFactory;

    protected $fillable = [
        'demande_conge_id',
        'chemin_fichier',
        'type_fichier',
        'date_upload',
    ];

    protected function casts(): array
    {
        return [
            'date_upload' => 'datetime',
        ];
    }

    public function demandeConge()
    {
        return $this->belongsTo(DemandeConge::class, 'demande_conge_id');
    }
}
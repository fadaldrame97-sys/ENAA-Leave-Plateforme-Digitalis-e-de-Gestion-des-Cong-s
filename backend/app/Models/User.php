<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'prenom',
        'email',
        'password',
        'role',
        'active',
        'departement_id',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'active' => 'boolean',
        ];
    }

    // Relations
    public function departement()
    {
        return $this->belongsTo(Departement::class);
    }

    public function demandesConge()
    {
        return $this->hasMany(DemandeConge::class, 'utilisateur_id');
    }

    public function soldesConge()
    {
        return $this->hasMany(SoldeConge::class, 'utilisateur_id');
    }

    public function notifications()
    {
        return $this->hasMany(Notification::class, 'utilisateur_id');
    }

    public function plansRemplacement()
    {
        return $this->hasMany(PlanRemplacement::class, 'utilisateur_id');
    }
}
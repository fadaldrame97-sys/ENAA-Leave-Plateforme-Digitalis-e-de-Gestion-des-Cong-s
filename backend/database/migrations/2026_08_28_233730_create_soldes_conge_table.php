<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('soldes_conge', function (Blueprint $table) {
            $table->id();
            $table->foreignId('utilisateur_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('type_conge_id')->constrained('types_conge');
            $table->float('solde_acquis')->default(0);
            $table->float('solde_pris')->default(0);
            $table->unsignedSmallInteger('annee');
            $table->timestamps();

            $table->unique(['utilisateur_id', 'type_conge_id', 'annee']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('soldes_conge');
    }
};
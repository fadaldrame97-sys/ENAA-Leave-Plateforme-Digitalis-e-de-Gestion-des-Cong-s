<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('demandes_conge', function (Blueprint $table) {
            $table->id();
            $table->foreignId('utilisateur_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('type_conge_id')->constrained('types_conge');
            $table->date('date_debut');
            $table->date('date_fin');
            $table->enum('type_journee', ['demi_journee', 'journee_entiere'])
                ->default('journee_entiere');
            $table->text('motif')->nullable();
            $table->enum('statut', ['pendingManager', 'pendingHR', 'approved', 'rejected'])
                ->default('pendingManager');
            $table->timestamp('date_creation')->useCurrent();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('demandes_conge');
    }
};
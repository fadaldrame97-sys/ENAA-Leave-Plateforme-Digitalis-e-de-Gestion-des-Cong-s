<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('justifications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('demande_conge_id')
                ->constrained('demandes_conge')
                ->cascadeOnDelete();
            $table->string('chemin_fichier');
            $table->string('type_fichier');
            $table->timestamp('date_upload')->useCurrent();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('justifications');
    }
};
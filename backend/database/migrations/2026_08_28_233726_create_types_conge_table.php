<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('types_conge', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->float('jour_reste_par_mois')->default(0);
            $table->boolean('necessite_justificatif')->default(false);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('types_conge');
    }
};
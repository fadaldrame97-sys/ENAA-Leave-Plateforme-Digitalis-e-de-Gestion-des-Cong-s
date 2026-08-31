<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('notifications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('utilisateur_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('demande_conge_id')
                ->nullable()
                ->constrained('demandes_conge')
                ->cascadeOnDelete();
            $table->string('message');
            $table->string('type')->nullable();
            $table->boolean('lu')->default(false);
            $table->timestamp('date_envoi')->useCurrent();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('notifications');
    }
};
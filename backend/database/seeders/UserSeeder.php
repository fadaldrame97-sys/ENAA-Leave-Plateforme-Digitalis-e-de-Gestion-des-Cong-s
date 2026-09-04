<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'name' => 'Babacar',
            'email' => 'babacar@gmail.com',
            'password' => Hash::make('password'),
            'role' => 'employe',
        ]);

        User::create([
            'name' => 'Mamadou',
            'email' => 'mamadou@gmail.com',
            'password' => Hash::make('password'),
            'role' => 'manager',
        ]);

        User::create([
            'name' => 'Fallou Dramé',
            'email' => 'drame@gmail.com',
            'password' => Hash::make('password'),
            'role' => 'rh',
        ]);

        User::create([
            'name' => 'Coumba',
            'email' => 'sy@gmail.com',
            'password' => Hash::make('password'),
            'role' => 'formateur',
        ]);

        User::create([
            'name' => 'Fadal Dramé',
            'email' => 'fadal@gmail.com',
            'password' => Hash::make('password'),
            'role' => 'admin',
        ]);
    }
}
<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Services\AuthService;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function __construct(protected AuthService $authService)
    {
    }

    
    public function login(LoginRequest $request)
    {
        $result = $this->authService->login(
            $request->email,
            $request->password
        );

        if (!$result['success']) {
            return response()->json(['message' => $result['message']], 401);
        }

        return response()->json([
            'user' => $result['user'],
            'token' => $result['token'],
        ]);
    }

   
    public function logout(Request $request) {
        $this->authService->logout($request->user());

        return response()->json(['message' => 'Déconnecté avec succès.']);
    }

     }

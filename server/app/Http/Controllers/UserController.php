<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class UserController extends Controller
{
    public function register(Request $request)
    {

        $fields = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string|min:8|regex:/^(?=.*[a-z])(?=.*[A-Z])/|confirmed'
        ]);

        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password'])
        ]);

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response()->json(['message' => 'User created'], 200);
    }

    public function getUserByToken(Request $request)
    {
        $token = $request->input('token');
        $user = User::where('api_token', $token)->first();

        if ($user) {
            // User found
            return response()->json($user);
        } else {
            // Invalid token or user not found
            return response()->json(['error' => 'Utente non trovato'], 404);
        }
    }

    public function logout(Request $request)
    {
        //the token must be deleted when logging out
        auth()->user()->tokens()->delete();

        return [
            'message' => 'Logged out'
        ];
    }


    public function login(Request $request)
{
    $fields = $request->validate([
        'email' => 'required|string',
        'password' => 'required|string'
    ]);

    // I extract the user with the entered email
    $user = User::where('email', $fields['email'])->first();

    // I check if the user exists and then if the password entered and the one in the database match
    if ($user && Hash::check($fields['password'], $user->password)) {
        // I check if the user wants to be remembered and set the token expiration accordingly
        $remember = $request->input('remember', false); // If not provided, it defaults to false
        $token = $user->createToken('myapptoken', ['remember' => $remember])->plainTextToken;
        Auth::login($user, $remember);

        // I add the value of "remember" to the response array
        $response = [
            'user' => $user,
            'token' => $token,
            'message' => 'logged in',
            'remember' => $remember,
        ];

        return response($response);
    } else {
        return response([
            'message' => 'Wrong credentials'
        ], 401);
    }
}

}

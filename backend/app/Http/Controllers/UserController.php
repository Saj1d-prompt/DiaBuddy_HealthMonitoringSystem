<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    function getUserInfo(Request $request)
    {
        $users = User::select('id', 'name', 'email', 'role', 'created_at')
            ->where('role', '!=', 'admin')
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json([
            'status' => 200,
            'data' => $users
        ]);
    }

    function deleteUser(Request $request, $id)
    {
        $user = User::findOrFail($id);

        if (!$user) {
            return response()->json([
                'status' => 404,
                'message' => 'User not found'
            ]);
        }

        $user->delete();

        return response()->json([
            'status' => 200,
            'message' => 'User deleted successfully'
        ]);
    }
}

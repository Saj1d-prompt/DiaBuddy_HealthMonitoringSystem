<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AccountController extends Controller
{
    public function createAccount(Request $request){
        $validate = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'date_of_birth' => 'required|date',
            'password' => 'required|string|min:5',
        ]);
        if($validate->fails()){
            return response()->json([
                'status'=> 400,
                'errors'=>$validate->errors()
            ], 400);
        }
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->date_of_birth = $request->date_of_birth;
        $user->password = Hash::make($request->password);
        $user->save();

        return response()->json([
            'message' => 'User registered successfully',
            'status' => 200
        ], 200);
    }
}

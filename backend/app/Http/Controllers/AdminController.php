<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Models\Hospital;

class AdminController extends Controller
{
    function addDoctor(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|string|email',
            'date_of_birth' => 'required|date',
            'password' => 'required|string|min:5',
        ]);

        if ($validate->fails()) {
            return response()->json([
                'status' => 422,
                'message' => 'Validation failed',
                'data' => $validate->errors()
            ]);
        }
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->date_of_birth = $request->date_of_birth;
        $user->password = Hash::make($request->password);
        $user->role = 'doctor';
        $user->save();

        return response()->json([
            'status' => 200,
            'message' => 'Doctor added successfully',
            'data' => $user
        ]);
    }

    function addHospital(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'type' => 'required|in:hospital,diagnosis_center',
            'name' => 'required|string',
            'license_number' => 'required|string|unique:hospitals',
            'address' => 'required|string',
            'phone' => 'required|string',
            'email' => 'nullable|string|email',
        ]);

        if ($validate->fails()) {
            return response()->json([
                'status' => 422,
                'message' => 'Validation failed',
                'data' => $validate->errors()
            ]);
        }
        $hospital = new Hospital();
        $hospital->type = $request->type;
        $hospital->name = $request->name;
        $hospital->license_number = $request->license_number;
        $hospital->address = $request->address;
        $hospital->city = $request->city;
        $hospital->phone = $request->phone;
        $hospital->email = $request->email;
        $hospital->save();

        return response()->json([
            'status' => 200,
            'message' => 'Hospital added successfully',
            'data' => $hospital
        ]);
    }
}

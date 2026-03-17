<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    public function searchDoctor(Request $request)
    {
        $query = Doctor::with(['user'=>function($q){
            $q->select('id', 'name');
        }]);

        if($request->filled('department')) {
            $query->where('department', $request->department);
        }

        if($request->filled('city')) {
            $query->where('clinicAddress', 'like', '%' . $request->city . '%');
        }

        return response()->json([
            'status' => 200,
            'data' => $query->get()
        ]);
    }

    public function getDoctorProfile(Request $request, $doctorId)
    {
        
    }
}
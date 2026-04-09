<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BloodSugarReading;
use App\Models\Person;
use Illuminate\Support\Facades\DB;

class DashboardControllerr extends Controller
{
    public function getPatientBSR(Request $request)
    {
        $bsr = BloodSugarReading::where('user_id', $request->user()->id)
            ->orderBy('created_at', 'desc')
            ->get()
            ->groupBy('category');

        return response()->json([
            'status' => 200,
            'data' => $bsr
        ], 200);
    }

    public function getPatientInfo(Request $request)
    {
        $user = DB::table('users')
            ->join('person', 'users.id', '=', 'person.user_id')
            ->select(
                'users.name',
                'person.gender',
                'users.date_of_birth',
                'person.address',
                'person.weight',
                'person.height',
                'person.blood_group')
            ->where('users.id', $request->user()->id)
            ->first();

        return response()->json([
            'status' => 200,
            'data' => $user
        ], 200);
    }

    public function getTopDoctors(Request $request)
    {
        
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BloodSugarReading;

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
}

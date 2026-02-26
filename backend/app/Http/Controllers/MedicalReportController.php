<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\MedicalReport;

class MedicalReportController extends Controller
{
    public function storeReport(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'report_file' => 'required|mimes:pdf,jpg,jpeg,png|max:5120',
            'report_type' => 'required|string',
            'test_date'   => 'required|date',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'errors' => $validator->errors()
            ], 400);
        }

        
    }
}

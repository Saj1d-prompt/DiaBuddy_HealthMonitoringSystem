<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\MedicalReport;
use Exception;

class MedicalReportController extends Controller
{
    public function storeReport(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'filePath' => 'required|mimes:pdf,jpg,jpeg,png|max:5120',
            'reportType' => 'required|string',
            'reportDate'   => 'required|date',
            'labName'    => 'required|string',
            'comments'    => 'nullable|string'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'errors' => $validator->errors()
            ], 400);
        }
        try{
            if($request->hasFile('filePath')){
                $file = $request->file('filePath');
                $oriName = $file->getClientOriginalName();

                $path = $file->store('medical_reports', 'public');

                $report = new MedicalReport();
                $report->filePath = $path;
                $report->reportType = $request->reportType;
                $report->reportDate = $request->reportDate;
                $report->labName = $request->labName;
                $report->comments = $request->comments ?? '';
                $report->user_id = $request->user()->id;
                $report->save();
                return response()->json([
                    'message' => 'Report uploaded successfully',
                    'status' => 200
                ], 200);
            }
        }catch(Exception $e){
            return response()->json([
                'status' => 500,
                'message' => 'An error occurred while uploading the report. Please try again later.'
            ], 500);
        }

    }
    public function getReport(Request $request){
         $reports = MedicalReport::where('user_id', $request->user()->id)
                ->orderBy('reportDate', 'desc') 
                ->get();
        return response()->json([
            'reports' => $reports,
            'status' => 200
        ], 200);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\BloodSugarReading;

class BloodSugarReadingsController extends Controller
{
    public function storeReadings(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'glucose_level' => 'required|numeric|min:0',
            'category' => 'required|string',
            'notes' => 'nullable|string',
            'timestamp' => 'required|date',
        ]);
        if ($validate->fails()) {
            return response()->json([
                'status' => 400,
                'errors' => $validate->errors()
            ], 400);
        }
        $bsr = new BloodSugarReading();
        $bsr->glucose_level = $request->glucose_level;
        $bsr->category = $request->category;
        $bsr->notes = $request->notes;
        $bsr->reading_time = $request->timestamp;
        $bsr->user_id = $request->user()->id;
        $bsr->save();

        return response()->json([
            'message' => 'Blood sugar reading added successfully',
            'status' => 200
        ], 200);
    }
}

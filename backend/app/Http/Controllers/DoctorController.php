<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;

use Illuminate\Http\Request;

class DoctorController extends Controller
{
    public function updateDoctorProfile(Request $request)
    {
        $validatedData =Validator::make($request->all(), [
            'department' => 'required|string',
            'specialization' => 'nullable|string',
            'licenseNumber' => 'required|string',
            'yearOfExperience' => 'nullable|integer',
            'profBio' => 'nullable|string',
            'highestDegree' => 'required|string',
            'medicalSchool' => 'required|string',
            'gradYear' => 'required|integer',
            'awards' => 'nullable|string',
            'phoneNumber' => 'required|string',
            'clinicName' => 'nullable|string',
            'clinicAddress' => 'nullable|string',
            'consultationHours' => 'required|string',
            'fee' => 'required|numeric',
        ]);

        if ($validatedData->fails()) {
            return response()->json([
                'status' => 400,
                'errors' => $validatedData->errors()
            ], 400);
        }

        $doctor = $request->user()->doctor;
        $doctor->department = $request->department;
        $doctor->specialization = $request->specialization;
        $doctor->licenseNumber = $request->licenseNumber;
        $doctor->yearOfExperience = $request->yearOfExperience;
        $doctor->profBio = $request->profBio;
        $doctor->highestDegree = $request->highestDegree;
        $doctor->medicalSchool = $request->medicalSchool;
        $doctor->gradYear = $request->gradYear;
        $doctor->awards = $request->awards;
        $doctor->phoneNumber = $request->phoneNumber;
        $doctor->clinicName = $request->clinicName;
        $doctor->clinicAddress = $request->clinicAddress;
        $doctor->consultationHours = $request->consultationHours;
        $doctor->fee = $request->fee;
        $doctor->save();

        return response()->json([
            'message' => 'Doctor profile updated successfully',
            'status' => 200
        ], 200);

    }
}

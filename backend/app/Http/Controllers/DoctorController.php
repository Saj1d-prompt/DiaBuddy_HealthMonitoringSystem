<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Doctor;
use App\Models\Schedule;
use App\Models\Person;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

use Illuminate\Http\Request;

class DoctorController extends Controller
{
    public function updateDoctorProfile(Request $request)
    {
        $validatedData = Validator::make($request->all(), [
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

        $doctor = new Doctor();
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
        $doctor->user_id = $request->user()->id;
        $doctor->save();

        $request->user()->update([
            'is_profile_complete' => true
        ]);

        return response()->json([
            'message' => 'Doctor profile updated successfully',
            'status' => 200
        ], 200);
    }
    public function getDocProfileInfo(Request $request)
    {
        $doctor = Doctor::where('user_id', $request->user()->id)->first();

        return response()->json([
            'message' => 'Doctor profile retrieved successfully',
            'status' => 200,
            'data' => $doctor
        ], 200);
    }

    public function updateDocProfileInfo(Request $request)
    {
        $validatedData = Validator::make($request->all(), [
            'department' => 'required|string',
            'specialization' => 'nullable|string',
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
        $doctor = Doctor::where('user_id', $request->user()->id)->first();
        if (!$doctor) {
            return response()->json([
                'message' => 'Doctor profile not found',
                'status' => 404
            ], 404);
        } else {
            $doctor->update($request->all());
            return response()->json([
                'message' => 'Doctor profile updated successfully',
                'status' => 200
            ], 200);
        }
    }
    public function addDoctorSlot(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'day' => 'required|string',
            'start_time' => 'required|date_format:H:i',
            'end_time' => 'required|date_format:H:i|after:start_time',
        ]);
        if ($validate->fails()) {
            return response()->json([
                'status' => 400,
                'errors' => $validate->errors()
            ], 400);
        }
        $schedule = new Schedule();
        $schedule->user_id = $request->user()->id;
        $schedule->day = strtolower($request->day);
        $schedule->start_time = $request->start_time;
        $schedule->end_time = $request->end_time;
        $schedule->save();
        return response()->json([
            'message' => 'Slot added successfully',
            'status' => 200
        ], 200);
    }
    public function getSlot(Request $request)
    {
        $slots = Schedule::where('user_id', $request->user()->id)->get();
        return response()->json([
            'message' => 'Slots retrieved successfully',
            'status' => 200,
            'data' => $slots
        ], 200);
    }
    public function deleteSlot(Request $request, $id)
    {
        $slot = Schedule::where('user_id', $request->user()->id)->where('id', $id)->first();
        if (!$slot) {
            return response()->json([
                'message' => 'Slot not found',
                'status' => 404
            ], 404);
        }
        $slot->delete();
        return response()->json([
            'message' => 'Slot deleted successfully',
            'status' => 200
        ], 200);
    }

    public function getAppointmentList(Request $request)
    {
        $appointment = Appointment::with(['patient:id,name,date_of_birth', 'patient.person:gender,user_id'])
            ->where('doctor_id', '=', $request->user()->id)
            ->orderBy('appointment_date', 'asc')
            ->orderBy('start_time', 'asc')
            ->get();
        return response()->json([
            'message' => 'Appointments retrieved successfully',
            'status' => 200,
            'data' => $appointment
        ], 200);
    }
    public function getPatientInfo($patientID){
        $user = User::find($patientID);
        if (!$user) {
            return response()->json([
                'message' => 'User not found',
                'status' => 404
            ], 404);
        }
        $patient = Person::where('user_id', $patientID)->first();
        if (!$patient) {
            return response()->json([
                'message' => 'Patient not found',
                'status' => 404
            ], 404);
        }
        return response()->json([
            'message' => 'Patient info retrieved successfully',
            'status' => 200,
            'data' => [
                'user' => $user,
                'data' => $patient
            ]
        ], 200);
    }
}

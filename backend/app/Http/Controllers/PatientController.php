<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use App\Models\Doctor;
use App\Models\Hospital;
use App\Models\Schedule;
use Illuminate\Http\Request;
use App\Models\Appointment;

class PatientController extends Controller
{
    public function searchDoctor(Request $request)
    {
        $query = Doctor::with(['user' => function ($q) {
            $q->select('id', 'name');
        }]);

        if ($request->filled('department')) {
            $query->where('department', $request->department);
        }

        if ($request->filled('city')) {
            $query->where('clinicAddress', 'like', '%' . $request->city . '%');
        }

        return response()->json([
            'status' => 200,
            'data' => $query->get()
        ]);
    }

    public function getDoctorProfile($doctorId)
    {
        $doctor = Doctor::with('user')->find($doctorId);

        if (!$doctor) {
            return response()->json([
                'status' => 404,
                'message' => 'Doctor not found'
            ], 404);
        }

        return response()->json([
            'status' => 200,
            'data' => $doctor
        ]);
    }
    public function searchHospital(Request $request)
    {
        $query = Hospital::with(['user' => function ($q) {
            $q->select('id', 'name');
        }]);

        if ($request->filled('type')) {
            $query->where('type', $request->type);
        }

        if ($request->filled('city')) {
            $query->where('city', 'like', '%' . $request->city . '%');
        }

        return response()->json([
            'status' => 200,
            'data' => $query->get()
        ]);
    }
    public function getDoctorSchedule($doctorID){
        $slot = Schedule::where('user_id', $doctorID)->get();
        return response()->json([
            'status' => 200,
            'data' => $slot
        ]);
    }
    public function bookAppointment(Request $request){
        $validate = Validator::make($request->all(), [
            'appointment_date' => 'required|date',
            'start_time' => 'required',
            'end_time' => 'required|after:start_time',
        ]);
        if ($validate->fails()) {
            return response()->json([
                'status' => 400,
                'errors' => $validate->errors()
            ], 400);
        }
        $appointment = new Appointment();
        $appointment->doctor_id = $request->doctor_id;
        $appointment->patient_id = $request->user()->id;
        $appointment->appointment_date = $request->appointment_date;
        $appointment->start_time = $request->start_time;
        $appointment->end_time = $request->end_time;
        $appointment->save();
        return response()->json([
            'message' => 'Slot added successfully',
            'status' => 200
        ], 200);
    }
    

}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BloodSugarReading;
use App\Models\Person;
use App\Models\Doctor;
use App\Models\Hospital;
use App\Models\User;
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
        $doctor = DB::table('doctors')
            ->join('users', 'doctors.user_id', '=', 'users.id')
            ->select('doctors.id','users.name', 'doctors.specialization', 'doctors.phoneNumber')
            ->take(5)
            ->get();

        return response()->json([
            'status' => 200,
            'data' => $doctor
        ], 200);
    }

    public function getHospitals(Request $request)
    {
        $hospital = Hospital::all()->take(5);
        return response()->json([
            'status' => 200,
            'data' => $hospital
        ], 200);
    }

    public function adminStatCount(){
        $patientNumber = Person::count();
        $doctorNumber = Doctor::count();
        $hospitalNumber = Hospital::count();

        return response()->json([
            'status' => 200,
            'data' => [
                'patientNumber' => $patientNumber,
                'doctorNumber' => $doctorNumber,
                'hospitalNumber' => $hospitalNumber
            ]
        ], 200);
    }

    public function getRecentPatients(){
        $reqDay = now()->subDays(7);
        $recentPatients = User::where('created_at', '>=', $reqDay)
            -> where('role','!=','admin')
            ->get();
        
        return response()->json([
            'status' => 200,
            'data' => $recentPatients
        ], 200);
    }

    public function getAppointmentData(){
        $appointmentData = DB::table('appointments')
        ->select(DB::raw("
            CASE 
                WHEN HOUR(start_time) >= 6 AND HOUR(start_time) < 12 THEN 'Morning'
                WHEN HOUR(start_time) >= 12 AND HOUR(start_time) < 15 THEN 'Noon'
                WHEN HOUR(start_time) >= 15 AND HOUR(start_time) < 18 THEN 'Afternoon'
                WHEN HOUR(start_time) >= 18 OR HOUR(start_time) < 6 THEN 'Night'
            END as period
        "), DB::raw('count(*) as count'))
        ->groupBy('period')
        ->get();

        $session = ['morning' => 0, 'noon' => 0, 'afternoon' => 0, 'night' => 0];

        foreach ($appointmentData as $data) {    
            if (isset($session[$data->period])) {    
                $session[$data->period] = $data->count;
            }
        }
    }
}

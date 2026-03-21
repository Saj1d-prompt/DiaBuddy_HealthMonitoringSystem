<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AccountController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\PersonalInfoController;
use App\Http\Controllers\BloodSugarReadingsController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\MedicalReportController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PatientController;

Route::post('/login', [AccountController::class, 'login']);

Route::post('/register', [AccountController::class, 'createAccount']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/personalInfo', [PersonalInfoController::class, 'storeInfo']);
    Route::get('/getPersonalInfo', [PersonalInfoController::class, 'getInfo']);
    Route::post('/updatePersonalInfo', [PersonalInfoController::class, 'updateInfo']);
    Route::post('/storebsReadings', [BloodSugarReadingsController::class, 'storeReadings']);
    Route::post('/uploadReport', [MedicalReportController::class, 'storeReport']);
    Route::get('/getReport', [MedicalReportController::class, 'getReport']);
    Route::get('/searchDoctor', [PatientController::class, 'searchDoctor']);
    Route::get('/getDoctorProfile/{doctorId}', [PatientController::class, 'getDoctorProfile']);
    Route::get('/searchHospital', [PatientController::class, 'searchHospital']);
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::middleware(['auth:sanctum', 'admin'])->prefix('admin')->group(function () {
    Route::get('/userList', [UserController::class, 'getUserInfo']);
    Route::delete('/deleteUser/{id}', [UserController::class, 'deleteUser']);
    Route::post('/addDoctor', [AdminController::class, 'addDoctor']);
    Route::post('/addHospital', [AdminController::class, 'addHospital']);
});

Route::middleware(['auth:sanctum', 'doctor'])->prefix('doctor')->group(function () {
    Route::post('/updateDoctorProfile', [DoctorController::class, 'updateDoctorProfile']);
    Route::get('/getDocProfileInfo', [DoctorController::class, 'getDocProfileInfo']);
    Route::post('/updateDocProfileInfo', [DoctorController::class, 'updateDocProfileInfo']);
    Route::get('/getSlot', [DoctorController::class, 'getSlot']);
});

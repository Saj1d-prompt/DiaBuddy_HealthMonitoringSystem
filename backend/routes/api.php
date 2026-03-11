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

Route::post('/login', [AccountController::class, 'login']);

Route::post('/register', [AccountController::class, 'createAccount']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/personalInfo', [PersonalInfoController::class, 'storeInfo']);
    Route::get('/getPersonalInfo', [PersonalInfoController::class, 'getInfo']);
    Route::post('/updatePersonalInfo', [PersonalInfoController::class, 'updateInfo']);
    Route::post('/storebsReadings', [BloodSugarReadingsController::class, 'storeReadings']);
    Route::post('/uploadReport', [MedicalReportController::class, 'storeReport']);
    Route::get('/getReport', [MedicalReportController::class, 'getReport']);
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
});

<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AccountController;
use App\Http\Controllers\PersonalInfoController;


Route::post('/login', [AccountController::class, 'login']);

Route::post('/register', [AccountController::class, 'createAccount']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/personalInfo', [PersonalInfoController::class, 'storeInfo']);
    Route::get('/getPersonalInfo', [PersonalInfoController::class, 'getInfo']);
    Route::post('/updatePersonalInfo', [PersonalInfoController::class, 'updateInfo']);
});


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

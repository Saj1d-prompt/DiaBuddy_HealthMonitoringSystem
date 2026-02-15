<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Person;

class PersonalInfoController extends Controller
{
    public function storeInfo(Request $request){
        // Validate the incoming request data
        $validatedData = Validator::make($request->all(), [
            'number' => 'required|string|max:12',
            'gender' => 'required|string|max:10',
            'address' => 'required|string|max:500',
            'height' => 'required|numeric|min:0',
            'weight' => 'required|numeric|min:0',
            'blood_group' => 'required|string|max:5',
            'diabetes_type' => 'required|string|max:50'
        ]);
        if($validatedData->fails()){
            return response()->json([
                'status'=> 400,
                'errors'=>$validatedData->errors()
            ], 400);
        }
        $person = new Person();
        $person->number = $request->number;
        $person->gender = $request->gender;
        $person->address = $request->address;
        $person->height = $request->height;
        $person->weight = $request->weight;
        $person->blood_group = $request->blood_group;
        $person->diabetes_type = $request->diabetes_type;
        $person->user_id = $request->user()->id;
        $person->save();

        return response()->json([
            'message' => 'Health and Personal Information registered successfully',
            'status' => 200
        ], 200);

    }
}

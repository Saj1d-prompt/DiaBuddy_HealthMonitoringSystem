<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Prescription extends Model
{
    protected $table = 'prescription';
    protected $fillable = [
        'medication_name',
        'dosage',
        'frequency',
        'duration',
        'notes',
        'doctor_id',
        'patient_id',
    ];
}

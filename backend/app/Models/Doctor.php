<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    protected $fillable = [
        'department',
        'specialization',
        'licenseNumber',
        'yearOfExperience',
        'profBio',
        'highestDegree',
        'medicalSchool',
        'gradYear',
        'awards',
        'phoneNumber',
        'clinicName',
        'clinicAddress',
        'consultationHours',
        'fee',
        'user_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }


}

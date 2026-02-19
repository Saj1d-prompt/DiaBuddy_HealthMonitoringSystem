<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BloodSugarReading extends Model
{
    protected $fillable = [
        'glucose_level',
        'category',
        'notes',
        'reading_time',
        'user_id',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

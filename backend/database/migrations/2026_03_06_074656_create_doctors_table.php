<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('doctors', function (Blueprint $table) {
            $table->id();
            $table->string(column: 'department');
            $table->string(column: 'specialization')->nullable();
            $table->string(column: 'licenseNumber')->unique();
            $table->string(column: 'yearOfExperience');
            $table->string(column: 'profBio');

            $table->string(column: 'highestDegree');
            $table->string(column: 'medicalSchool');
            $table->string(column: 'gradYear');
            $table->string(column: 'awards')->nullable();

            $table->string(column: 'phoneNumber');
            $table->string(column: 'clinicName');
            $table->string(column: 'clinicAddress');
            $table->string(column: 'consultationHours');
            $table->string(column: 'fee');

            $table->foreignId(column: 'user_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('doctors');
    }
};

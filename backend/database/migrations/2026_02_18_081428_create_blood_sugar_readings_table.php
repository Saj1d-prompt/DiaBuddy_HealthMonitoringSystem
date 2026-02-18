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
        Schema::create('blood_sugar_readings', function (Blueprint $table) {
            $table->id();
            $table-> float("glucose_level");
            $table-> string("category");
            $table-> string("notes")->nullable();
            $table->dateTime("reading_time")->default(now());
            $table -> foreignId(column: 'user_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blood_sugar_readings');
    }
};

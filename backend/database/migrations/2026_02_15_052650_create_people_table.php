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
        Schema::create('person', function (Blueprint $table) {
            $table->id();
            $table-> string('number');
            $table->string(column: 'gender');
            $table->string(column: 'address');
            $table->float(column: 'height');
            $table->float(column: 'weight');
            $table->string(column: 'blood_group');
            $table->string(column: 'diabetes_type');
            $table -> foreignId(column: 'user_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('people');
    }
};

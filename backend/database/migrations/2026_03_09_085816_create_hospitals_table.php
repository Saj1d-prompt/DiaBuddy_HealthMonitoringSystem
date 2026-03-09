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
        Schema::create('hospitals', function (Blueprint $table) {
            $table->id();
            $table->enum('type', ['hospital', 'diagnosis_center']);
            $table->string('name');
            $table->string('license_number')->unique();
            $table->string('address');
            $table->string('phone');
            $table->string('email')->nullable();
            $table -> boolean('is_active')->default(true);
            $table->foreignId(column: 'user_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hospitals');
    }
};

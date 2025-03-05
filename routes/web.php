<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ApplicationController;


Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::post('/submit-application', [ApplicationController::class, 'submit']);
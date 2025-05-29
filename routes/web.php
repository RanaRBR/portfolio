<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\CompetenceController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ExperienceController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//user

Route::get('/', [AboutController::class, 'index']);
Route::get('/create/about', [AboutController::class, 'create']);
Route::get('/edit/about/{id}', [AboutController::class, 'edit']);
Route::put('/update/about/{id}', [AboutController::class, 'update']);

//experiences

Route::get('/create/experience', [ExperienceController::class, 'create']);
Route::get('/edit/experience/{id}', [ExperienceController::class, 'edit']);
Route::put('/update/experience/{id}', [ExperienceController::class, 'update']);
Route::delete('/delete/experience/{id}', [ExperienceController::class, 'destroy']);
Route::post('/post/experience', [ExperienceController::class,'store']);


//competences

Route::get('/create/competence', [CompetenceController::class, 'create']);
Route::get('/edit/competence/{id}', [CompetenceController::class, 'edit']);
Route::put('/update/competence/{id}', [CompetenceController::class, 'update']);
Route::delete('/delete/competence/{id}', [CompetenceController::class, 'destroy']);
Route::post('/post/competence', [CompetenceController::class,'store']);


//contact

Route::get('/create/contact', [ContactController::class, 'create']);
Route::get('/edit/contact/{id}', [ContactController::class, 'edit']);
Route::put('/update/contact/{id}', [ContactController::class, 'update']);
Route::delete('/delete/contact/{id}', [ContactController::class, 'destroy']);
Route::post('/post/contact', [ContactController::class,'store']);


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

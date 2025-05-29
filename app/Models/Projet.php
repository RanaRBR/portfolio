<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Projet extends Model
{
    /** @use HasFactory<\Database\Factories\ProjetFactory> */
    use HasFactory;

    public function about() {
    return $this->belongsTo(About::class, 'about_id');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Competence extends Model
{
    /** @use HasFactory<\Database\Factories\CompetenceFactory> */
    use HasFactory;

    
    public function about() {
    return $this->belongsTo(About::class, 'about_id');
    }
}

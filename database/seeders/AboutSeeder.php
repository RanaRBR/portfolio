<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AboutSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('abouts')->insert([
            'nom' => 'Boutros Rafael',
            'prénom' => 'Rana',
            'email' => 'boutrosrafaelrana@gmail.com',
            'bio' => "Passionnée par l'univers du digital, je conçois des expériences web complètes, mêlant front-end et back-end. De html/css à javascript, react et laravel, je m'épanouis pleinement dans la création d'interfaces dynamiques et de solutions robustes.",
            'photo' =>  '/images/rn.png',
        ]);
    }
}

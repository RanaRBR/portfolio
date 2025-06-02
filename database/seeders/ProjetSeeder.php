<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('projets')->insert([
            [
                'nom' => 'Projet React',
                'lien' => 'https://soft-cendol-591a9b.netlify.app/',
                'description' => "Création d'un e-shop avec React avec JSON créé personnellement",
                'about_id' => 1
            ],
            [
                'nom' => 'Projet NextJS',
                'lien' => 'https://greenstore-three.vercel.app/',
                'description' => "Création d'un e-commerce avec un call API (créé par moi-même)",
                'about_id' => 1
            ]
        ]);
    }
}

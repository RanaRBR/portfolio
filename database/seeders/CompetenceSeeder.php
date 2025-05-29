<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CompetenceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('competences')->insert([
            [
                'matiere' => 'HTML',
                'niveau'=>80,
                'about_id' => 1,
            ],

            [
                'matiere' => 'CSS',
                'niveau'=>70,
                'about_id' => 1,
            ],

            [
                'matiere' => 'Javascript',
                'niveau'=>65,
                'about_id' => 1,
            ],

            [
                'matiere' => 'React',
                'niveau'=>60,
                'about_id' => 1,
            ],

            [
                'matiere' => 'NextJS',
                'niveau'=>60,
                'about_id' => 1,
            ],

            [
                'matiere' => 'Git/Github',
                'niveau'=>60,
                'about_id' => 1,
            ],

    

            [
                'matiere' => 'Laravel',
                'niveau'=>70,
                'about_id' => 1,
            ],

            [
                'matiere' => 'Inertia',
                'niveau'=>65,
                'about_id' => 1,
            ],
        ]);
    }
}

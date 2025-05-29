<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ExperienceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('experiences')->insert([
            [
                'lieu' => 'Molengeek',
                'date'=>2025,
                'formation'=>'Web-dévelopement full-stack',
                'description'=>'Création de sites web en front-end et back-end; avec des projets à réaliser!',
                'about_id' => 1

            ],
           
            [
                'lieu' => 'Bruxelles Formation (Retis)',
                'date'=>2023,
                'formation'=>'E-commerce',
                'description'=>'Stratégie de vente en ligne avec des CMS tels que Wordpress, Shopify et Odoo. Gestion des réseaux sociaux pour accroître la visibilité du produit',
                'about_id' => 1
            ],
          
        ]);
    }
}

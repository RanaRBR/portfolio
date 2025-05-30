<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('contacts')->insert([
            'telephone' => '+32485125321',
            'mail' => 'boutrosrafaelrana@gmail.com',
            'localisation' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20145.248892223965!2d4.276027048441505!3d50.86530958713148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c14480b54c89%3A0xee8310ae236390cc!2s1082%20Berchem-Sainte-Agathe!5e0!3m2!1sfr!2sbe!4v1748603633307!5m2!1sfr!2sbe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
            
            'about_id' => 1
        ]);
    }
}

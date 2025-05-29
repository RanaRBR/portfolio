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
            'localisation' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5036.065907220762!2d4.307882576429668!3d50.86758967167481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c15f769dde99%3A0xc090f2220fb32835!2sAv.%20de%20la%20Berg%C3%A8re%2C%201082%20Berchem-Sainte-Agathe!5e0!3m2!1sfr!2sbe!4v1748543359123!5m2!1sfr!2sbe',
            
            'about_id' => 1
        ]);
    }
}

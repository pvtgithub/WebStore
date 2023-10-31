<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use \App\Models\Product;

class Productseeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Product::factory()->count(30)->create(); 
    }
}

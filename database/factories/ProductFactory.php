<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use \App\Models\Product;
use Faker\Generator as Faker;

class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */

    protected $model = Product::class;
    public function definition()
    {
            return [
                'name' => $this->faker->realText(40),
                'price' => $this->faker->numberBetween(2000000, 20000000),
                'price_old' => $this->faker->numberBetween(2000000, 20000000),
                'description' => $this->faker->realText(180),
                'star' => $this->faker->numberBetween(1,5),
                'rate_promotion' => $this->faker->numberBetween(5,30),
                'image' => 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png',
                'tag1' => $this->faker->realText(10),
                'tag2' => $this->faker->realText(10),
                'tag3' => $this->faker->realText(10),
            ];
    }
}

<?php

namespace Database\Factories;

use App\Models\HTMLSnippet;
use Illuminate\Database\Eloquent\Factories\Factory;

class HTMLFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = HTMLSnippet::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->name(),
            'description' => $this->faker->paragraph,
            'content' => '<b>'. $this->faker->name(). '</b>',
        ];
    }
}

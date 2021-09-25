<?php

namespace Database\Factories;

use App\Models\PDFFile;
use Illuminate\Database\Eloquent\Factories\Factory;

class PDFFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PDFFile::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->name(),
            'file' => [
                'name' => 'dummy.pdf',
                'path' => 'pdfs/dummy.pdf',
            ],
        ];
    }
}

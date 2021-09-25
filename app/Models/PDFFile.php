<?php

namespace App\Models;

use Database\Factories\PDFFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PDFFile extends Model
{
    use HasFactory;

    protected $table = 'pdfs';

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'title', 'file',
    ];

    protected $casts = [
        'file' => 'array',
    ];

    /** @return PDFFactory */
    protected static function newFactory()
    {
        return PDFFactory::new();
    }

    /**
     * Get the route key for the model.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'id';
    }
}

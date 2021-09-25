<?php

namespace App\Models;

use Database\Factories\HTMLFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HTMLSnippet extends Model
{
    use HasFactory;

    protected $table = 'htmls';

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'title', 'description', 'content',
    ];

    /** @return HTMLFactory */
    protected static function newFactory()
    {
        return HTMLFactory::new();
    }
}

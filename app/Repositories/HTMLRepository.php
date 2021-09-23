<?php

namespace App\Repositories;

use App\Models\HTMLSnippet;
use App\Contracts\HTMLRepositoryInterface;

class HTMLRepository implements HTMLRepositoryInterface {

    public function all() {
        return HTMLSnippet::all();
    }
}

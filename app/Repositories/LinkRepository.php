<?php

namespace App\Repositories;

use App\Models\Link;
use App\Contracts\LinkRepositoryInterface;

class LinkRepository implements LinkRepositoryInterface {

    public function all() {
        return Link::all();
    }
}

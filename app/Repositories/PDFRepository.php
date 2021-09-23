<?php

namespace App\Repositories;

use App\Models\PDFFile;
use App\Contracts\PDFRepositoryInterface;

class PDFRepository implements PDFRepositoryInterface {

    public function all() {
        return PDFFile::all();
    }
}

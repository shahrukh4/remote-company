<?php

namespace App\Http\Controllers;

use App\Repositories\HTMLRepository;

class HTMLSnippetController extends Controller
{

    public $htmlRepository;

    public function __construct(HTMLRepository $htmlRepository) {
        $this->htmlRepository = $htmlRepository;
    }

    public function index() {
        $html = $this->htmlRepository->all();

        return view('html.index', [
            'html' => $html
        ]);
    }
}

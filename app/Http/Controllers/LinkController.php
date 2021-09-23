<?php

namespace App\Http\Controllers;

use App\Repositories\LinkRepository;

class LinkController extends Controller
{

    public $linkRepository;

    public function __construct(LinkRepository $linkRepository) {
        $this->linkRepository = $linkRepository;
    }

    public function index() {
        $links = $this->linkRepository->all();

        return view('links.index', [
            'links' => $links
        ]);
    }
}

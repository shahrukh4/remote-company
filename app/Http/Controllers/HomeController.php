<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Repositories\PDFRepository;
use App\Repositories\HTMLRepository;
use App\Repositories\LinkRepository;

class HomeController extends Controller
{
    
    /**
     * @var PDFRepository
     */
    protected $pdfRepository;

    /**
     * @var HTMLRepository
     */
    protected $htmlRepository;

    /**
     * @var LinkRepository
     */
    protected $linkRepository;

    /**
     * LinkController constructor.
     * @param LinkRepository $linkRepository
     */
    public function __construct(
        PDFRepository $pdfRepository,
        HTMLRepository $htmlRepository,
        LinkRepository $linkRepository
    ) {
        $this->pdfRepository = $pdfRepository;
        $this->htmlRepository = $htmlRepository;
        $this->linkRepository = $linkRepository;
    }

    /**
     * Get all the data related to dashboard
     * @return JsonResponse
     */
    public function getDashboardData(): JsonResponse {
        $data = [
            'pdfs' => $this->pdfRepository->all(),
            'html' => $this->htmlRepository->all(),
            'links' => $this->linkRepository->all(),
        ];

        return response()->json([
            'error' => false,
            'data' => $data,
        ]);
    }
}

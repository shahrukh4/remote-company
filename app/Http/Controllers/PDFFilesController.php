<?php

namespace App\Http\Controllers;

use App\Models\PDFFile;
use App\Repositories\PDFRepository;

class PDFFilesController extends Controller
{
    public $pdfRepository;

    public function __construct(PDFRepository $pdfRepository) {
        $this->pdfRepository = $pdfRepository;
    }

    public function index() {
        $pdfs = $this->pdfRepository->all();

        return view('pdfs.index', [
            'pdfs' => $pdfs
        ]);
    }

    public function downloadPDF(PDFFile $pdf) {
        return response()->download($pdf->file['path']);
    }
}

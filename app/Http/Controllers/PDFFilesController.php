<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\PDFFile;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Repositories\PDFRepository;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Collection;

class PDFFilesController extends Controller
{
    /**
     * @var PDFRepository
     */
    protected $pdfRepository;

    /**
     * PDFFilesController constructor.
     * @param PDFRepository $pdfRepository
     */
    public function __construct(PDFRepository $pdfRepository) {
        $this->pdfRepository = $pdfRepository;
    }

    /**
     * Get all the pdfs available
     * @return Collection
     */
    public function index(): Collection {
        try {
            return $this->pdfRepository->all();
        }
        catch(Exception $e) {
            return response()->json([
                'error' => true,
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Store all the data for pdf
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse {
        try {
            $arr = [];
            $arr['title'] = $request->title;
            $file = $request->file('file');

            /** If file has uploaded */
            if(!empty($file)) {
                $name = $file->getClientOriginalName();
                $arr['file'] = ['name' => $name, 'path' => 'storage/pdfs/'. $name];
                Storage::disk('local')->put('public/pdfs/'. $name, file_get_contents($file));
            }

            $this->pdfRepository->store($arr);

            return response()->json([
                'error' => false,
                'message' => 'PDF added successfully.'
            ], 201);
        }
        catch(Exception $e) {
            return response()->json([
                'error' => true,
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Get detail for any pdf
     * @param mixed $pdf
     * @return JsonResponse
     */
    public function show($pdf): JsonResponse {
        try {
            $pdf = $this->pdfRepository->show($pdf);

            return response()->json([
                'error' => false,
                'message' => 'PDF data as follows',
                'data' => $pdf,
            ], 200);
        }
        catch(Exception $e) {
            return response()->json([
                'error' => true,
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Update data for pdf
     * @param Request $request
     * @param mixed $pdf
     * @return JsonResponse
     */
    public function update(Request $request, $pdf): JsonResponse {
        try {
            $arr = [];
            $arr['title'] = $request->title;
            $file = $request->file('file');

            /** If file has uploaded */
            if(!empty($file)) {
                $name = $file->getClientOriginalName();
                $arr['file'] = ['name' => $name, 'path' => 'storage/pdfs/'. $name];
                Storage::disk('local')->put('public/pdfs/'. $name, file_get_contents($file));
            }

            $this->pdfRepository->update($pdf, $arr);

            return response()->json([
                'error' => false,
                'message' => 'PDF updated successfully.'
            ], 201);
        }
        catch(Exception $e) {
            return response()->json([
                'error' => true,
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Delete data for any given pdf
     * @param mixed $pdf
     * @return JsonResponse
     */
    public function destroy($pdf): JsonResponse {
        try {
            $this->pdfRepository->destroy($pdf);

            return response()->json([
                'error' => false,
                'message' => 'PDF deleted successfully.'
            ], 200);
        }
        catch(Exception $e) {
            return response()->json([
                'error' => true,
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Get all links listing page
     * @return mixed
     */
    public function getAllPdfs() {
        try {
            $pdfs = $this->pdfRepository->all();

            return view('pdfs.index', [
                'pdfs' => $pdfs
            ]);
        }
        catch(Exception $e) {
            return response()->json([
                'error' => true,
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Make selected PDF download for user
     * @param PDFFile $pdf
     * @return mixed
     */
    public function downloadPDF(PDFFile $pdf) {
        try {
            return response()->download($pdf->file['path']);
        }
        catch(Exception $e) {
            return response()->json([
                'error' => true,
                'message' => $e->getMessage(),
            ], 500);
        }
    }
}

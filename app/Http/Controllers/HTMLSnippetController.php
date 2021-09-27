<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Repositories\HTMLRepository;
use Illuminate\Database\Eloquent\Collection;

class HTMLSnippetController extends Controller
{
    /**
     * @var HTMLRepository
     */
    protected $htmlRepository;

    /**
     * HTMLSnippetController constructor.
     * @param HTMLRepository $htmlRepository
     */
    public function __construct(HTMLRepository $htmlRepository) {
        $this->htmlRepository = $htmlRepository;
    }

    /**
     * Get all the html available
     * @return Collection
     */
    public function index(): Collection {
        try {
            return $this->htmlRepository->all();
        }
        catch(Exception $e) {
            return response()->json([
                'error' => true,
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Store all the data for html
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse {
        try {        
            $this->htmlRepository->store([
                'title' => $request->title,
                'content' => $request->snippet,
                'description' => !empty($request->description) ? $request->description : '',
            ]);

            return response()->json([
                'error' => false,
                'message' => 'HTML added successfully.'
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
     * Get detail for any html
     * @param mixed $html
     * @return JsonResponse
     */
    public function show($html): JsonResponse {
        try {
            $html = $this->htmlRepository->show($html);

            return response()->json([
                'error' => false,
                'message' => 'HTML data as follows',
                'data' => $html,
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
     * Update data for html
     * @param Request $request
     * @param mixed $html
     * @return JsonResponse
     */
    public function update(Request $request, $html): JsonResponse {
        try {        
            $this->htmlRepository->update($html, [
                'title' => $request->title,
                'content' => $request->snippet,
                'description' => !empty($request->description) ? $request->description : '',
            ]);

            return response()->json([
                'error' => false,
                'message' => 'HTML updated successfully.'
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
     * Delete data for any given html
     * @param mixed $html
     * @return JsonResponse
     */
    public function destroy($html): JsonResponse {
        try {
            $this->htmlRepository->destroy($html);

            return response()->json([
                'error' => false,
                'message' => 'HTML deleted successfully.'
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
     * Show all the available HTML data
     */
    public function showAllHTMLCodes() {
        try {
            $html = $this->htmlRepository->all();

            return view('html.index', [
                'html' => $html
            ]);
        }
        catch(Exception $e) {
            return response()->json([
                'error' => true,
                'message' => $e->getMessage(),
            ], 500);
        }
    }
}

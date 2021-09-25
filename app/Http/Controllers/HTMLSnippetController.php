<?php

namespace App\Http\Controllers;

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
        return $this->htmlRepository->all();
    }

    /**
     * Store all the data for html
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse {
        $this->htmlRepository->store([
            'title' => $request->title,
            'content' => $request->snippet,
            'description' => $request->description,
        ]);

        return response()->json([
            'error' => false,
            'message' => 'HTML added successfully.'
        ], 201);
    }

    /**
     * Get detail for any html
     * @param mixed $html
     * @return JsonResponse
     */
    public function show($html): JsonResponse {
        $html = $this->htmlRepository->show($html);

        return response()->json([
            'error' => false,
            'message' => 'HTML data as follows',
            'data' => $html,
        ], 200);
    }

    /**
     * Update data for html
     * @param Request $request
     * @param mixed $html
     * @return JsonResponse
     */
    public function update(Request $request, $html): JsonResponse {
        $this->htmlRepository->update($html, [
            'title' => $request->title,
            'content' => $request->snippet,
            'description' => $request->description,
        ]);

        return response()->json([
            'error' => false,
            'message' => 'HTML updated successfully.'
        ], 201);
    }

    /**
     * Delete data for any given html
     * @param mixed $html
     * @return JsonResponse
     */
    public function destroy($html): JsonResponse {
        $this->htmlRepository->destroy($html);

        return response()->json([
            'error' => false,
            'message' => 'HTML deleted successfully.'
        ], 200);
    }

    /**
     * Show all the available HTML data
     */
    public function showAllHTMLCodes() {
        $html = $this->htmlRepository->all();

        return view('html.index', [
            'html' => $html
        ]);
    }
}

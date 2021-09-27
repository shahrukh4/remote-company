<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Repositories\LinkRepository;
use Illuminate\Database\Eloquent\Collection;

class LinkController extends Controller
{
    /**
     * @var LinkRepository
     */
    protected $linkRepository;

    /**
     * LinkController constructor.
     * @param LinkRepository $linkRepository
     */
    public function __construct(LinkRepository $linkRepository) {
        $this->linkRepository = $linkRepository;
    }

    /**
     * Get all the links available
     * @return Collection
     */
    public function index(): Collection {
        try {
            return $this->linkRepository->all();
        }
        catch(Exception $e) {
            return response()->json([
                'error' => true,
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Store all the data for link
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse {
        try {
            $this->linkRepository->store([
                'link' => $request->link,
                'title' => $request->title,
                'open_new_tab' => !empty($request->open_new_tab) ? 1 : 0,
            ]);

            return response()->json([
                'error' => false,
                'message' => 'Link added successfully.'
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
     * Get detail for any link
     * @return JsonResponse
     */
    public function show($link): JsonResponse {
        try {
            $link = $this->linkRepository->show($link);

            return response()->json([
                'error' => false,
                'message' => 'Link data as follows',
                'data' => $link,
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
     * Update data for link
     * @return JsonResponse
     */
    public function update(Request $request, $linkId): JsonResponse {
        try {
            $this->linkRepository->update($linkId, [
                'link' => $request->link,
                'title' => $request->title,
                'open_new_tab' => !empty($request->open_new_tab) ? 1 : 0,
            ]);

            return response()->json([
                'error' => false,
                'message' => 'Link updated successfully.'
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
     * Delete data for any given link
     * @param mixed $linkId
     * @return JsonResponse
     */
    public function destroy($linkId): JsonResponse {
        try {
            $this->linkRepository->destroy($linkId);

            return response()->json([
                'error' => false,
                'message' => 'Link deleted successfully.'
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
    public function getAllLinks () {
        try {
            $links = $this->linkRepository->all();

            return view('links.index', [
                'links' => $links
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

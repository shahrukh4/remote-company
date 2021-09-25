<?php

namespace App\Http\Controllers;

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
        return $this->linkRepository->all();
    }

    /**
     * Store all the data for link
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse {
        $this->linkRepository->store([
            'link' => $request->link,
            'title' => $request->title,
            'open_new_tab' => $request->open_new_tab,
        ]);

        return response()->json([
            'error' => false,
            'message' => 'Link added successfully.'
        ], 201);
    }

    /**
     * Get detail for any link
     * @return JsonResponse
     */
    public function show($link): JsonResponse {
        $link = $this->linkRepository->show($link);

        return response()->json([
            'error' => false,
            'message' => 'Link data as follows',
            'data' => $link,
        ], 200);
    }

    /**
     * Update data for link
     * @return JsonResponse
     */
    public function update(Request $request, $linkId): JsonResponse {
        $this->linkRepository->update($linkId, [
            'link' => $request->link,
            'title' => $request->title,
            'open_new_tab' => $request->open_new_tab,
        ]);

        return response()->json([
            'error' => false,
            'message' => 'Link updated successfully.'
        ], 201);
    }

    /**
     * Delete data for any given link
     * @param mixed $linkId
     * @return JsonResponse
     */
    public function destroy($linkId): JsonResponse {
        $this->linkRepository->destroy($linkId);

        return response()->json([
            'error' => false,
            'message' => 'Link deleted successfully.'
        ], 200);
    }

    /**
     * Get all links listing page
     * @return mixed
     */
    public function getAllLinks () {
        $links = $this->linkRepository->all();

        return view('links.index', [
            'links' => $links
        ]);
    }
}

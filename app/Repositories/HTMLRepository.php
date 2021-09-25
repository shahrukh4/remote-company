<?php

namespace App\Repositories;

use App\Models\HTMLSnippet;
use App\Contracts\HTMLRepositoryInterface;
use Illuminate\Database\Eloquent\Collection;

class HTMLRepository implements HTMLRepositoryInterface {

    /**
     * Get all the available html
     * @return Collection
     */
    public function all(): Collection {
        return HTMLSnippet::all();
    }

    /**
     * Store all the data for html
     * @param array $params
     * @return void
     */
    public function store(array $params) {
        HTMLSnippet::create($params);
    }

    /**
     * Get detail of any given html
     * @param mixed $htmlId
     * @return void
     */
    public function show($htmlId): HTMLSnippet {
        return HTMLSnippet::find($htmlId);
    }

    /**
     * Update the html data
     * @param mixed $htmlId
     * @param array $params
     * @return void
     */
    public function update($htmlId, array $params) {
        $htmlId = $this->show($htmlId);

        $htmlId->title  = $params['title'];
        $htmlId->content  = $params['content'];
        $htmlId->description  = $params['description'];
        $htmlId->save();
    }

    /**
     * Delete data for any given html
     * @param mixed $htmlId
     * @return void
     */
    public function destroy($htmlId) {
        $htmlId = $this->show($htmlId);
        $htmlId->delete();
    }
}

<?php

namespace App\Contracts;

use App\Models\HTMLSnippet ;
use Illuminate\Database\Eloquent\Collection;

interface HTMLRepositoryInterface {

    /**
     * Get all the available html
     * @return Collection
     */
    public function all(): Collection;

    /**
     * Store all the data for html
     * @param array $params
     * @return void
     */
    public function store(array $params);

    /**
     * Get detail of any given html
     * @param mixed $htmlId
     * @return void
     */
    public function show($htmlId): HTMLSnippet;

    /**
     * Update the html data
     * @param mixed $htmlId
     * @param array $params
     * @return void
     */
    public function update($htmlId, array $params);

    /**
     * Delete data for any given html
     * @param mixed $htmlId
     * @return void
     */
    public function destroy($htmlId);
}

<?php

namespace App\Contracts;

use App\Models\Link;
use Illuminate\Database\Eloquent\Collection;

interface LinkRepositoryInterface {

    /**
     * Get all the available links
     * @return Collection
     */
    public function all(): Collection;

    /**
     * Store all the data for link
     * @param array $params
     * @return void
     */
    public function store(array $params);

    /**
     * Get detail of any given link
     * @param mixed $linkId
     * @return void
     */
    public function show($linkId): Link;

    /**
     * Update the link data
     * @param mixed $linkId
     * @param array $params
     * @return void
     */
    public function update($linkId, array $params);
}

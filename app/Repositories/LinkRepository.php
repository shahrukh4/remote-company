<?php

namespace App\Repositories;

use App\Models\Link;
use App\Contracts\LinkRepositoryInterface;
use Illuminate\Database\Eloquent\Collection;

class LinkRepository implements LinkRepositoryInterface {

    /**
     * Get all the available links
     * @return Collection
     */
    public function all(): Collection {
        return Link::all();
    }

    /**
     * Store all the data for link
     * @param array $params
     * @return void
     */
    public function store(array $params) {
        Link::create($params);
    }

    /**
     * Get detail of any given link
     * @param mixed $linkId
     * @return void
     */
    public function show($linkId): Link {
        return Link::find($linkId);
    }

    /**
     * Update the link data
     * @param mixed $linkId
     * @param array $params
     * @return void
     */
    public function update($linkId, array $params) {
        $link = $this->show($linkId);

        $link->link  = $params['link'];
        $link->title  = $params['title'];
        $link->open_new_tab  = !empty($params['open_new_tab']) ? 1 : 0;
        $link->save();
    }

    /**
    * Delete data for any given link
    * @param mixed $linkId
    * @return void
    */
    public function destroy($linkId) {
        $link = $this->show($linkId);
        $link->delete();
    }
}

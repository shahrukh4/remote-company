<?php

namespace App\Contracts;

use App\Models\PDFFile;
use Illuminate\Database\Eloquent\Collection;

interface PDFRepositoryInterface {

    /**
     * Get all the available pdf
     * @return Collection
     */
    public function all(): Collection;

    /**
     * Store all the data for pdf
     * @param array $params
     * @return void
     */
    public function store(array $params);

    /**
     * Get detail of any given pdf
     * @param mixed $pdfId
     * @return void
     */
    public function show($pdfId): PDFFile;

    /**
     * Update the pdf data
     * @param mixed $pdfId
     * @param array $params
     * @return void
     */
    public function update($pdfId, array $params);

    /**
     * Delete data for any given pdf
     * @param mixed $pdfId
     * @return void
     */
    public function destroy($pdfId);
}

<?php

namespace App\Repositories;

use App\Models\PDFFile;
use App\Contracts\PDFRepositoryInterface;
use Illuminate\Database\Eloquent\Collection;

class PDFRepository implements PDFRepositoryInterface {

    /**
     * Get all the available pdf
     * @return Collection
     */
    public function all(): Collection {
        return PDFFile::all();
    }

    /**
     * Store all the data for pdf
     * @param array $params
     * @return void
     */
    public function store(array $params) {
        PDFFile::create($params);
    }

    /**
     * Get detail of any given pdf
     * @param mixed $pdfId
     * @return void
     */
    public function show($pdfId): PDFFile {
        return PDFFile::find($pdfId);
    }

    /**
     * Update the pdf data
     * @param mixed $pdfId
     * @param array $params
     * @return void
     */
    public function update($pdfId, array $params) {
        $html = $this->show($pdfId);

        $html->title  = $params['title'];
        $html->file  = $params['file'];
        $html->save();
    }

    /**
     * Delete data for any given pdf
     * @param mixed $pdfId
     * @return void
     */
    public function destroy($pdfId) {
        $pdf = $this->show($pdfId);
        $pdf->delete();
    }
}

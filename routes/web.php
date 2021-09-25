<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LinkController;
use App\Http\Controllers\PDFFilesController;
use App\Http\Controllers\HTMLSnippetController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('homepage');
})->name('home');

/**
    All the routes related to pdfs
 */
Route::get('/pdfs', [PDFFilesController::class, 'getAllPdfs'])->name('pdfs.index');
Route::get('/pdfs/{pdf}/download', [PDFFilesController::class, 'downloadPDF'])->name('pdfs.download');


/**
    All the routes related to html snippets
 */
Route::get('/html', [HTMLSnippetController::class, 'showAllHTMLCodes'])->name('html.index');


/**
    All the routes related to links
 */
Route::get('/links', [LinkController::class, 'getAllLinks'])->name('links.index');


/**
    All the routes related to vuejs based admin view
 */
Route::get('{any}', function () {
    return view('admin');
})->where('any', '.*');

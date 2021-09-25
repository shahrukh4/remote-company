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
Route::group([], function() {
//    Route::resource('pdfs', PDFFilesController::class)->only([
//        'index'
//    ]);
    Route::get('/pdfs', [PDFFilesController::class, 'getAllPdfs'])->name('pdfs.index');
    Route::get('/pdfs/{pdf}/download', [PDFFilesController::class, 'downloadPDF'])->name('pdfs.download');
});

/**
    All the routes related to html snippets
 */
Route::group([], function() {
    Route::resource('html', HTMLSnippetController::class)->only([
        'index'
    ]);
});

Route::group([], function() {
//    Route::resource('links', LinkController::class)->only([
//        'index'
//    ]);
    Route::get('/links', [LinkController::class, 'getAllLinks'])->name('links.index');
});

Route::get('{any}', function () {
    return view('admin');
})->where('any', '.*');

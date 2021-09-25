<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\LinkController;
use App\Http\Controllers\PDFFilesController;
use App\Http\Controllers\HTMLSnippetController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/**
    All the routes related to home/dashboard
 */
Route::get('/dashboard', [HomeController::class, 'getDashboardData']);

/**
    All the routes resource related to links
 */
Route::resource('links', LinkController::class);

/**
    All the routes resource related to html
 */
Route::resource('html', HTMLSnippetController::class);

/**
All the routes resource related to pdfs
 */
Route::resource('pdfs', PDFFilesController::class);

Route::post('/pdfs/update/{pdf}', [PDFFilesController::class, 'update'])->name('pdfs.update');

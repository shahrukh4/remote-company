<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\PDFRepository;
use App\LinkRepository;
use App\HTMLRepository;
use App\Contracts\PDFRepositoryInterface;
use App\Contracts\LinkRepositoryInterface;
use App\Contracts\HTMLRepositoryInterface;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(PDFRepositoryInterface::class, PDFRepository::class);
        $this->app->bind(LinkRepositoryInterface::class, LinkRepository::class);
        $this->app->bind(HTMLRepositoryInterface::class, HTMLRepository::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}

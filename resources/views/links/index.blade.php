@extends('partials.master')
@section('title', 'Links')
@section('content')
    <main>
        <section class="cta section">
            <div class="container-sm">
                <div class="cta-inner section-inner">
                    <div class="cta-header text-center">
                        <h2 class="section-title mt-0">All the available Links are as following</h2>
                        <div class="row d-flex">
                            @foreach($links as $link)
                                <div class="col-md-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">{{$link->title}}</h5>
                                            <a href="{{$link->link}}" target="{{$link->open_new_tab ? '_blank' : ''}}" class="btn btn-primary btn-sm">Open Link</a>
                                        </div>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
@endsection

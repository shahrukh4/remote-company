@extends('partials.master')
@section('title', 'Homepage')
@section('content')
    <main>
        <section class="cta section">
            <div class="container-sm">
                <div class="cta-inner section-inner">
                    <div class="cta-header text-center">
                        <h2 class="section-title mt-0">All the available PDFs are as following</h2>
                        <div class="row d-flex">
                            @foreach($pdfs as $pdf)
                                <div class="col-md-4">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">{{$pdf->title}}</h5>
                                            @if(!empty($pdf->file))
                                                <a href="{{route('pdfs.download', ['pdf' => $pdf->id])}}" class="btn btn-primary btn-sm">Download</a>
                                            @endif
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

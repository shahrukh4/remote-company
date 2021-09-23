@extends('partials.master')
@section('title', 'HTML Snippets')
@section('content')
    <main>
        <section class="cta section">
            <div class="container-sm">
                <div class="cta-inner section-inner">
                    <div class="cta-header text-center">
                        <h2 class="section-title mt-0">All the available HTML Snippets are as following</h2>
                        <div class="row d-flex justify-content-center html-card-section">
                            @foreach($html as $code)
                                <div class="col-md-5 m-1">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">{{$code->title}}</h5>
                                            <p class="card-text small">{{Str::limit($code->description, 50, $end='...')}}</p>
                                            <div class="card-header small text-muted">
                                                {{$code->content}}
                                            </div>
                                            <button class="btn btn-primary btn-sm mt-16 small" :disabled="checkIfDisabled('{{$loop->index}}')" @click="handleCopyCode('{{$code->content}}', '{{$loop->index}}')">@{{ button.text }}</button>
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

@section('scripts')
    <script>
        new Vue({
            el: '#app',
            data() {
                return {
                     button: {
                         text: 'Copy Code',
                         disabled: {
                             text: '',
                             index: null
                         }
                     }
                }
            },
            computed: {

            },
            methods: {
                showButtonText (shahIndex) {
                    console.log(shahIndex, '<h1>2nd HTML</h1>')
                    return this.button.disabled.text || this.button.text
                },
                checkIfDisabled (index) {
                   return index === this.button.disabled.index
                },
                handleCopyCode (text, index) {
                    this.button.disabled.index = index
                    navigator.clipboard.writeText(text)
                    .then(() => {
                        this.button.disabled.text = 'Copied'
                    }, (err) => {
                        console.error('Async: Could not copy text: ', err);
                    })

                    setTimeout(() => {
                        this.button.disabled.index = null
                        this.button.disabled.text = ''
                    }, 500)
                }
            }
        })
    </script>
@endsection

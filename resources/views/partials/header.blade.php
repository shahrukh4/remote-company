<header class="site-header pt-2">
    <div class="container">
        <div class="site-header-inner">
            <div class="brand header-brand">
                <h1 class="m-0">
                    <a href="{{route('home')}}">
                        <img class="header-logo-image asset-light" src="/images/vue-logo.png" alt="Logo" height="32px" width="32px">
                        <img class="header-logo-image asset-dark" src="/images/vue-logo.png" alt="Logo" height="32px" width="32px">
                    </a>
                </h1>
            </div>
            <div class="row">
                <div class="col">
                    <a href="{{route('pdfs.index')}}"><h3 class="small mt-0">PDFs</h3></a>
                </div>
                <div class="col">
                    <a href="{{route('html.index')}}"><h3 class="small mt-0">HTML</h3></a>
                </div>
                <div class="col">
                    <a href="{{route('links.index')}}"><h3 class="small mt-0">Links</h3></a>
                </div>
            </div>
        </div>
    </div>
</header>

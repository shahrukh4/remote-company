<!DOCTYPE html>
<html lang="en" class="no-js">
    @include('partials.head')
    <body class="is-boxed has-animations">
        <div class="body-wrap boxed-container" id="app">
            @include('partials.header')
            @yield('content')
            @include('partials.footer')
        </div>
        @include('partials.scripts')
        @yield('scripts')
    </body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content={{csrf_token()}}>
    <script>window.Laravel = { csrf: '{{ csrf_token() }}' }</script>

    <title>{{ config('app.name') }}</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">

    <!--  Fonts and icons     -->
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
    <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
    <link href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" rel="stylesheet">
</head>
<body>
    <noscript>
        <strong>We're sorry but vue-material-kit doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>

    <!-- built files will be auto injected -->
    <script src="{{asset('js/app.js')}}"></script>
</body>
</html>
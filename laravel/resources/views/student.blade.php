<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">
    <link href="/css/app.css" rel="stylesheet">
    <!-- Styles -->
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script>
        request = $.ajax({
            url: 'http://worldclockapi.com/api/jsonp/cet/now?callback=mycallback=?',
            type: 'GET',
            dataType: 'jsonp'
        });
        request.done(function(res) {
            var day = res.dayOfTheWeek
            var date = res.currentDateTime
            var dateSplited = date.split("T");
            var time = dateSplited[1].split("+")
            $('#day').text(day);
            $('#time').text(time[0]);
            $('#date').text(dateSplited[0]);
        });
    </script>
</head>

<body>
    <div>
        <h1>All departments</h1>
    </div>
    <div>
        <span>Time accessed: </span>
        <span id="date"> </span>
        <span id="time"> </span>
        <span id="day"> </span>
    </div>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Faculty id</th>
                </tr>
            </thead>
            <tbody>
                @foreach($departments as $key => $data)
                <tr>
                    <td>{{$data->id}}</td>
                    <td>{{$data->name}}</td>
                    <td><a href='faculty'>{{$data->faculty_id}}</a></td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</body>

</html>
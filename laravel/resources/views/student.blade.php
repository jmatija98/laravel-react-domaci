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
        
    </head>
    <body>
        <div>
            <h1>Pass data from controller to view</h1>
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
                                    <td>{{$data->faculty_id}}</td>
                                </tr>
                            @endforeach
                     
                    
                </tbody>
                </table>    
            </div>
    </body>
</html>



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
        <style>
        #map{
            height: 400px;
             width: 100%;
        }
    </style>
    </head>
    <body>
        <div>
            <h1>Our faculty</h1>
        </div>
        <div>
                <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Location</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($faculty as $key => $data)
                        <tr>
                            <td>{{$data->id}}</td>
                            <td>{{$data->name}}</td>
                            <td>{{$data->location}}</td>
                        </tr>
                    @endforeach   
                </tbody>
                </table>    
            </div>
            <h1>Map of faculties</h1>
    <div id="map"></div>
    <script>
        function initMap(){
            var options = {
                zoom:13,
                center:{lat:44.7762, lng:20.4771}
            }
            var map = new google.maps.Map(document.getElementById('map'), options);

            var marker = new google.maps.Marker({
                position:{lat:44.7727,lng:20.4752},
                map:map
            });

            var infoWindow = new google.maps.InfoWindow({
                content:'<h1>Faculty of organizational sciences</h1>'
            });

            marker.addListener('click', function(){
                infoWindow.open(map,marker); 
            });

            var marker_1 = new google.maps.Marker({
                position:{lat:44.7737,lng:20.4753},
                map:map
            });

            var infoWindow_1 = new google.maps.InfoWindow({
                content:'<h1>Faculty of political sciences</h1>'
            });

            marker_1.addListener('click', function(){
                infoWindow_1.open(map,marker_1); 
            });

            var marker_2 = new google.maps.Marker({
                position:{lat:44.7683,lng:20.4800},
                map:map
            });

            var infoWindow_2 = new google.maps.InfoWindow({
                content:'<h1>The School of Electrical and Computer Engineering of Applied Sciences</h1>'
            });

            marker_2.addListener('click', function(){
                infoWindow_2.open(map,marker_2); 
            });

        }
    </script>

    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDtZmU-mPwG5OFL-H3bNgIk_x_0LsRLWZY&callback=initMap&libraries=&v=weekly"
      async
    ></script>
    </body>
</html>



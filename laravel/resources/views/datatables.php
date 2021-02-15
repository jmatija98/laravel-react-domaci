<?php  
 $connect = mysqli_connect("localhost", "root", "", "laravel-database");  
 $query ="SELECT * FROM departments ORDER BY ID DESC";  
 $result = mysqli_query($connect, $query);  
 ?>  
 <!DOCTYPE html>  
 <html>  
      <head>  
           <title>Departments review</title>  
           <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>  
           <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />  
           <script src="https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>  
           <script src="https://cdn.datatables.net/1.10.12/js/dataTables.bootstrap.min.js"></script> 
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
           <link rel="stylesheet" href="https://cdn.datatables.net/1.10.12/css/dataTables.bootstrap.min.css" />  
      </head>  
      <body>  
           <br /><br />  
           <div>
        <span>Time accessed: </span>
        <span id="date"> </span>
        <span id="time"> </span>
        <span id="day"> </span>
    </div>
           <div class="container">  
                <h3 align="center">Departments review</h3>  
                <br />  
                <div class="table-responsive">  
                     <table id="departments" class="table table-striped table-bordered">  
                          <thead>  
                               <tr>  
                                    <td>Id</td>  
                                    <td>Name</td>  
                                    <td>Faculty id</td>  
                                    
                               </tr>  
                          </thead>  
                          <?php  
                          while($row = mysqli_fetch_array($result))  
                          {  
                               echo '  
                               <tr>  
                                    <td>'.$row["id"].'</td>  
                                    <td>'.$row["name"].'</td>  
                                    <td><a href="faculty">'.$row["faculty_id"].'</a></td> 
                               </tr>  
                               ';  
                          }  
                          ?>  
                     </table>  
                </div>  
           </div>  
      </body>  
 </html>  
 <script>  
 $(document).ready(function(){  
      $('#departments').DataTable();  
 });  
 </script>  

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
            <form action="user" method="POST">
                <h3>Log in as teacher<h3>
                <div class="form-group">    
                    <label for="u">Username:</label>
                    <input class="form-control" type="text" name="username" id="u"></input>
                </div>
                <div class="form-group">
                    <label for="p">Password</label>
                    <input class="form-control" type="password" name="password" id="p"></input>
                </div>
            
            <button type="submit" class="btn btn-primary" >Submit</button>
            <br></br>
            <a href='/studentView' class="btn btn-primary">Continue as a student</a>
            </form>  
        </div>
    </body>
</html>

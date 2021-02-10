<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $username=$request->username;
        $password=$request->password;
        
        if($username=='admin' && $password=='admin'){
            
            $request->session()->put('user',$username);
            return redirect('welcome');
        }
        else{
            echo '<script language="javascript">';
            echo 'alert("Invalid input")';
            echo '</script>';
            return view('login');
        }
        
    }

    public function next(){
        $data = [
            'student'
          ];
        return view('student')->with('data', json_encode($data));
    }

   
}

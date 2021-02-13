<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LoginController;

Route::get('/',function(){
    if(session()->has('user')){
        return redirect('welcome');
    }
    return view('login');
});


Route::post('user','Api\LoginController@store');
Route::view('welcome','welcome');
Route::get('logout',function(){
    if(session()->has('user')){
        session()->pull('user');
    }
    return redirect('/');
});
Route::get('studentView','Api\DepartmentController@show');
Route::get('faculty','Api\FacultyController@index');
Route::get('student/{id}','Api\StudentsController@show');
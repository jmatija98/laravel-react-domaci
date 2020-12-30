<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('homework','Api\HomeworkController@index');
Route::get('students','Api\StudentsController@index');

Route::post('task/store','Api\HomeworkController@store');

Route::delete('task/delete/{id}','Api\HomeworkController@destroy');

//Route::post('login','Api\HomeworkController@store');
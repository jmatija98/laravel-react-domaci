<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/
Route::group(['middleware' => ['web']], function () {
    Route::get('homework','Api\HomeworkController@index');
    Route::get('students','Api\StudentsController@index');
    Route::get('studentsById/{id}','Api\StudentsController@show');

    Route::post('task/store','Api\HomeworkController@store');
    Route::post('login','Api\LoginController@store');

    Route::delete('task/delete/{id}','Api\HomeworkController@destroy');
    Route::delete('about/delete/{id}','Api\StudentsController@destroy');
});



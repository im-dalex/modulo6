<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('teams', 'TeamsController');
Route::resource('fans', 'FansController');
Route::get('fans/teamFan/{id}', 'FansController@teamFan')->name('getTeamFan');
Route::put('fans/updateTeam/{id}', 'FansController@updateTeamFan')->name('updateTeamFan');


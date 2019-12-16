<?php

namespace App\Http\Controllers;

use App\Fans;
use Illuminate\Http\Request;

class FansController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $fans = Fans::all();
        return $fans;
    }

    public function teamFan( $teamId ) {
       
        $fanes = Fans::where('TeamId','=',$teamId)->get();
        return $fanes;
    }

    public function updateTeamFan( Request $request, $fanId) {
        
        $newTeam = $request->input('TeamId');
        $fan = Fans::find($fanId);
        $fan->TeamId = $newTeam;
        $fan->save();
        return $fan;

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
        $fan = Fans::create($request->all());
        return $fan;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $fan = Fans::find($id);
        return $fan;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $fan = $this->show($id);
        $fan->fill($request->all())->save();
        return $fan;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $fan = $this->show($id);
        $fan->delete();
        return $fan;    
    }
}

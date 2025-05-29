<?php

namespace App\Http\Controllers;

use App\Models\Experience;
use App\Http\Requests\StoreExperienceRequest;
use App\Http\Requests\UpdateExperienceRequest;
use Illuminate\Http\Client\Request as ClientRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExperienceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $experiences= Experience::all();
        return Inertia::render('welcome',[
            'experiences'=>$experiences
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('createExperience');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $experience= new Experience();
        $experience->lieu = $request->lieu;
        $experience->formation = $request->formation;
        $experience->description = $request->description;
        $experience->date = $request->date;
        $experience->about_id = $request->about_id;
        $experience->save();

        
        
    }

    /**
     * Display the specified resource.
     */
    public function show(Experience $experience)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $experience= Experience::find($id);
        return Inertia::render('editExperience', ['experience'=>$experience]);
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id, Request $request)
    {
        $experience= Experience::find($id);
        $experience->lieu = $request->lieu;
        $experience->formation = $request->formation;
        $experience->description = $request->description;
        $experience->date = $request->date;
        $experience->about_id = $request->about_id;
        $experience->save();

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $experience=Experience::find($id);
        $experience->delete();
    }
}

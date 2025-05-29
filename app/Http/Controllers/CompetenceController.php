<?php

namespace App\Http\Controllers;

use App\Models\Competence;
use App\Http\Requests\StoreCompetenceRequest;
use App\Http\Requests\UpdateCompetenceRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Inertia\Inertia;

class CompetenceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $competence= Competence::all();
        return Inertia::render('welcome',[
        'competence'=>$competence
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('createCompetence');

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $competence= new Competence();
        $competence->matiere = $request->matiere;
        $competence->niveau = $request->niveau;
        $competence->about_id = $request->about_id;
        $competence->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(Competence $competence)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $competence= Competence::find($id);
        return Inertia::render('editCompetence', ['competence'=>$competence]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id, Request  $request)
    {
        $competence= Competence::find($id);
        $competence->matiere = $request->matiere;
        $competence->niveau = $request->niveau;
        $competence->about_id = $request->about_id;
        $competence->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $competence=Competence::find($id);
        $competence->delete();
    }
}

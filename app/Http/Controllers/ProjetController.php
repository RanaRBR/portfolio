<?php

namespace App\Http\Controllers;

use App\Models\Projet;
use App\Http\Requests\StoreProjetRequest;
use App\Http\Requests\UpdateProjetRequest;
use Illuminate\Http\Client\Request as ClientRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projets= Projet::all();
        return Inertia::render('welcome',[
            'projets'=>$projets
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('createProjet');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $projet= new Projet();
        $projet->nom = $request->nom;
        $projet->lien = $request->lien;
        $projet->description = $request->description;
        $projet->about_id = $request->about_id;
        $projet->save();

        
        
    }

    /**
     * Display the specified resource.
     */
    public function show(Projet $projet)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $projet= Projet::find($id);
        return Inertia::render('editProjet', ['projet'=>$projet]);
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id, Request $request)
    {
        $projet= Projet::find($id);
        $projet->nom = $request->nom;
        $projet->lien = $request->lien;
        $projet->description = $request->description;
        $projet->about_id = $request->about_id;
        $projet->save();

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $experience=Projet::find($id);
        $experience->delete();
    }
}

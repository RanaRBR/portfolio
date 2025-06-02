<?php

namespace App\Http\Controllers;

use App\Models\About;
use App\Http\Requests\StoreAboutRequest;
use App\Http\Requests\UpdateAboutRequest;
use App\Models\Competence;
use App\Models\Experience;
use App\Models\Contact;
use App\Models\Projet;
use Illuminate\Http\Client\Request as ClientRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $abouts= About::all();
        $experiences = Experience::all();
        $competences = Competence::all();
        $contacts = Contact::all();
        $projets = Projet::all();
        return Inertia::render('welcome', [
            'abouts'=> $abouts,
            'experiences' => $experiences,
            'competences'=>$competences,
            'contacts'=>$contacts,
            'projets'=>$projets,

        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $about =new About();
        $about->nom = $request->nom;
        $about->prénom = $request->prénom;
        $about->email = $request->email;
        $about->bio = $request->bio;
        $about->photo = $request->photo;
        $about->save();
     
        
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $about= About::find($id);
        return Inertia::render('details',['about'=>$about]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $about = About::find($id);
        return Inertia::render('editAbout', ['about'=>$about]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id, Request $request)
    {
        $about = About::find($id);
        $about->nom = $request->nom;
        $about->prénom = $request->prénom;
        $about->email = $request->email;
        $about->bio = $request->bio;
        $about->photo = $request->photo;
        $about->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(About $about)
    {
        //
    }
}

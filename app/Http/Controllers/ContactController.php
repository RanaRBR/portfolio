<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Http\Requests\StoreContactRequest;
use App\Http\Requests\UpdateContactRequest;
use Illuminate\Http\Client\Request as ClientRequest;
use Illuminate\Http\Request as HttpRequest;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contacts= Contact::all();
        return Inertia::render('welcome',[
        'contacts'=>$contacts
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('createContact');

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $contact= new Contact();
        $contact->telephone = $request->telephone;
        $contact->localisation = $request->localisation;
        $contact->mail = $request->mail;
        $contact->about_id = $request->about_id;
        $contact->save();

      
    }

    /**
     * Display the specified resource.
     */
    public function show(Contact $contact)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $contact= Contact::find($id);
        return Inertia::render('editContact', ['contact'=>$contact]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id, Request $request)
    {
        $contact= Contact::find($id);
        $contact->telephone = $request->telephone;
        $contact->localisation = $request->localisation;
        $contact->mail = $request->mail;
        $contact->about_id = $request->about_id;
        $contact->save();
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $contact=Contact::find($id);
        $contact->delete();
    }
}

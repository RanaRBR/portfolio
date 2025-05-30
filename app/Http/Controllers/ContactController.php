<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormMail;

class ContactController extends Controller
{
    /**
     * Affiche la liste des contacts
     */
    public function index()
    {
        $contacts = Contact::all();
        return Inertia::render('welcome', [
            'contacts' => $contacts
        ]);
    }

    /**
     * Affiche le formulaire de création d'un contact
     */
    public function create()
    {
        return Inertia::render('createContact');
    }

    /**
     * Stocke un nouveau contact
     */
    public function store(Request $request)
    {
        $contact = new Contact();
        $contact->telephone = $request->telephone;
        $contact->localisation = $request->localisation;
        $contact->mail = $request->mail;
        $contact->about_id = $request->about_id;
        $contact->save();
    }

    /**
     * Affiche le formulaire d'édition d'un contact
     */
    public function edit($id)
    {
        $contact = Contact::find($id);
        return Inertia::render('editContact', ['contact' => $contact]);
    }

    /**
     * Met à jour un contact
     */
    public function update($id, Request $request)
    {
        $contact = Contact::find($id);
        $contact->telephone = $request->telephone;
        $contact->localisation = $request->localisation;
        $contact->mail = $request->mail;
        $contact->about_id = $request->about_id;
        $contact->save();
    }

    /**
     * Supprime un contact
     */
    public function destroy($id)
    {
        $contact = Contact::find($id);
        $contact->delete();
    }

    /**
     * Envoie le mail du formulaire de contact
     */
    public function sendContactForm(Request $request)
    {
        $validated = $request->validate([
            'name'    => 'required|string|max:255',
            'email'   => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        Mail::to(config('mail.mail_from_address', 'boutrosrafaelrana@gmail.com'))
            ->send(new ContactFormMail($validated));

        return back()->with('success', 'Merci pour votre message, je vous répondrai bientôt.');
    }
}

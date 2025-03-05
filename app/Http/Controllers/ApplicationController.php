<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Application;

class ApplicationController extends Controller
{
    public function submit(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'course' => 'required|string|max:100'
        ]);

        Application::create([
            'name' => $request->name,
            'phone' => $request->phone,
            'course' => $request->course
        ]);

        return redirect()->back()->with('success', 'Заявка успешно отправлена!');
    }
}


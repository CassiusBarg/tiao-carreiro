<?php

namespace App\Http\Controllers;

use App\Models\Song;
use Illuminate\Http\Request;

class SongController extends Controller
{
    public function index()
    {
        return Song::paginate(5);
    }

    public function top5()
    {
        return Song::orderBy('id', 'desc')->take(5)->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'url'   => 'required|url',
        ]);

        return Song::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $song = Song::findOrFail($id);

        $request->validate([
            'title' => 'required|string|max:255',
            'url'   => 'required|url',
        ]);

        $song->update($request->all());

        return $song;
    }

    public function destroy($id)
    {
        $song = Song::findOrFail($id);
        $song->delete();

        return response()->json(['message' => 'Música removida com sucesso']);
    }
}

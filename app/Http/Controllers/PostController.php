<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::orderBy('created_at', 'desc')->get();
        return response()->json($posts);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required',
            'name' => 'required',
        ]);
        $post = Post::create($validatedData);

        return response()->json($post);
    }
    public function delete($id)
    {
        $post = Post::find($id)->delete();
        return response()->json($post);
    }
}

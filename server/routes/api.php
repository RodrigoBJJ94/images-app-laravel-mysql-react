<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('upload', function (Request $request) {

  
    $subtitle = $request->get('subtitle');
    $image = $request->file('image');
    $imageName = $image->store('photos');
    $path = Storage::path($imageName);


    $newImg = Image::make($path)->resize(400, 400, function ($c) {
        $c->aspectRatio();
        $c->upsize();
    })->save();
    
    $photo = new App\Photo();
    $photo->url = $imageName;
    $photo->subtitle = $subtitle;
    $photo->save();
    
    return ['status' => 'ok'];
});

Route::get('list', function (Request $request) {

    $photos = App\Photo::all();

    foreach ($photos as $key => $photo) {
        $photos[$key]['url'] = asset('storage/' . $photo['url']);
    }

    return $photos;
});

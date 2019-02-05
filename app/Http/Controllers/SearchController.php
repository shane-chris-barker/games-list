<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class SearchController extends Controller
{
    const API_URL = 'https://www.giantbomb.com/api/search/?format=json&api_key=';
    private $client;

    public function index(Request $request)
    {
        // get our search term, get our API key and lets play!
        $searchTerm = $request->get('name');
        $url = self::API_URL;
        $url .= env('GIANT_BOMB_KEY')."&query={$searchTerm}&resources=game";

        // Guzzle to go fetch our results from Giantbomb Api
        $this->client = new Client(['base_uri' => $url]);
        try {
            $response = $this->client->get($url);
        } catch (ClientException $e) {
            return false;
        }

        // get our response back, prep what we need for our view and respond with some
        // JSON love
        $response   = json_decode($response->getBody()->getContents(), true);
        $result     = json_encode($response['results'][0]);


        return response()->json($result);
    }
}

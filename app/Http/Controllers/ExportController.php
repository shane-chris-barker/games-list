<?php
namespace App\Http\Controllers;
use Mpdf\Mpdf;
use Illuminate\Http\Request;

class ExportController extends Controller
{
    public function pdf(Request $request)
    {
        $theList = $request->get('theList');

        $mpdf       = new Mpdf();
        $logo       = base_path()."/public/images/games-list-logo.png";
        $pdfView    = \View::make('pdf')->with('theList', $theList)->with('logo', $logo);


        // Write the PDF using the html we just made
        $mpdf->writeHTML($pdfView->render());
        // As we cannot force a download of the PDF due to the fact that
        // this function was called over ajax, instead we will create
        // the pdf with a random filename and return a url to the front-end
        // which will then download the file via GET. meh.
        $randomness = substr(str_shuffle(str_repeat($x='0123456789abcdefghijklmnopqrstuvwxyz', ceil(5/strlen($x)) )),1,5);
        $data = $mpdf->output(base_path()."/public/pdf/{$randomness}.pdf", \Mpdf\Output\Destination::FILE);

        $url['url'] = request()->root()."/pdf/{$randomness}.pdf";

        return response()->json($url);

    }

    public function email()
    {

    }
}

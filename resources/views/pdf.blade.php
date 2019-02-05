<div>
    <img src="{{$logo}}"/>
    <h1>For Xmas, Can I please have:</h1>
    @foreach($theList as $item)
        <p>{{$item['name']}}</p>
        <img src='{{$item['image']}}'/>
    @endforeach
</div>

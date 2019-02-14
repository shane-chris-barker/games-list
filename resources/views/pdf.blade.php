<div>
    <img src="{{$logo}}"/>
    <h1>My games Wishlist is:</h1>
    @foreach($theList as $item)
        <p>{{$item['name']}}</p>
        <img src='{{$item['image']}}'/>
    @endforeach
</div>

var animation6 = bodymovin.loadAnimation({
    container: document.getElementById('Powerstation'),
    renderer:'svg',
    loop: true,
    autoplay: true,
    path: './PowerstationScripts/Powerstationdata.json',
    
    })
    
    function displayGeoText()
    {
        document.getElementById('GeoText').style=" transition: opacity 2s; opacity:1"; 
        animationDuration = "3s";
    }
    
    function hideradiationtext()
    {
        document.getElementById('GeoText').style="transition: opacity 0.5s; opacity:0";
    
    }
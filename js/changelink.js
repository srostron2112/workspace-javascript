$('a').each(function() {
    var linkaddress = $(this).attr('href');
    console.log(linkaddress);
    $(this).attr('href',"https://www.google.com");
});

//update all the image addr
$('img').each(function() {
    var imgaddr = $(this).attr('src');
    console.log(imgaddr);
    $(this).attr('src',"img/"+imgaddr);
});
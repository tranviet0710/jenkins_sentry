$('document').ready(function () {
    $('#getFile').on('click', function () {
        var xml = new XMLHttpRequest();
        xml.open('GET', 'text1.txt');
        xml.onreadystatechange = function () {
            console.log(xml.responseText);
        }
        xml.onerror = function () {
            console.log('There was an error.');
        }

        xml.send();
    })
})
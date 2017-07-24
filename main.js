var nameW = ['Anna','Maria','Katarzyna','Małgorzata','Agnieszka','Krystyna','Barbara','Ewa','Elżbieta','Zofia','Janina','Teresa','Joanna','Magdalena','Monika','Jadwiga','Danuta','Irena','Halina','Helena','Beata','Aleksandra','Marta','Dorota','Marianna','Grażyna','Jolanta','Stanisława','Iwona','Karolina','Bożena','Urszula','Justyna','Renata','Alicja','Paulina','Sylwia','Natalia','Wanda','Agata','Aneta','Izabela','Ewelina','Marzena','Wiesława','Genowefa','Patrycja','Kazimiera','Edyta','Stefania'];
var nameM = ['Jan','Andrzej','Piotr','Krzysztof','Stanisław','Tomasz','Paweł','Józef','Marcin','Marek','Michał','Grzegorz','Jerzy','Tadeusz','Adam','Łukasz','Zbigniew','Ryszard','Dariusz','Henryk','Mariusz','Kazimierz','Wojciech','Robert','Mateusz','Marian','Rafał','Jacek','Janusz','Mirosław','Maciej','Sławomir','Jarosław','Kamil','Wiesław','Roman','Władysław','Jakub','Artur','Zdzisław','Edward','Mieczysław','Damian','Dawid','Przemysław','Sebastian','Czesław','Leszek','Daniel','Waldemar'];
var surname = ['Nowak','Kowalski','Wiśniewski','Dąbrowski','Lewandowski','Wójcik','Kamiński','Kowalczyk','Zieliński','Szymański','Woźniak','Kozłowski','Jankowski','Wojciechowski','Kwiatkowski','Kaczmarek','Mazur','Krawczyk','Piotrowski','Grabowski','Nowakowski','Pawłowski','Michalski','Nowicki','Adamczyk','Dudek','Zając','Wieczorek','Jabłoński','Król','Majewski','Olszewski','Jaworski','Wróbel','Malinowski','Pawlak','Witkowski','Walczak','Stępień','Górski','Rutkowski','Michalak','Sikora','Ostrowski','Baran','Duda','Szewczyk','Tomaszewski','Pietrzak','Marciniak','Wróblewski','Zalewski','Jakubowski','Jasiński','Zawadzki','Sadowski','Bąk','Chmielewski','Włodarczyk','Borkowski','Czarnecki','Sawicki','Sokołowski','Urbański','Kubiak','Maciejewski','Szczepański','Kucharski','Wilk','Kalinowski','Lis','Mazurek','Wysocki','Adamski','Kaźmierczak','Wasilewski','Sobczak','Czerwiński','Andrzejewski','Cieślak','Głowacki','Zakrzewski','Kołodziej','Sikorski','Krajewski','Gajewski','Szymczak','Szulc','Baranowski','Laskowski','Brzeziński','Makowski','Ziółkowski','Przybylski'];
var surnameW = ['Nowak','Kowalska','Wiśniewska','Dąbrowska','Lewandowska','Wójcik','Kamińska','Kowalczyk','Zielińska','Szymańska','Woźniak','Kozłowska','Jankowska','Wojciechowska','Kwiatkowska','Kaczmarek','Mazur','Krawczyk','Piotrowska','Grabowska','Nowakowska','Pawłowska','Michalska','Nowicka','Adamczyk','Dudek','Zając','Wieczorek','Jabłońska','Król','Majewska','Olszewska','Jaworska','Wróbel','Malinowska','Pawlak','Witkowska','Walczak','Stępień','Górska','Rutkowska','Michalak','Sikora','Ostrowska','Baran','Duda','Szewczyk','Tomaszewska','Pietrzak','Marciniak','Wróblewska','Zalewska','Jakubowska','Jasińska','Zawadzka','Sadowska','Bąk','Chmielewska','Włodarczyk','Borkowska','Czarnecka','Sawicka','Sokołowska','Urbańska','Kubiak','Maciejewska','Szczepańska','Kucharska','Wilk','Kalinowska','Lis','Mazurek','Wysocka','Adamska','Kaźmierczak','Wasilewska','Sobczak','Czerwińska','Andrzejewska','Cieślak','Głowacka','Zakrzewska','Kołodziej','Sikorska','Krajewska','Gajewska','Szymczak','Szulc','Baranowska','Laskowska','Brzezińska','Makowska','Ziółkowska','Przybylska'];

function pickNameM(){
    var userInput = inputForm.input.value;
    var number = Number(userInput);

    output.value = '';

    for(let i = 0; i < number; i ++){
        var pickedNameM = nameM[Math.floor(Math.random()*nameM.length)];
        var pickedSurname = surname[Math.floor(Math.random()*surname.length)];
        output.value += pickedNameM + ' ' + pickedSurname + '\n';
    }
}

function pickNameW(){
    var userInput = inputForm.input.value;
    var number = Number(userInput);

    output.value = '';

    for(let i = 0; i < number; i ++){
        var pickedNameW = nameW[Math.floor(Math.random()*nameW.length)];
        var pickedSurname = surnameW[Math.floor(Math.random()*surnameW.length)];
        output.value += pickedNameW + ' ' + pickedSurname + '\n';
    }
}

function main(){
    if (document.getElementById('women').checked){
        pickNameW();
    }
    else if(document.getElementById('men').checked){
        pickNameM();
    }
    else{
        output.value = 'Błąd. Zaznacz jedną z płci.'
    }
}

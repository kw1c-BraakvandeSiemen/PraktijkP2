/*
    auteur siemen van de braak
    datum 18/01/2022

    tabel array en loop
*/

//variabele aanmaken met array vakken
var subjects = ["REA", "COM", "PO","TV", "NL", "ENG", "REK", "BUR"];



//cijfers in array zetten beroepsvakken
var gradesREA = [8.5, 10.0, 7.4, 8.1];
var gradesCOM = [8.0, 8.0, 6.0, 8.9];
var gradesPO = [9.4, 6.4];
var gradesTV = [8.7, 6.7];
//AVO
var gradesNL = [8.0, 7.0];
var gradesEN = [10.0, 9.7];
var gradesREK = [8.1, 6.0];
var gradesBUR = [8.0];

//functie aanmaken die het gemiddelde berekent
function average(mySubject)
{
    var averageGrade = 0;
    //aantal cijfers van vak
    for(var i = 0; i < mySubject.length; i++)
    {
        averageGrade += mySubject[i];
    }
    //uitkomst van het gemiddelde
    return (averageGrade / mySubject.length);
}



//Realiseren

//variabele aanmaaken
var table = "<tr>";
//row in tabel aanspreken
table = "<tr>";
//tablehead invullen met eerste vak in array
table = "<th>" + subjects[0] + "</th>";
//loopje die doorgaat tot de lengte van het aantal cijfers in array
for(var i = 0; i < gradesREA.length; i++)
{
    //td invullen met de cijfers van rea array
    table += "<td>" + gradesREA[i] + "</td>";
}
//functie aanroepen die gemiddelde berekent van array
table += "<td>" + average(gradesREA)+ "</td>";
//einde van table row
table += "</tr>";

//Computervaardigheden

table += "<tr>";
table += "<th>" + subjects[1] + "</th>";
for(var i = 0; i < gradesCOM.length; i++)
{
    table += "<td>" + gradesCOM[i] + "</td>";
}
//tofixed zorgt ervoor dat er maar 1 getal achter de komma komt
table += "<td>" + average(gradesCOM).toFixed(1)+ "</td>";
table += "</tr>";


//Plannen en Ontwerpen
table += "<tr>";
table += "<th>" + subjects[2] + "</th>";
for(var i = 0; i < gradesPO.length; i++)
{
    table += "<td colspan=2>" + gradesPO[i] + "</td>";
}
table += "<td>" + average(gradesPO).toFixed(1) + "</td>";
table += "</tr>";

//Testen en verbeteren
table += "<tr>";
table += "<th>" + subjects[3] + "</th>";
for(var i = 0; i < gradesTV.length; i++)
{
    table += "<td colspan=2>" + gradesTV[i] + "</td>";
}
table += "<td>" + average(gradesTV).toFixed(1) + "</td>";
table += "</tr>";

document.getElementById("tbodyBeroep").innerHTML = table;



//AVO NL
//variabele aanmaaken
var table2 = "<tr>";
//row in tabel aanspreken
table2 = "<tr>";
//tablehead invullen met eerste vak in array
table2 = "<th>" + subjects[4] + "</th>";
//loopje die doorgaat tot de lengte van het aantal cijfers in array
for(var i = 0; i < gradesNL.length; i++)
{
    //td invullen met de cijfers van rea array
    table2 += "<td>" + gradesNL[i] + "</td>";
}
//functie aanroepen die gemiddelde berekent van array
table2 += "<td>" + average(gradesNL)+ "</td>";
//einde van table row
table2 += "</tr>";


//Engels
table2 += "<tr>";
table2 += "<th>" + subjects[5] + "</th>";
for(var i = 0; i < gradesEN.length; i++)
{
    table2 += "<td>" + gradesEN[i] + "</td>";
}
table2 += "<td>" + average(gradesEN).toFixed(1) + "</td>";
table2 += "</tr>";


//Rekenen
table2 += "<tr>";
table2 += "<th>" + subjects[6] + "</th>";
for(var i = 0; i < gradesREK.length; i++)
{
    table2 += "<td>" + gradesREK[i] + "</td>";
}
table2 += "<td>" + average(gradesREK).toFixed(1) + "</td>";
table2 += "</tr>";

//Burgerschap
table2 += "<tr>";
table2 += "<th>" + subjects[7] + "</th>";
for(var i = 0; i < gradesBUR.length; i++)
{
    table2 += "<td colspan=2>" + gradesBUR[i] + "</td>";
}
table2 += "<td>" + average(gradesBUR).toFixed(1) + "</td>";
table2 += "</tr>";

document.getElementById("tbodyAvo").innerHTML = table2;
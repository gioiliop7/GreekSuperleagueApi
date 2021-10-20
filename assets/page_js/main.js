$(document).ready(function(){
    const code_teams = `
    <code style="text-align:left;">
    {
        <br>
        "_id": "616eef56b7abe91c341edb0e",
        <br>
        "city": "Piraeus",
        <br>
        "titles": 46,
        <br>
        "teams": "Olympiacos",
        <br>
        "updated": "19/10/2021"
        <br>
    },<br>
    { <br>
        "_id": "616eef56b7abe91c341edb0f",<br>
        "city": "Athens",<br>
        "titles": 32,<br>
        "teams": ["Panathinaikos","AEK"], <br>
        "updated": "19/10/2021"<br>
    }
    </code>`
    $('.teams').click(function(){
        $('.right').html(code_teams);
    })
})
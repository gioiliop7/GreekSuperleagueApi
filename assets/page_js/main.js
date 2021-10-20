$(document).ready(function(){
    const code_teams = `
    <code>
    {<br>
        "_id": "616f06449c3aa80d0fa8d083", <br>
        "team": "Olympiacos",<br>
        "seasons": 63,<br>
        "city": "Piraeus,Athens",<br>
        "founded": 1925,<br>
        "full_name": "Ολυμπιακός Σύνδεσμος Φιλάθλων Πειραιώς,Olympiakós Sýndesmos Filáthlo̱n Peiraió̱s",<br>
        "updated": "19/10/2021"<br>
    },<br>
    {<br>
        "_id": "616f06449c3aa80d0fa8d084",<br>
        "team": "Panathinaikos",<br>
        "seasons": 63,<br>
        "city": "Athens",<br>
        "founded": 1908,<br>
        "full_name": "Ποδοσφαιρική Ανώνυμη Εταιρία (Π.Α.Ε.) Παναθηναϊκός Αθλητικός Όμιλος (Π.Α.Ο.) Αθηνών Football Association Panathinaikos Athletic Club of Athens",<br>
        "updated": "19/10/2021"<br>
    },
    </code>`
    $('.teams').click(function(){
        $('.right').html(code_teams);
    });
    const code_championships = `
    <code>
    {
        <br>
        "_id": "616e9e0a656707c7a96dc3b5",<br>
        "team": "PAOK",<br>
        "season": "2018-2019",<br>
        "points_to_win": 80,<br>
        "runner_up": "Olympiacos"<br>
    },<br>
    {<br>
        "_id": "616e9e49656707c7a96dc3b6",<br>
        "team": "Olympiacos",<br>
        "season": "2019-2020",<br>
        "points_to_win": 91,<br>
        "runner_up": "PAOK"<br>
    },
    </code>`
    $('.championships').click(function(){
        $('.right').html(code_championships);
    });
    const code_1stscorers = `
    <code>
    {<br>
        "_id": "616ea029656707c7a96dc3b8",<br>
        "name": "Nikos Aggelakis",<br>
        "season": "1927-1928",<br>
        "goals": 4,<br>
        "team": "Aris"<br>
    },<br>
    {<br>
        "_id": "616ea088656707c7a96dc3b9",<br>
        "name": "Aggelos Messaris",<br>
        "season": "1929-1930",<br>
        "goals": 7,<br>
        "team": "Panathinaikos"<br>
    },<br>
    </code>`
    $('.first-scorers').click(function(){
        $('.right').html(code_1stscorers);
    });
    const code_top_scorers = `
    <code>
    {<br>
        "_id": "616ee5ee3d584bd037f7e0f5",<br>
        "name": "Nikos Liberopoulos",<br>
        "period_playing": "1998-1999,2010–2012",<br>
        "goals": 167,<br>
        "teams": "AEK Athens/Panathinaikos/Kalamata",<br>
        "updated": "19/10/2021"<br>
    },<br>
    {<br>
        "_id": "616ee892448c03ba632549d2",<br>
        "name": "Nikos Anastopoulos",<br>
        "period_playing": "1977–1987,1988–1994",<br>
        "goals": 179,<br>
        "teams": "Olympiacos/Panionios/Ionikos",<br>
        "updated": "19/10/2021"<br>
    },
    </code>`
    $('.top-scorers').click(function(){
        $('.right').html(code_top_scorers);
    });
    const code_champions = `
    <code>
    {<br>
        "_id": "616ee9cb6544e338d509e1f4",<br>
        "team": "Olympiacos",<br>
        "champions": 46,<br>
        "updated": "19/10/2021"<br>
    },<br>
    {<br>
        "_id": "616ee9cb6544e338d509e1f6",<br>
        "team": "AEK Athens",<br>
        "champions": 12,<br>
        "updated": "19/10/2021"<br>
    },<br>
    {<br>
        "_id": "616ee9cb6544e338d509e1f5",<br>
        "team": "Panathinaikos",<br>
        "champions": 20,<br>
        "updated": "19/10/2021"<br>
    },<br>
    </code>`
    $('.champions').click(function(){
        $('.right').html(code_champions);
    });
    const code_city = `
    <code>
    { <br>
        "_id": "616eef56b7abe91c341edb0e",<br>
        "city": "Piraeus",<br>
        "titles": 46,<br>
        "teams": "Olympiacos",<br>
        "updated": "19/10/2021"<br>
    },
    {
        "_id": "616eef56b7abe91c341edb0f",<br>
        "city": "Athens",<br>
        "titles": 32,<br>
        "teams": [
            "Panathinaikos",
            "AEK"
        ],
        "updated": "19/10/2021"<br>
    },<br>
    </code>`
    $('.city').click(function(){
        $('.right').html(code_city);
    });
});

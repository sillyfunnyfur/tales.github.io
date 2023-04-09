var singleChar = "<div class='character'></div>";
var singleCheckWrap = "<div class='characterCheckWrap'></div>";
var selectAllWrap = "<div class='selectAllWrap'></div>";
var checked = []
var singles = true;
var duos = true;
var baseSeasons = true;
var otherSeasons = true;

function randint(maxInt) {
    return Math.floor(Math.random() * maxInt);
}

function gameRoll() {
    var currGame = 0;
    if (!checked.includes(1)) {
        return 0;
    }
    do {
        currGame = randint(allGames.length);
    } while (checked[currGame] == 0);
    return currGame;
}

function roll() {
    var game = gameRoll();
    var gameId = allGamesIds[game];
    var numCharacters = allCharacters[gameId].length;
    var character = allCharacters[gameId][randint(numCharacters)];
    var allSentences = [];
    var allSeasons = [];
    if (singles) {
        allSentences = allSentences.concat(sentences);
    }
    if (duos) {
        allSentences = allSentences.concat(duoSentences);
    }
    if (baseSeasons) {
        allSeasons = allSeasons.concat(baseSeasonsList);
    }
    if (otherSeasons) {
        allSeasons = allSeasons.concat(otherSeasonsList);
    }
    var newSentence = allSentences[randint(allSentences.length)];
    var season = allSeasons[randint(allSeasons.length)];
    newSentence = newSentence.replace(characterPlaceholder, character);
    newSentence = newSentence.replace(seasonPlaceholder, season);
    if (duos) {
        var secondCharacter;
        do {
            secondCharacter = allCharacters[gameId][randint(numCharacters)];
        } while (secondCharacter == character)
        newSentence = newSentence.replace(duoPlaceholder, secondCharacter);
    }
    $("#result").html("\"" + newSentence + "\"");
}

$(document).on("change", "#single", function() {
    singles = $(this).is(":checked");
});

$(document).on("change", "#duo", function() {
    duos = $(this).is(":checked");
});

$(document).on("change", "#baseSeasons", function() {
    baseSeasons = $(this).is(":checked");
});

$(document).on("change", "#seasonsOfLove", function() {
    otherSeasons = $(this).is(":checked");
});


$(document).on("click", "#generate", function() {
    roll();
});

$(document).on("click", "#settingsButton", function() { // open settings modal
    openPopup("#changeSettings");
});

$(document).on("change", ".characterCheck", function() { // add/remove characters
    if($(this).is(":checked")) {
        checked[$(this).attr("id")] = 1;
    } else {
        checked[$(this).attr("id")] = 0;
    }
});

$(document).on("change", ".selectAll", function() { // add/remove all characters
    if($(this).is(":checked")) {
        $(".characterCheck").each( function() {
            if (!$(this).is(":checked" )) {
                $(this).prop('checked', true).change();
            }
        });
    } else {
        $(".characterCheck").each( function() {
            $(this).prop('checked', false).change();
        });
    }
});

function openPopup(popup) {
    $(popup).css("display","block");
    $("#overlay").css("opacity", 1);
    $("#overlay").css("visibility", "visible");
    $(popup).css("top", alignPopup($(popup)));
}

function closePopups() {
    $("#modal").css("display", "none");
    $("#charChange").css("display", "none");
    $("#changeSettings").css("display", "none");
    $("#helpMenu").css("display", "none");
    $("#screenshotShow canvas").remove();
}

function alignPopup(popup) {
    return Math.floor(($(window).height() - popup.height())/2)+"px";
}

$(document).on("click", function(e) {
    clicked = e.target.id;
    if(clicked == "overlay" || clicked == "modalWrapper" || clicked == "close") { // close modals
        closePopups();
        $("#screenshotShow").css("display", "none");
        $("#overlay").css("opacity", 0);
        $("#overlay").css("visibility", "hidden");
    }
});

function changeGame() {
    $(".character").each( function() {
        $(this).remove();
    });
    $(".characterCheckWrap").each( function() {
        $(this).remove();
    });
    // just in case there's more than one...
    $(".selectAllWrap").each( function() {
        $(this).remove();
    });
    
    for (var i = 0; i < allGames.length; i++) {     
        $("#checklist div:last-child").after(singleCheckWrap);
        $("#checklist div:last-child").html(allGames[i]+": <input type='checkbox' class='characterCheck "+"game"+i+"' id='"+i+"' >");
        checked.push(1);
    }
    $("#checklist div:last-child").after(selectAllWrap);
    $("#checklist div:last-child").html("Select All: <input type='checkbox' class='selectAll' id='all' >");
    
    $(".selectAll").prop('checked', true).change();
    $(".filterCheck").each( function() {
        $(this).prop('checked', true).change();
    });
    var otherBox = "#" + String(allGames.length - 1);
    $(otherBox).prop('checked', false).change();
}

$(document).ready( function() {
    changeGame();
    roll();
});

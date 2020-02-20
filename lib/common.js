// character images
var singleChar = "<div class='character'></div>";
var singleCheckWrap = "<div class='characterCheckWrap'></div>";
var selectAllWrap = "<div class='selectAllWrap'></div>";
var gameFe = [	["fe", 0, ""],
                ["sd", 58, "Shadow Dragon"],
				["sde", 5, "Shadow Dragon Extra"],
                ["mote2", 44, "Mystery of the Emblem Book 2"],
                ["mote1", 30, "Mystery Book 1 and Extra"],
                ["nm", 77, "New Mystery of the Emblem"],
                ["nme", 7, "New Mystery Extra"],
                ["sov", 33, "Shadows of Valentia"],
                ["sove", 14, "Shadows of Valentia Extra"],
                ["ghw1", 23, "Genealogy Part 1"],
                ["ghw1e", 26, "Genealogy Part 1 Extra"],
                ["ghw2", 39, "Genealogy Part 2"],
                ["ghw2e", 23, "Genealogy Part 2 Extra"],
                ["th776", 51, "Thracia 776"],
                ["th776e", 27, "Thracia 776 Extra"],
                ["bib", 53, "Binding Blade"],
                ["bibe", 21, "Binding Blade Extra"],
                ["bla", 43, "Blazing Blade"],
                ["blae", 33, "Blazing Blade Extra"],
                ["sto", 33, "Sacred Stones"],
                ["stoe", 12, "Sacred Stones Extra"],
                ["por", 45, "Path of Radiance"],
                ["pore", 13, "Path of Radiance Extra"],
                ["rd", 72, "Radiant Dawn"],
                ["rde", 22, "Radiant Dawn Extra"],
                ["awa", 44, "Awakening"],
                ["awae", 10, "Awakening Extra"],
                ["frev", 20, "Fates Neutral"],
                ["fbr", 30, "Fates Birthright"],
                ["fcq", 31, "Fates Conquest"],
                ["fex", 14, "Fates Extra"],
                ["thrh", 52, "Three Houses"],
                ["thrhsp", 63, "Three Houses Spoilers"],
                ["tms", 18, "Tokyo Mirage Sessions"],
                ["hoc", 25, "Heroes"],
                ["woc", 4, "Warriors"],
                ["tlp", 55, "The Last Promise"],
                ];
// ["trs", 1, "TearRing Saga"],

var currentGame;
var currentGameChars = gameFe;
var characters;
var characterId;

$(document).on("click", "#characters", function() { // open game changer modal
    openPopup("#charChange");
});

$(document).on("click", "#help", function() { // open help modal
    openPopup("#helpMenu");
});

/*
$(function() {
    $( document ).tooltip({
        show: false,
        hide: false,
        position: { my: "top", at: "right bottom" }
    });
});
*/

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
    $("#helpMenu").css("display", "none");
    $("#screenshotShow canvas").remove();
}

function alignPopup(popup) {
    return Math.floor(($(window).height() - popup.height())/2)+"px";
}

// http://stackoverflow.com/a/3971432 thanks Zack Katz :D
function rgb2hex(rgb) {
    rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

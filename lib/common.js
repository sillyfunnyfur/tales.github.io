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
                ["pore", 14, "Path of Radiance Extra"],
                ["rd", 72, "Radiant Dawn"],
                ["rde", 22, "Radiant Dawn Extra"],
                ["awa", 44, "Awakening"],
                ["awae", 10, "Awakening Extra"],
                ["frev", 16, "Fates Neutral"],
                ["fbr", 26, "Fates Birthright"],
                ["fcq", 25, "Fates Conquest"],
                ["fex", 29, "Fates Extra"],
                ["thrh", 53, "Three Houses"],
                ["thrhsp", 71, "Three Houses Spoilers"],
                ["tms", 18, "Tokyo Mirage Sessions"],
                ["hoc", 29, "Heroes"],
                ["woc", 4, "Warriors"],
                ["bsfe", 22, "BSFE Archanea Saga"],
                ["tlp", 55, "The Last Promise"],
                ["trs", 61, "TearRing Saga"],
                ["fe1", 58, "Shadow Dragon (1990)"],
                ["fe2", 34, "Gaiden"],
                ["pember", 59, "Project Ember"],
                ];

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

// https://stackoverflow.com/a/3971432 thanks Zack Katz :D
function rgb2hex(rgb) {
    rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

// For hamburger menu, taken from https://codepen.io/mranenko/pen/wevamj
(function() {

	var hamburger = {
		nav: document.querySelector('#nav'),
		navToggle: document.querySelector('.nav-toggle'),

		initialize() {
			this.navToggle.addEventListener('click',
        () => { this.toggle(); });
		},

		toggle() {
			this.navToggle.classList.toggle('expanded');
			this.nav.classList.toggle('expanded');
		},
	};

	hamburger.initialize();

}());

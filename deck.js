
var cards = new Array ();

var cardsLeftToDeal = 7;
var cardsDealt = 0;

cards[00] = "Card_001";
cards[01] = "Card_002";
cards[02] = "Card_003";
cards[03] = "Card_004";
cards[04] = "Card_005";
cards[05] = "Card_006";
cards[06] = "Card_007";
cards[07] = "Card_008";
cards[08] = "Card_009";
cards[09] = "Card_010";
cards[10] = "Card_011";
cards[11] = "Card_012";
cards[12] = "Card_013";
cards[13] = "Card_014";
cards[14] = "Card_015";
cards[15] = "Card_016";
cards[16] = "Card_017";
cards[17] = "Card_018";
cards[18] = "Card_019";
cards[19] = "Card_020";
cards[20] = "Card_021";
cards[21] = "Card_022";
cards[22] = "Card_023";
cards[23] = "Card_024";
cards[24] = "Card_025";
cards[25] = "Card_026";
cards[26] = "Card_027";
cards[27] = "Card_028";
cards[28] = "Card_029";
cards[29] = "Card_030";
cards[30] = "Card_031";
cards[31] = "Card_032";
cards[32] = "Card_033";
cards[33] = "Card_034";
cards[34] = "Card_035";
cards[35] = "Card_036";
cards[36] = "Card_037";
cards[37] = "Card_038";
cards[38] = "Card_039";
cards[39] = "Card_040";
cards[40] = "Card_041";
cards[41] = "Card_042";
cards[42] = "Card_043";
cards[43] = "Card_044";
cards[44] = "Card_045";
cards[45] = "Card_046";
cards[46] = "Card_047";
cards[47] = "Card_048";
cards[48] = "Card_049";
cards[49] = "Card_050";
cards[50] = "Card_051";
cards[51] = "Card_052";
cards[52] = "Card_053";
cards[53] = "Card_054";
cards[54] = "Card_055";
cards[55] = "Card_056";
cards[56] = "Card_057";
cards[57] = "Card_058";
cards[58] = "Card_059";
cards[59] = "Card_060";
cards[60] = "Card_061";
cards[61] = "Card_062";
cards[62] = "Card_063";
cards[63] = "Card_064";
cards[64] = "Card_065";
cards[65] = "Card_066";
cards[66] = "Card_067";
cards[67] = "Card_068";
cards[68] = "Card_069";
cards[69] = "Card_070";
cards[70] = "Card_071";
cards[71] = "Card_072";
cards[72] = "Card_073";
cards[73] = "Card_074";
cards[74] = "Card_075";
cards[75] = "Card_076";
cards[76] = "Card_077";
cards[77] = "Card_078";


var random = function() {
  	return Math.round(Math.random() * (77-cardsDealt));
};

var randomOrient = function() {
	return Math.round(Math.random());
};

var removeCard = function(k) {
	for (var j=k; j<cards.length; j++) {
		cards[j] = cards[j+1];
	}
	cardsLeftToDeal--;
	cardsDealt++;
};

var dealCard = function(i) {
	if (cardsLeftToDeal == 0) {
		return false;
	} else {
		var img = document.createElement("img");
		var cardJustDealt = cards[i];
		var orient = randomOrient();
		$(img).addClass(cardJustDealt);
		img.src = ("images/deck/" + cards[i] + ".jpg");
		img.alt = cards[i];

		if (orient === 1) {
			$(img).addClass("faceDown");
			document.getElementById("cards").appendChild(img);
			removeCard(i);
		} else {
			$(img).addClass("faceUp");
			document.getElementById("cards").appendChild(img);
			removeCard(i);
		}
	}
};


$(document).ready(function() {
	$('#deal').click(function() {
		console.log(dealCard(random()));
	});
	$('#shuffle').click(function() {
		location.reload();
	});
});

// most of the codes are taken from https://codepen.io/wesleysmits/pen/KKRBead

let now = 0;

(() => {
	if (!"speechSynthesis" in window) {
		alert("Sorry, your browser doesn't support text to speech!");
		return;
	}

	const running = document.getElementById("running");
	const nowtext = document.getElementById("nowtext");
	const actiontext = document.getElementById("actiontext");

	const setup = document.getElementById("setup");
	const button = document.getElementById("start");

	const synth = window.speechSynthesis;

    running.style.display = "none";

	button.addEventListener("click", () => {
        console.log("hai");

	    const start_second = document.getElementById("start_second").value;
        setup.style.display = "none";
        running.style.display = "";

        now = parseInt(start_second);
        console.log(now);

        setTimeout(theLoop, 999);

	});

    /////////////////////
    //

    const m = 90;
    var actions = new Map();
    actions.set(40, "prep courier and items to buy");
    actions.set(m, "match start");

    actions.set(m+3*60, "bounty");
    actions.set(m+6*60, "bounty");
    actions.set(m+9*60, "bounty");

    actions.set(m+1*60+10, "pull");
    actions.set(m+2*60+10, "pull");
    actions.set(m+3*60+10, "pull");
    actions.set(m+4*60+10, "pull");
    actions.set(m+5*60+10, "pull");
    actions.set(m+6*60+10, "pull");

    actions.set(m+1*60+40, "pull or stack");
    actions.set(m+2*60+40, "pull or stack");
    actions.set(m+3*60+40, "pull or stack");
    actions.set(m+4*60+40, "pull or stack");
    actions.set(m+5*60+40, "pull or stack");
    actions.set(m+6*60+40, "pull or stack");

    actions.set(m+5*60+20, "rune or gank");
    actions.set(m+7*60+20, "rune or gank");
    actions.set(m+9*60+20, "rune or gank");

    actions.set(m+11*60+20, "mid game, can leave core");


    function theLoop() {
        nowtext.value = now;
        if (actions.has(now)) {
            var a = actions.get(now);
            actiontext.value = a;
		    textToSpeech(a);
        }

        now = now + 1;
        if (now <= m+11*60+20) {
            setTimeout(theLoop, 990);
        }
    }

    /////////////////////
    //

	function textToSpeech(text) {
		const msg = new SpeechSynthesisUtterance();
		msg.text = text;

		synth.speak(msg);
	}

})();

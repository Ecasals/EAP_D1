/*document.getElementById("c1_ship_anm").onclick = function () {
    "use strict";
    if (document.getElementById("c1_lh").className === "c1_lh") {
        document.getElementById("c1_lh").className = "c1_lh_back";
        document.getElementById("text_joe_13").className = "text_joe_13_end";
        document.getElementById("intro").style.display = "none";
        document.getElementById("cap_1").style.zIndex= "1";
    }
};*/
document.getElementById("text_joe_13").onclick = function () {
    if (document.getElementById("text_joe_13").className === "text_joe_13_mid") {
        document.getElementById("text_joe_13").className = "text_joe_13_end";
        document.getElementById("intro").style.display = "none";
        document.getElementById("cap_1").style.zIndex = "1";
        document.getElementById("c1_lh").className = "c1_lh_back";
    }
};
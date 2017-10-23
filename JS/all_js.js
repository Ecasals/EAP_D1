var weaves = document.getElementById("main_theme_e1");
var joe = document.getElementById("joe_cough");
var drawer = document.getElementById("drawer_sound");
var lamp = document.getElementById("light_sound");
var lamp = document.getElementById("conch_sound");

document.getElementById("text_cub_1").onclick = function () {
    "use strict";
    if (document.getElementById("text_cub_1").className === "text_1_anm") {
        document.getElementById("text_cub_1").className = "text_1_anm_end";
        document.getElementById("RP_start").className = "RP_anm_end";
        document.getElementById("background").className = "off_back";
        document.getElementById("text_joe_2").className = "text_joe_2_end";
        document.getElementById("main_theme_e1").play();
        document.getElementById("xat_auidio").play();
    }
};
document.getElementById("text_joe_2").onclick = function () {
    "use strict";
    if (document.getElementById("text_joe_2").className === "text_joe_2_end") {
        document.getElementById("text_joe_2").className = "text_joe_2_up";
        document.getElementById("JOE_start").className = "joe_set_3";
        document.getElementById("RP_start").className = "RP_set_3";
        document.getElementById("text_rp_3").className = "text_rp_3_mid";
        document.getElementById("xat_auidio").play();
        $(document).ready(function () {
            $("#text_cub_1").remove();
        });
    }
};
document.getElementById("text_rp_3").onclick = function () {
    "use strict";
    if (document.getElementById("text_rp_3").className === "text_rp_3_mid") {
        document.getElementById("text_rp_3").className = "text_rp_3_end";
        document.getElementById("text_joe_4").className = "text_joe_4_mid";
        document.getElementById("JOE_start").className = "JOE_set_4";
        document.getElementById("RP_start").className = "RP_set_e3_4";
        document.getElementById("xat_auidio").play();
        $(document).ready(function () {
            $("#text_joe_2").remove();
        });
    }
};
document.getElementById("text_joe_4").onclick = function () {
    "use strict";
    if (document.getElementById("text_joe_4").className === "text_joe_4_mid") {
        document.getElementById("text_joe_4").className = "text_joe_4_end";
        document.getElementById("text_rp_e2").className = "text_rp_e2_up";
        document.getElementById("RP_start").className = "RP_set_e3";
        document.getElementById("back_img_1").style.backgroundImage = "url(media/IMG/doc_ex/Mocha_Dapper_1680.jpg)";
        document.getElementById("back_img_1").className = "back_img_1_end";
        document.getElementById("xat_auidio").play();
        $(document).ready(function () {
            $("#text_rp_3").remove();
        });
    }
};
document.getElementById("text_rp_e2").onclick = function () {
    "use strict";
    if (document.getElementById("text_rp_e2").className === "text_rp_e2_up") {
        document.getElementById("text_rp_e2").className = "text_rp_e2_end";
        document.getElementById("text_joe_5").className = "text_joe_5_mid";
        document.getElementById("RP_start").className = "RP_set_e3_5";
        document.getElementById("JOE_start").className = "joe_set_e3_5";
        document.getElementById("chair").className = "chair_e3";
        document.getElementById("back_img_1").className = "back_img_1";
        document.getElementById("joe_sound").className = "joe_sound_p2";
        document.getElementById("xat_auidio").play();
        $(document).ready(function () {
            $("#text_joe_4").remove();
        });
    }
};
document.getElementById("text_joe_5").onclick = function () {
    "use strict";
    if (document.getElementById("text_joe_5").className === "text_joe_5_mid") {
        document.getElementById("text_joe_5").className = "text_joe_5_end";
        document.getElementById("text_joe_6").className = "text_joe_6_mid";
        document.getElementById("RP_start").className = "RP_set_e3_6";
        document.getElementById("JOE_start").className = "joe_set_e3_6";
        document.getElementById("back_img_1").style.backgroundImage = "url(media/IMG/doc_ex/Os_Filhos_de_Pindorama._Cannibalism_in_Brazil_in_1557.jpg)";
        document.getElementById("xat_auidio").play();
        $(document).ready(function () {
            $("#text_rp_e2").remove();
        });
    }
};
document.getElementById("text_joe_6").onclick = function () {
    "use strict";
    if (document.getElementById("text_joe_6").className === "text_joe_6_mid") {
        document.getElementById("text_joe_6").className = "text_joe_6_end";
        document.getElementById("text_joe_7").className = "text_joe_7_mid";
        document.getElementById("RP_start").className = "RP_set_e3_7";
        document.getElementById("JOE_start").className = "joe_set_e3_7";
        document.getElementById("xat_auidio").play();
        $(document).ready(function () {
            $("#text_joe_5").remove();
        });
    }
};
document.getElementById("text_joe_7").onclick = function () {
    "use strict";
    if (document.getElementById("text_joe_7").className === "text_joe_7_mid") {
        document.getElementById("text_joe_7").className = "text_joe_7_end";
        document.getElementById("text_rp_8").className = "text_rp_8_mid";
        document.getElementById("RP_start").className = "RP_set_e3_8";
        document.getElementById("JOE_start").className = "joe_set_e3_8";
        document.getElementById("xat_auidio").play();
        $(document).ready(function () {
            $("#text_joe_6").remove();
        });
    }
};
document.getElementById("text_rp_8").onclick = function () {
    "use strict";
    if (document.getElementById("text_rp_8").className === "text_rp_8_mid") {
        document.getElementById("text_rp_8").className = "text_rp_8_end";
        document.getElementById("text_rp_9").className = "text_rp_9_mid";
        document.getElementById("RP_start").className = "RP_set_e5";
        document.getElementById("back_img_1").className = "back_img_1_end";
        document.getElementById("cup").style.display = "block";
        document.getElementById("xat_auidio").play();
        $(document).ready(function () {
            $("#text_joe_7").remove();
        });
    }
};
document.getElementById("text_rp_9").onclick = function () {
    "use strict";
    if (document.getElementById("text_rp_9").className === "text_rp_9_mid") {
        document.getElementById("text_rp_9").className = "text_rp_9_end";
        document.getElementById("text_joe_8").className = "text_joe_8_mid";
        document.getElementById("RP_start").className = "RP_set_e5_9";
        document.getElementById("JOE_start").className = "joe_set_e3_9";
        document.getElementById("back_img_1").className = "back_img_1";
        document.getElementById("smoke").style.display = "block";
        document.getElementById("xat_auidio").play();
        $(document).ready(function () {
            $("#text_rp_8").remove();
        });
    }
};
document.getElementById("text_joe_8").onclick = function () {
    "use strict";
    if (document.getElementById("text_joe_8").className === "text_joe_8_mid") {
        document.getElementById("text_joe_8").className = "text_joe_8_end";
        document.getElementById("text_rp_10").className = "text_rp_10_mid";
        document.getElementById("RP_start").className = "RP_set_e5_10";
        document.getElementById("JOE_start").className = "joe_set_e3_10";
        document.getElementById("xat_auidio").play();
        $(document).ready(function () {
            $("#text_rp_9").remove();
        });
    }
};
document.getElementById("text_rp_10").onclick = function () {
    "use strict";
    if (document.getElementById("text_rp_10").className === "text_rp_10_mid") {
        document.getElementById("text_rp_10").className = "text_rp_10_end";
        document.getElementById("text_joe_9").className = "text_joe_9_mid";
        document.getElementById("RP_start").className = "RP_set_e5_11";
        document.getElementById("JOE_start").className = "joe_set_e3_11";
        document.getElementById("back_img_1").style.backgroundImage = "url(media/IMG/doc_ex/back_img_3.jpg)";
        document.getElementById("xat_auidio").play();
        $(document).ready(function () {
            $("#text_joe_8").remove();
        });
    }
};
document.getElementById("text_joe_9").onclick = function () {
    "use strict";
    if (document.getElementById("text_joe_9").className === "text_joe_9_mid") {
        document.getElementById("text_joe_9").className = "text_joe_9_end";
        document.getElementById("text_rp_11").className = "text_rp_11_mid";
        document.getElementById("RP_start").className = "RP_set_e7";
        document.getElementById("back_img_1").className = "back_img_2_end";
        document.getElementById("xat_auidio").play();
        $(document).ready(function () {
            $("#text_rp_10").remove();
        });
    }
};
var myVar = setInterval(pirate, 4000);

function pirate() {
    "use strict";
    if (document.getElementById("text_joe_9").className === "text_joe_9_end") {
        document.getElementById("RP_start").className = "RP_set_e7_pirate";
        document.getElementById("RP_face").className = "RP_face_up";
        document.getElementById("RP_pirate_glow").style.display = "block";
    }
};
// DICOVERY 1 //
document.getElementById("RP_face").onclick = function () {
    "use strict";
    if (document.getElementById("RP_face").className === "RP_face_up") {
        document.getElementById("arthur_g").className = "arthur_anm_end";
        document.getElementById("background").className = "off_back_insta";
        document.getElementById("RP_pirate_glow").style.display = "none";
        document.getElementById("discovery_auidio").play();
        clearInterval(myVar);
        $(document).ready(function () {
            $("#text_joe_9").remove();
        });
    }
};
document.getElementById("text_rp_11").onclick = function () {
    "use strict";
    if (document.getElementById("text_rp_11").className === "text_rp_11_mid") {
        document.getElementById("text_rp_11").className = "text_rp_11_end";
        document.getElementById("text_rp_12").className = "text_rp_12_mid";
        document.getElementById("RP_pirate_glow").style.display = "none";
        document.getElementById("text_rp_12").style.transition = "ease 1s";
        document.getElementById("background").className = "main_back";
        document.getElementById("text_rp_12").className = "text_rp_12_mid";
        document.getElementById("RP_start").className = "RP_set_e7_2";
        document.getElementById("RP_start").style.transition = "ease 1s";
        document.getElementById("back_img_1").className = "back_img_1";
        document.getElementById("back_img_1").style.backgroundPosition = "center";
        document.getElementById("back_img_1").style.backgroundImage = "url(media/IMG/doc_ex/vida_pi.jpg)";
        document.getElementById("RP_face").className = "RP_face";
        document.getElementById("xat_auidio").play();
        clearInterval(myVar);
        $(document).ready(function () {
            $("#text_joe_9").remove();
            $(".RP_set_e7_pirate").remove();
        });
    }
};
document.getElementById("exit_icon").onclick = function () {
    "use strict";
    if (document.getElementById("arthur_g").className === "arthur_anm_end") {
        document.getElementById("arthur_g").className = "arthur_anm";
        document.getElementById("text_rp_11").className = "text_rp_11_end";
        document.getElementById("text_rp_12").className = "text_rp_12_mid";
        document.getElementById("background").className = "main_back";
        document.getElementById("img_size_icon_1_ag").className = "img_size_1_s_ag";
        document.getElementById("img_size_icon_2_ag").className = "img_size_2_s_ag";
        document.getElementById("img_back_1_ag").className = "img_back_s_1_ag";
        document.getElementById("img_back_2_ag").className = "img_back_s_2_ag";
        document.getElementById("arthur_img_1").className = "arthur_img_1_s";
        document.getElementById("arthur_img_2").className = "arthur_img_2_s";
        document.getElementById("RP_start").className = "RP_set_e7_2";
        document.getElementById("back_img_1").className = "back_img_1";
        document.getElementById("back_img_1").style.backgroundPosition = "center";
        document.getElementById("back_img_1").style.backgroundImage = "url(media/IMG/doc_ex/vida_pi.jpg)";
        document.getElementById("clue_1").className = "game_clue_1_y";
        document.getElementById("RP_face").className = "RP_face";
    }
};
document.getElementById("text_rp_12").onclick = function () {
    "use strict";
    if (document.getElementById("text_rp_12").className === "text_rp_12_mid") {
        document.getElementById("text_rp_12").className = "text_rp_12_end";
        document.getElementById("text_rp_13").style.transition = "ease 1s";
        document.getElementById("text_rp_13").className = "text_rp_13_mid";
        document.getElementById("background").className = "off_back";
        document.getElementById("back_img_1").className = "back_img_1_end";
        document.getElementById("RP_start").className = "RP_set_e7_tiger";
        document.getElementById("RP_face_2").className = "RP_face_up_2";
        document.getElementById("RP_tiger_glow").style.display = "block";
        document.getElementById("xat_auidio").play();
        $(document).ready(function () {
            $("#text_rp_11").remove();
        });
    }
};
document.getElementById("clue_1").onclick = function () {
    "use strict";
    if (document.getElementById("clue_1").className === "game_clue_1_y") {
        document.getElementById("arthur_gc").className = "arthur_anm_end";
        document.getElementById("clue_1").style.WebkitAnimation = "blink_1_off 0s 1";
        document.getElementById("RP_tiger_glow").style.display = "none";
        $(document).ready(function () {
            $("#arthur_g").remove();
        });
    }
};
document.getElementById("exit_icon_gc").onclick = function () {
    "use strict";
    if (document.getElementById("arthur_gc").className === "arthur_anm_end") {
        document.getElementById("arthur_gc").className = "arthur_anm";
        document.getElementById("img_size_icon_1_gc").className = "img_size_1_s_ag";
        document.getElementById("img_size_icon_2_gc").className = "img_size_2_s_ag";
        document.getElementById("img_back_1_gc").className = "img_back_s_1_ag";
        document.getElementById("img_back_2_gc").className = "img_back_s_2_ag";
        document.getElementById("arthur_gc_img_1").className = "arthur_img_1_s";
        document.getElementById("arthur_gc_img_2").className = "arthur_img_2_s";
    }
};
document.getElementById("text_rp_13").onclick = function () {
    "use strict";
    if (document.getElementById("text_rp_13").className === "text_rp_13_mid") {
        document.getElementById("text_rp_13").className = "text_rp_13_end";
        document.getElementById("text_rp_13").style.transition = "ease 1s";
        document.getElementById("RP_start").className = "RP_set_e7_3";
        document.getElementById("back_img_1").className = "back_img_1";
        document.getElementById("text_rp_14").className = "text_rp_14_mid";
        document.getElementById("text_rp_14").style.transition = "ease 1s";
        document.getElementById("background").className = "main_back";
        document.getElementById("RP_start").className = "RP_set_e7_4";
        document.getElementById("RP_tiger_glow").style.display = "none";
        document.getElementById("RP_face_2").className = "RP_face_2";
        document.getElementById("xat_auidio").play();
        $(document).ready(function () {
            $("#text_rp_12").remove();
        });
    }
};
// DISCOVERY 2 //
document.getElementById("RP_face_2").onclick = function () {
    "use strict";
    if (document.getElementById("RP_face_2").className === "RP_face_up_2") {
        document.getElementById("vida_pi").className = "pi_anm_end";
        document.getElementById("img_size_icon_1_pi").style.top = "59%";
        document.getElementById("pi_img_1").style.height = "50%";
        document.getElementById("pi_img_1").style.backgroundImage = "url(media/IMG/tiger_pi.jpg)";
        document.getElementById("clue_1").style.WebkitAnimation = "blink_1_off 0s 1";
        document.getElementById("discovery_auidio").play();
        document.getElementById("RP_tiger_glow").style.display = "none";
        $(document).ready(function () {
            $("#text_rp_12").remove();
        });
    }
};
document.getElementById("exit_icon_pi").onclick = function () {
    "use strict";
    if (document.getElementById("vida_pi").className === "pi_anm_end") {
        document.getElementById("vida_pi").className = "pi_anm";
        document.getElementById("text_rp_14").className = "text_rp_14_mid";
        document.getElementById("background").className = "main_back";
        document.getElementById("pi_img_1").style.height = "50%";
        document.getElementById("pi_img_1").style.width = "27%";
        document.getElementById("pi_img_1").style.margin = "0";
        document.getElementById("text_rp_13").style.transition = "0s";
        document.getElementById("text_rp_13").className = "text_rp_13_end";
        document.getElementById("img_size_icon_1_pi").className = "img_size_1_s_ag";
        document.getElementById("img_back_1_pi").className = "img_back_s_1_ag";
        document.getElementById("pi_img_1").className = "arthur_img_1_s";
        document.getElementById("back_img_1").className = "back_img_1";
        document.getElementById("clue_2").className = "game_clue_2_y";
        document.getElementById("RP_start").className = "RP_set_e7_4";
        document.getElementById("RP_face_2").className = "RP_face_2";
    }
};
document.getElementById("clue_2").onclick = function () {
    "use strict";
    if (document.getElementById("clue_2").className === "game_clue_2_y") {
        document.getElementById("vida_pi_c").className = "arthur_anm_end";
        document.getElementById("img_size_icon_1_pi_c").style.top = "59%";
        document.getElementById("pi_img_1_c").style.height = "50%";
        document.getElementById("pi_img_1_c").style.backgroundImage = "url(media/IMG/tiger_pi.jpg)";
        document.getElementById("img_size_icon_1_pi_c").className = "img_size_1_s_ag";
        document.getElementById("img_back_1_pi_c").className = "img_back_s_1_ag";
        document.getElementById("clue_2").style.WebkitAnimation = "blink_2_off 0s 1";
        document.getElementById("arthur_gc_img_1").className = "arthur_img_1_s";
        $(document).ready(function () {
            $("#vida_pi").remove();
        });
    }
};
document.getElementById("exit_icon_pi_c").onclick = function () {
    "use strict";
    if (document.getElementById("vida_pi_c").className === "arthur_anm_end") {
        document.getElementById("vida_pi_c").className = "arthur_anm";
        document.getElementById("pi_img_1_c").style.height = "50%";
        document.getElementById("pi_img_1_c").style.width = "27%";
        document.getElementById("pi_img_1_c").style.margin = "0";
        document.getElementById("img_size_icon_1_pi_c").className = "img_size_1_s_ag";
        document.getElementById("img_back_1_pi_c").className = "img_back_s_1_ag";
        document.getElementById("pi_img_1_c").className = "arthur_img_1_s";
    }
};
document.getElementById("text_rp_14").onclick = function () {
    "use strict";
    if (document.getElementById("text_rp_14").className === "text_rp_14_mid") {
        document.getElementById("text_rp_14").className = "text_rp_14_end";
        document.getElementById("text_joe_10").className = "text_joe_10_mid";
        document.getElementById("background").className = "off_back";
        document.getElementById("RP_start").className = "RP_set_e5_12";
        document.getElementById("JOE_start").className = "joe_set_e3_12";
        document.getElementById("xat_auidio").play();
        $(document).ready(function () {
            $("#text_rp_13").remove();
        });
    }
};
document.getElementById("text_joe_10").onclick = function () {
    "use strict";
    if (document.getElementById("text_joe_10").className === "text_joe_10_mid") {
        document.getElementById("text_joe_10").className = "text_joe_10_end";
        document.getElementById("text_rp_15").className = "text_rp_15_mid";
        document.getElementById("RP_start").className = "RP_set_e5_13";
        document.getElementById("JOE_start").className = "joe_set_e3_13";
        document.getElementById("xat_auidio").play();
        $(document).ready(function () {
            $("#text_rp_14").remove();
        });
    }
};
document.getElementById("text_rp_15").onclick = function () {
    "use strict";
    if (document.getElementById("text_rp_15").className === "text_rp_15_mid") {
        document.getElementById("text_rp_15").className = "text_rp_15_end";
        document.getElementById("text_joe_11").className = "text_joe_11_mid";
        document.getElementById("RP_start").className = "RP_set_e5_14";
        document.getElementById("JOE_start").className = "joe_set_e3_14";
        document.getElementById("xat_auidio").play();
        $(document).ready(function () {
            $("#text_joe_10").remove();
        });
    }
};
document.getElementById("text_joe_11").onclick = function () {
    "use strict";
    if (document.getElementById("text_joe_11").className === "text_joe_11_mid") {
        document.getElementById("text_joe_11").className = "text_joe_11_end";
        document.getElementById("text_joe_12").className = "text_joe_12_mid";
        document.getElementById("RP_start").className = "RP_set_e5_15";
        document.getElementById("JOE_start").className = "joe_set_e3_15";
        document.getElementById("window_fe").className = "window_fe";
        document.getElementById("window_anm").className = "window_anm_down";
        document.getElementById("window_anm_2").className = "window_anm_2_up";
        document.getElementById("xat_auidio").play();
        $(document).ready(function () {
            $("#text_rp_15").remove();
        });
    }
};
// LAMP //
document.getElementById("lamp_anm").onclick = function () {
    "use strict";
    if (document.getElementById("lamp").className === "lamp_shape") {
        document.getElementById("lamp").className = "lamp_shape_off";
        document.getElementById("lamp_darck").className = "lamp_darck_on";
        document.getElementById("light_sound").play();
        lamp.volume = 0.6;
    }
    else {
        if (document.getElementById("lamp").className === "lamp_shape_off") {
            document.getElementById("lamp").className = "lamp_shape";
            document.getElementById("lamp_darck").className = "lamp_darck";
            document.getElementById("light_sound").play();
            lamp.volume = 0.6;
        }
    }
};
// DESK //
document.getElementById("desk_anm_1").onclick = function () {
    "use strict";
    if (document.getElementById("desk_c_1").className === "desk_c_1") {
        document.getElementById("desk_c_1").className = "desk_c_1_on";
        document.getElementById("drawer_sound").play();
    }
    else {
        if (document.getElementById("desk_c_1").className === "desk_c_1_on") {
            document.getElementById("desk_c_1").className = "desk_c_1";
            document.getElementById("drawer_sound").play();
        }
    }
};
document.getElementById("desk_anm_2").onclick = function () {
    "use strict";
    if (document.getElementById("desk_c_2").className === "desk_c_2") {
        document.getElementById("desk_c_2").className = "desk_c_2_on";
        document.getElementById("drawer_sound").play();
    }
    else {
        if (document.getElementById("desk_c_2").className === "desk_c_2_on") {
            document.getElementById("desk_c_2").className = "desk_c_2";
            document.getElementById("drawer_sound").play();
        }
    }
};
document.getElementById("desk_anm_3").onclick = function () {
    "use strict";
    if (document.getElementById("desk_c_3").className === "desk_c_3") {
        document.getElementById("desk_c_3").className = "desk_c_3_on";
        document.getElementById("drawer_sound").play();
    }
    else {
        if (document.getElementById("desk_c_3").className === "desk_c_3_on") {
            document.getElementById("desk_c_3").className = "desk_c_3";
            document.getElementById("drawer_sound").play();
        }
    }
};
document.getElementById("desk_anm_4").onclick = function () {
    "use strict";
    if (document.getElementById("desk_c_4").className === "desk_c_4") {
        document.getElementById("desk_c_4").className = "desk_c_4_on";
        document.getElementById("drawer_sound").play();
    }
    else {
        if (document.getElementById("desk_c_4").className === "desk_c_4_on") {
            document.getElementById("desk_c_4").className = "desk_c_4";
            document.getElementById("drawer_sound").play();
        }
    }
};
document.getElementById("desk_anm_5").onclick = function () {
    "use strict";
    if (document.getElementById("desk_c_5").className === "desk_c_5") {
        document.getElementById("desk_c_5").className = "desk_c_5_on";
        document.getElementById("drawer_sound").play();
    }
    else {
        if (document.getElementById("desk_c_5").className === "desk_c_5_on") {
            document.getElementById("desk_c_5").className = "desk_c_5";
            document.getElementById("drawer_sound").play();
        }
    }
};
document.getElementById("desk_anm_left").onclick = function () {
    "use strict";
    if (document.getElementById("desk_c_left").className === "desk_left") {
        document.getElementById("desk_c_left").className = "desk_left_on";
        document.getElementById("drawer_sound").play();
    }
    else {
        if (document.getElementById("desk_c_left").className === "desk_left_on") {
            document.getElementById("desk_c_left").className = "desk_left";
            document.getElementById("drawer_sound").play();
        }
    }
};
document.getElementById("desk_anm_right").onclick = function () {
    "use strict";
    if (document.getElementById("desk_c_right").className === "desk_right") {
        document.getElementById("desk_c_right").className = "desk_right_on";
        document.getElementById("drawer_sound").play();
    }
    else {
        if (document.getElementById("desk_c_right").className === "desk_right_on") {
            document.getElementById("desk_c_right").className = "desk_right";
            document.getElementById("drawer_sound").play();
        }
    }
};
// WINDOW ANM //
document.getElementById("window_anm").onclick = function () {
    "use strict";
    if (document.getElementById("window_fe").className === "window_fe") {
        document.getElementById("window_fe").className = "window_fe_close";
        weaves.volume = 0.4;
    }
    else {
        if (document.getElementById("window_fe").className === "window_fe_close") {
            document.getElementById("window_fe").className = "window_fe";
            weaves.volume = 1;
        }
    }
};
document.getElementById("window_anm_2").onclick = function () {
    "use strict";
    if (document.getElementById("text_joe_12").className === "text_joe_12_mid") {
        document.getElementById("window_all").className = "window_all_anm";
        document.getElementById("text_joe_12").className = "text_joe_12_end";
        document.getElementById("text_joe_13").className = "text_joe_13_mid";
        document.getElementById("background_black").className = "main_black_back";
        document.getElementById("cap_1").className = "cap_1_up";
        document.getElementById("window_anm_2").className = "window_anm_2";
        weaves.volume = 0;
    }
};
// SOUNDS EXTRA //
document.getElementById("joe_sound").onclick = function () {
    "use strict";
    document.getElementById("joe_cough").play();
    joe.volume = 0.4;
};
document.getElementById("rat").onclick = function () {
    "use strict";
    document.getElementById("rat_sound").play();
};

document.getElementById("sea_shell_sound").onclick = function () {
    "use strict";
    document.getElementById("conch_sound").play();
};

document.getElementById("earth_anm").onclick = function () {
    "use strict";
    if (document.getElementById("earth_anm").className === "earth_anm") {
        document.getElementById("earth_anm").className = "earth_anm_on";
    }
    else {
        if (document.getElementById("earth_anm").className === "earth_anm_on") {
            document.getElementById("earth_anm").className = "earth_anm";
        }
    }
};
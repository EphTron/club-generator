/**
 * Club-Generator 1.0
 *
 * Application for personal club configurations of Henrys Clubs.
 * Uses Swiper 3.4.2 Framework (http://www.idangero.us/swiper/)
 * Also see swiper.min.js
 *
 * Copyright 2017, Ephraim Schott
 * https://github.com/EphTron/club-generator
 *
 * Licensed under MIT
 *
 * Released on: Dez 4, 2017
 */


var club_path = "";
var language = "en";
var selected_club = "-";

function choose_club_typ(lang) {
    language = lang;
    var club_selector = document.getElementById("club-selector");
    var _selection = club_selector.options[club_selector.selectedIndex].value;

    if (_selection !== selected_club) {
        selected_club = _selection;

        var paths = {};
        paths['knob_fold'] = "Knob";
        paths['grip_fold'] = "Griff";
        paths['tape_fold'] = "Tape";
        paths['body_fold'] = "Korpus";
        paths['top_fold'] = "Top";

        if (selected_club === "Pirouette") {

            paths['knob_items'] = ["12122_KnobRund_schwarz.gif",
                // "18239_KnobRund_gruen.gif",
                // "18240_KnobRund_orange.gif",
                // "18238_KnobRund_blau.gif",
                "11707_KnobRund_weiß.gif",
                "11708_KnobDelphin_schwarz.gif",
                "11709_KnobDelphin_weiß.gif",
                "18118_KnobDelphin_orange.gif",
                "18207_KnobDelphin_blau.gif",
                "18208_KnobDelphin_gruen.gif",
                "19635_KnobDelphin_rot.gif",
                "19638_KnobDelphin_pink.gif"];

            paths['grip_items'] = ["19236_GriffPiro_lila.gif",
                "17269_GriffPiro_pink.gif",
                "17886_GriffPiro_rot.gif",
                "11803_GriffPiro_weiß.gif",
                "17885_GriffPiro_gelb.gif",
                "15582_GriffPiro_gruen.gif",
                "11802_GriffPiro_silber.gif",
                "15581_GriffPiro_orange.gif",
                "17931_GriffPiro_blau.gif"];

            paths['tape_items'] = ["11225_Tape_weiß.gif",
                "11226_Tape_schwarz.gif",
                "18956_Tape_gelb.gif",
                "18957_Tape_pink.gif",
                "18958_Tape_orange.gif",
                "18959_Tape_gruen.gif",
                "19438_Tape_blau.gif",
                "19689_Tape_rot.gif"];

            paths['body_items'] = ["11071_KorpusKurz_weiß.gif",
                "11072_KorpusKurz_rot.gif",
                "11073_KorpusKurz_pink.gif",
                "11074_KorpusKurz_gelb.gif",
                "11075_KorpusKurz_gruen.gif",
                "11076_KorpusKurz_lila.gif",
                "11077_KorpusKurz_blau.gif",
                "12677_KorpusKurz_orange.gif"];

            paths['top_items'] = ["11715_TopClassic_schwarz.gif",
                "11716_TopClassic_weiß.gif",
                "18124_TopClassic_orange.gif",
                "18248_TopClassic_blau.gif",
                "18249_TopClassic_gruen.gif",
                "19643_TopClassic_rot.gif",
                "19644_TopClassic_pink.gif"];

            club_path = paths;
            create_club("piro");
        } else if (selected_club === "Pirouette Grip") {

            paths['knob_items'] = ["12122_KnobRund_schwarz.gif",
                // "18239_KnobRund_gruen.gif",
                // "18240_KnobRund_orange.gif",
                // "18238_KnobRund_blau.gif",
                "11707_KnobRund_weiß.gif",
                "11708_KnobDelphin_schwarz.gif",
                "11709_KnobDelphin_weiß.gif",
                "18118_KnobDelphin_orange.gif",
                "18207_KnobDelphin_blau.gif",
                "18208_KnobDelphin_gruen.gif",
                "19635_KnobDelphin_rot.gif",
                "19638_KnobDelphin_pink.gif"];

            paths['grip_items'] = ["19236_GriffPiro_lila.gif",
                "17269_GriffPiro_pink.gif",
                "17886_GriffPiro_rot.gif",
                "11803_GriffPiro_weiß.gif",
                "17885_GriffPiro_gelb.gif",
                "15582_GriffPiro_gruen.gif",
                "11802_GriffPiro_silber.gif",
                "15581_GriffPiro_orange.gif",
                "17931_GriffPiro_blau.gif"];

            paths['tape_items'] = ["11225_Tape_weiß.gif",
                "11226_Tape_schwarz.gif",
                "18956_Tape_gelb.gif",
                "18957_Tape_pink.gif",
                "18958_Tape_orange.gif",
                "18959_Tape_gruen.gif",
                "19438_Tape_blau.gif",
                "19689_Tape_rot.gif"];

            paths['body_items'] = ["17701_KorpusGrip_weiß.gif",
                "17784_KorpusGrip_orange.gif",
                "17788_KorpusGrip_gruen.gif",
                "19151_KorpusGrip_blau.gif",
                "19242_KorpusGrip_pink.gif",
                "19717_KorpusGrip_tuerkis.gif"];

            paths['top_items'] = ["11715_TopClassic_schwarz.gif",
                "11716_TopClassic_weiß.gif",
                "18124_TopClassic_orange.gif",
                "18248_TopClassic_blau.gif",
                "18249_TopClassic_gruen.gif",
                "19643_TopClassic_rot.gif",
                "19644_TopClassic_pink.gif"];

            club_path = paths;
            create_club("piro-grip");
        } else if (selected_club === "Classic Short") {

            paths['knob_items'] = ["12122_KnobRund_schwarz.gif",
                // "18239_KnobRund_gruen.gif",
                // "18240_KnobRund_orange.gif",
                // "18238_KnobRund_blau.gif",
                "11707_KnobRund_weiß.gif",
                "18209_KnobClassic_blau.gif",
                "18210_KnobClassic_gruen.gif",
                "19636_KnobClassic_rot.gif",
                "19637_KnobClassic_pink.gif"];

            paths['grip_items'] = ["19487_GriffClassic_lila.gif",
                "18599_GriffClassic_pink.gif",
                "18257_GriffClassic_rot.gif",
                "11800_GriffClassic_weiß.gif",
                "17779_GriffClassic_gelb.gif",
                "16014_GriffClassic_gruen.gif",
                "11799_GriffClassic_silber.gif",
                "16015_GriffClassic_orange.gif",
                "18147_GriffClassic_blau.gif"];

            paths['tape_items'] = ["11225_Tape_weiß.gif",
                "11226_Tape_schwarz.gif",
                "18956_Tape_gelb.gif",
                "18957_Tape_pink.gif",
                "18958_Tape_orange.gif",
                "18959_Tape_gruen.gif",
                "19438_Tape_blau.gif",
                "19689_Tape_rot.gif"];

            paths['body_items'] = ["11071_KorpusKurz_weiß.gif",
                "11072_KorpusKurz_rot.gif",
                "11073_KorpusKurz_pink.gif",
                "11074_KorpusKurz_gelb.gif",
                "11075_KorpusKurz_gruen.gif",
                "11076_KorpusKurz_lila.gif",
                "11077_KorpusKurz_blau.gif",
                "12677_KorpusKurz_orange.gif"];

            paths['top_items'] = ["11715_TopClassic_schwarz.gif",
                "11716_TopClassic_weiß.gif",
                "18124_TopClassic_orange.gif",
                "18248_TopClassic_blau.gif",
                "18249_TopClassic_gruen.gif",
                "19643_TopClassic_rot.gif",
                "19644_TopClassic_pink.gif"];

            club_path = paths;
            create_club("short");
        } else if (selected_club === "Classic Long") {

            paths['knob_items'] = ["12122_KnobRund_schwarz.gif",
                // "18239_KnobRund_gruen.gif",
                // "18240_KnobRund_orange.gif",
                // "18238_KnobRund_blau.gif",
                "11707_KnobRund_weiß.gif",
                "18209_KnobClassic_blau.gif",
                "18210_KnobClassic_gruen.gif",
                "19636_KnobClassic_rot.gif",
                "19637_KnobClassic_pink.gif"];

            paths['grip_items'] = ["19487_GriffClassic_lila.gif",
                "18599_GriffClassic_pink.gif",
                "18257_GriffClassic_rot.gif",
                "11800_GriffClassic_weiß.gif",
                "17779_GriffClassic_gelb.gif",
                "16014_GriffClassic_gruen.gif",
                "11799_GriffClassic_silber.gif",
                "16015_GriffClassic_orange.gif",
                "18147_GriffClassic_blau.gif"];

            paths['tape_items'] = ["11226_Tape_schwarz.gif",
                "11225_Tape_weiß.gif",
                "18956_Tape_gelb.gif",
                "18957_Tape_pink.gif",
                "18958_Tape_orange.gif",
                "18959_Tape_gruen.gif",
                "19438_Tape_blau.gif",
                "19689_Tape_rot.gif"];

            paths['body_items'] = ["11062_KorpusLang_weiß.gif",
                "11063_KorpusLang_rot.gif",
                "11064_KorpusLang_pink.gif",
                "11065_KorpusLang_gelb.gif",
                "11066_KorpusLang_gruen.gif",
                "11067_KorpusLang_lila.gif",
                "11068_KorpusLang_blau.gif",
                "11070_KorpusLang_schwarz.gif",
                "12684_KorpusLang_orange.gif"];

            paths['top_items'] = ["11715_TopClassic_schwarz.gif",
                "11716_TopClassic_weiß.gif",
                "18124_TopClassic_orange.gif",
                "18248_TopClassic_blau.gif",
                "18249_TopClassic_gruen.gif",
                "19643_TopClassic_rot.gif",
                "19644_TopClassic_pink.gif"];
            club_path = paths;
            create_club("long");
        } else if (selected_club === "Mirage") {

            paths['knob_items'] = ["12122_KnobRund_schwarz.gif",
                // "18239_KnobRund_gruen.gif",
                // "18240_KnobRund_orange.gif",
                // "18238_KnobRund_blau.gif",
                "11707_KnobRund_weiß.gif",
                "11708_KnobDelphin_schwarz.gif",
                "11709_KnobDelphin_weiß.gif",
                "18118_KnobDelphin_orange.gif",
                "18207_KnobDelphin_blau.gif",
                "18208_KnobDelphin_gruen.gif",
                "19635_KnobDelphin_rot.gif",
                "19638_KnobDelphin_pink.gif"];

            paths['grip_items'] = ["19236_GriffPiro_lila.gif",
                "17269_GriffPiro_pink.gif",
                "17886_GriffPiro_rot.gif",
                "11803_GriffPiro_weiß.gif",
                "17885_GriffPiro_gelb.gif",
                "15582_GriffPiro_gruen.gif",
                "11802_GriffPiro_silber.gif",
                "15581_GriffPiro_orange.gif",
                "17931_GriffPiro_blau.gif"];

            paths['tape_items'] = ["11226_Tape_schwarz.gif",
                "11225_Tape_weiß.gif",
                "18956_Tape_gelb.gif",
                "18957_Tape_pink.gif",
                "18958_Tape_orange.gif",
                "18959_Tape_gruen.gif",
                "18957_Tape_pink.gif",
                "19438_Tape_blau.gif",
                "19689_Tape_rot.gif"];

            paths['body_items'] = ["16888_KorpusMirage_rot.gif",
                "16889_KorpusMirage_pink.gif",
                "16890_KorpusMirage_gelb.gif",
                "16891_KorpusMirage_gruen.gif",
                "16892_KorpusMirage_blau.gif",
                "16887_KorpusMirage_weiß.gif",
                "16893_KorpusMirage_orange.gif"];

            paths['top_items'] = ["11715_TopClassic_schwarz.gif",
                "11716_TopClassic_weiß.gif",
                "18124_TopClassic_orange.gif",
                "18248_TopClassic_blau.gif",
                "18249_TopClassic_gruen.gif",
                "19643_TopClassic_rot.gif",
                "19644_TopClassic_pink.gif"];

            club_path = paths;
            create_club("mirage");
        } else if (selected_club === "Albatros") {

            paths['knob_items'] = ["12122_KnobRund_schwarz.gif",
                // "18239_KnobRund_gruen.gif",
                // "18240_KnobRund_orange.gif",
                // "18238_KnobRund_blau.gif",
                "11707_KnobRund_weiß.gif",
                "11708_KnobDelphin_schwarz.gif",
                "11709_KnobDelphin_weiß.gif",
                "18118_KnobDelphin_orange.gif",
                "18207_KnobDelphin_blau.gif",
                "18208_KnobDelphin_gruen.gif",
                "19635_KnobDelphin_rot.gif",
                "19638_KnobDelphin_pink.gif"];

            paths['grip_items'] = ["19487_GriffClassic_lila.gif",
                "18599_GriffClassic_pink.gif",
                "18257_GriffClassic_rot.gif",
                "11800_GriffClassic_weiß.gif",
                "17779_GriffClassic_gelb.gif",
                "16014_GriffClassic_gruen.gif",
                "11799_GriffClassic_silber.gif",
                "16015_GriffClassic_orange.gif",
                "18147_GriffClassic_blau.gif"];

            paths['tape_items'] = ["11226_Tape_schwarz.gif",
                "11225_Tape_weiß.gif",
                "19689_Tape_rot.gif",
                "18956_Tape_gelb.gif",
                "18957_Tape_pink.gif",
                "18958_Tape_orange.gif",
                "18959_Tape_gruen.gif",
                "19438_Tape_blau.gif"];

            paths['body_items'] = ["11078_KorpusAlba_weiß.gif",
                "11079_KorpusAlba_rot.gif",
                "11080_KorpusAlba_pink.gif",
                "11081_KorpusAlba_gelb.gif",
                "11082_KorpusAlba_gruen.gif",
                "11083_KorpusAlba_lila.gif",
                "11084_KorpusAlba_blau.gif",
                "12676_KorpusAlba_orange.gif"];

            paths['top_items'] = ["11717_TopStand_schwarz.gif",
                "11718_TopStand_weiß.gif",
                "18122_TopStand_orange.gif",
                "18250_TopStand_blau.gif",
                "18251_TopStand_gruen.gif",
                "19639_TopStand_rot.gif",
                "19640_TopStand_pink.gif"];

            club_path = paths;
            create_club("alba");
        } else if (selected_club === "Delphin") {

            paths['knob_items'] = ["12122_KnobRund_schwarz.gif",
                // "18239_KnobRund_gruen.gif",
                // "18240_KnobRund_orange.gif",
                // "18238_KnobRund_blau.gif",
                "11707_KnobRund_weiß.gif",
                "11708_KnobDelphin_schwarz.gif",
                "11709_KnobDelphin_weiß.gif",
                "18118_KnobDelphin_orange.gif",
                "18207_KnobDelphin_blau.gif",
                "18208_KnobDelphin_gruen.gif",
                "19635_KnobDelphin_rot.gif",
                "19638_KnobDelphin_pink.gif"];

            paths['grip_items'] = ["11088_GriffDelphin_weiß.gif"];

            paths['tape_items'] = ["11091_DelphinRing_schwarz.gif",
                "18864_DelphinRing_weiß.gif"];

            paths['body_items'] = ["11062_KorpusLang_weiß.gif",
                "11063_KorpusLang_rot.gif",
                "11064_KorpusLang_pink.gif",
                "11065_KorpusLang_gelb.gif",
                "11066_KorpusLang_gruen.gif",
                "11067_KorpusLang_lila.gif",
                "11068_KorpusLang_blau.gif",
                "11070_KorpusLang_schwarz.gif",
                "12684_KorpusLang_orange.gif"];

            paths['top_items'] = ["11717_TopStand_schwarz.gif",
                "11718_TopStand_weiß.gif",
                "18122_TopStand_orange.gif",
                "18250_TopStand_blau.gif",
                "18251_TopStand_gruen.gif",
                "19639_TopStand_rot.gif",
                "19640_TopStand_pink.gif"];

            club_path = paths;
            create_club("delphin");
        } else if (selected_club === "Loop") {

            paths['knob_items'] = ["12122_KnobRund_schwarz.gif",
                // "18239_KnobRund_gruen.gif",
                // "18240_KnobRund_orange.gif",
                // "18238_KnobRund_blau.gif",
                "11707_KnobRund_weiß.gif",
                "11708_KnobDelphin_schwarz.gif",
                "11709_KnobDelphin_weiß.gif",
                "18118_KnobDelphin_orange.gif",
                "18207_KnobDelphin_blau.gif",
                "18208_KnobDelphin_gruen.gif",
                "19635_KnobDelphin_rot.gif",
                "19638_KnobDelphin_pink.gif"];

            paths['grip_items'] = ["19656_Griff_Loop_tuerkis.gif",
                "19652_Griff_Loop_weiß.gif",
                "19653_Griff_Loop_blau.gif",
                "19654_Griff_Loop_gelb.gif",
                "19655_Griff_Loop_gruen.gif",
                "19657_Griff_Loop_orange.gif",
                "19658_Griff_Loop_pink.gif",
                "19659_Griff_Loop_rot.gif"];

            paths['tape_items'] = ["11091_DelphinRing_schwarz.gif",
                "18864_DelphinRing_weiß.gif"];

            paths['body_items'] = ["11077_KorpusKurz_blau.gif",
                "11071_KorpusKurz_weiß.gif",
                "11072_KorpusKurz_rot.gif",
                "11073_KorpusKurz_pink.gif",
                "11074_KorpusKurz_gelb.gif",
                "11075_KorpusKurz_gruen.gif",
                "11076_KorpusKurz_lila.gif",
                "19717_KorpusGrip_tuerkis.gif",
                "12677_KorpusKurz_orange.gif"];

            paths['top_items'] = ["11715_TopClassic_schwarz.gif",
                "11716_TopClassic_weiß.gif",
                "18124_TopClassic_orange.gif",
                "18248_TopClassic_blau.gif",
                "18249_TopClassic_gruen.gif",
                "19643_TopClassic_rot.gif",
                "19644_TopClassic_pink.gif"];

            club_path = paths;
            create_club("loop");
        } else if (selected_club === "Loop Grip") {

            paths['knob_items'] = ["12122_KnobRund_schwarz.gif",
                "18239_KnobRund_gruen.gif",
                "18240_KnobRund_orange.gif",
                "18238_KnobRund_blau.gif",
                "11707_KnobRund_weiß.gif",
                "11708_KnobDelphin_schwarz.gif",
                "11709_KnobDelphin_weiß.gif",
                "18118_KnobDelphin_orange.gif",
                "18207_KnobDelphin_blau.gif",
                "18208_KnobDelphin_gruen.gif",
                "19635_KnobDelphin_rot.gif",
                "19638_KnobDelphin_pink.gif"];

            paths['grip_items'] = ["19653_Griff_Loop_blau.gif",
                "19652_Griff_Loop_weiß.gif",
                "19654_Griff_Loop_gelb.gif",
                "19655_Griff_Loop_gruen.gif",
                //"19656_Griff_Loop_tuerkis.gif",
                "19657_Griff_Loop_orange.gif",
                "19658_Griff_Loop_pink.gif",
                "19659_Griff_Loop_rot.gif"];

            paths['tape_items'] = ["11091_DelphinRing_schwarz.gif",
                "18864_DelphinRing_weiß.gif"];

            paths['body_items'] = ["19151_KorpusGrip_blau.gif",
                "17701_KorpusGrip_weiß.gif",
                "17784_KorpusGrip_orange.gif",
                "17788_KorpusGrip_gruen.gif",
                "19242_KorpusGrip_pink.gif",
                "19717_KorpusGrip_tuerkis.gif"];

            paths['top_items'] = ["11715_TopClassic_schwarz.gif",
                "11716_TopClassic_weiß.gif",
                "18124_TopClassic_orange.gif",
                "18248_TopClassic_blau.gif",
                "18249_TopClassic_gruen.gif",
                "19643_TopClassic_rot.gif",
                "19644_TopClassic_pink.gif"];

            club_path = paths;
            create_club("loop-grip");
        } else {
            console.log("Error - Unknown club");
        }
    }
}

document.getElementById("club-selector").addEventListener('change', function () {
    choose_club_typ(language);
}, false);

document.getElementById("club-selector").addEventListener('click', function () {
    choose_club_typ(language);
}, false);

function create_club_part(parent, club_part, name_id, fold, items) {
    var parent_element = document.getElementById(parent);

    var col = document.createElement("div");
    col.id = name_id;
    parent_element.appendChild(col);

    var swip = document.createElement("div"); // swip_container
    swip.className = "swiper-container swiper-container-" + club_part;
    col.appendChild(swip);

    var wrap_swip = document.createElement("div");
    wrap_swip.className = "swiper-wrapper";
    wrap_swip.id = "club-" + club_part + "-swiper";

    var dir = "img/";
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        if (screen.height < 1100){
            dir = "img_sml/";
        }
    }
    items.forEach(function (item) {
        var final_url = dir + fold + "/" + item;
        var image_string = '<img id="img-club-' + club_part + '" ' +
            'class="club-pics center-block unselectable" ' +
            'src="' + final_url + '" ' +
            'draggable="false"' +
            'unselectable="on"/>';
        var slide = document.createElement("div");
        slide.className = "swiper-slide";
        slide.innerHTML = image_string;
        wrap_swip.appendChild(slide);
    });

    var next_swip = document.createElement("div");
    next_swip.className = "button-pos-left button-pos-" + club_part + " swiper-" + club_part + "-button-prev swiper-button-prev";
    var prev_swip = document.createElement("div");
    prev_swip.className = "button-pos-right button-pos-" + club_part + " swiper-" + club_part + "-button-next swiper-button-next";

    swip.appendChild(wrap_swip);
    parent_element.appendChild(next_swip);
    parent_element.appendChild(prev_swip);
}

function build_swiper() {

    new Swiper('.swiper-container-top', {
        club_part: "top",
        slidesPerView: 1,
        loop: true,
        nextButton: '.swiper-top-button-prev',
        prevButton: '.swiper-top-button-next',
        onSlideChangeEnd: function(swiper) {
            change_text(swiper, "top");
        }
    });
    new Swiper('.swiper-container-body', {
        club_part: "body",
        slidesPerView: 1,
        loop: true,
        nextButton: '.swiper-body-button-prev',
        prevButton: '.swiper-body-button-next',
        onSlideChangeEnd: function(swiper) {
            change_text(swiper, "body");
        }
    });
    new Swiper('.swiper-container-tape', {
        club_part: "tape",
        slidesPerView: 1,
        loop: true,
        nextButton: '.swiper-tape-button-prev',
        prevButton: '.swiper-tape-button-next',
        onSlideChangeEnd: function(swiper) {
            change_text(swiper, "tape");
        }
    });
    new Swiper('.swiper-container-grip', {
        club_part: "grip",
        loop: true,
        nextButton: '.swiper-grip-button-prev',
        prevButton: '.swiper-grip-button-next',
        onSlideChangeEnd: function(swiper) {
            change_text(swiper, "grip");
        }
    });
    new Swiper('.swiper-container-knob', {
        clubpart: "knob",
        loop: true,
        nextButton: '.swiper-knob-button-prev',
        prevButton: '.swiper-knob-button-next',
        onSlideChangeEnd: function(swiper) {
            change_text(swiper, "knob");
        }
    });
}

function create_club(type) {
    var generator = document.getElementById("club-gen");
    var old_club_window = document.getElementById("club-window");
    generator.removeChild(old_club_window);
    var new_club_window = document.createElement("div");
    new_club_window.id = "club-window";
    generator.appendChild(new_club_window);
    create_club_part("club-window", "knob", "club-knob-" + type, club_path['knob_fold'], club_path['knob_items']);
    create_club_part("club-window", "grip", "club-grip-" + type, club_path['grip_fold'], club_path['grip_items']);
    create_club_part("club-window", "tape", "club-tape-" + type, club_path['tape_fold'], club_path['tape_items']);
    create_club_part("club-window", "body", "club-body-" + type, club_path['body_fold'], club_path['body_items']);
    create_club_part("club-window", "top", "club-top-" + type, club_path['top_fold'], club_path['top_items']);
    build_swiper();
}

function change_text(swiper, club_part) {
    // get image name
    var image = swiper.container[0].querySelector(".swiper-slide-active").querySelector("img");
    var slash_index = image.src.lastIndexOf("/");
    var point_index = image.src.lastIndexOf("gif");
    // prepare string
    var club_part_name = image.src.substring(slash_index + 1, point_index - 1).replace(/([a-z](?=[A-Z]))/g, '$1_');
    // get and split item attributes and adjust language
    var splitted_names = adjust_language(club_part_name.split("_"));
    var selected_part_text = document.getElementById("selected-" + club_part);
    if (splitted_names.length === 3) {
        selected_part_text.innerHTML = splitted_names[1] + " " + splitted_names[2];
    } else if (splitted_names.length === 4){
        selected_part_text.innerHTML = splitted_names[1] + " " + splitted_names[2] + " " + splitted_names[3];
    } else {
        console.log("Error: Bad image handling");
    }
}

function adjust_language(word_list){
    var adjusted_word_list = [];
    if (language === "de"){
        word_list.forEach(function (word){
            var w = word;
            w = w.replace(/([A-Z])/g, ' $1').trim();
            if (word === "wei%C3%9F"){
                w = decodeURI(word);
            }
            adjusted_word_list.push(w);
        });
    } else if (language === "en"){
        word_list.forEach(function (word){
            var w = word;
            w = w.replace(/([A-Z])/g, ' $1').trim();
            if (word === "wei%C3%9F"){
                w = "white";
            }
            else if (word === "blau"){
                w = "blue";
            }
            else if (word === "gruen"){
                w = "green";
            }
            else if (word === "rot"){
                w = "red";
            }
            else if (word === "schwarz"){
                w = "black";
            }
            else if (word === "gelb"){
                w = "yellow";
            }
            else if (word === "lila"){
                w = "purple";
            }
            else if (word === "silber"){
                w = "silver";
            }
            else if (word === "tuerkis"){
                w = "turquoise";
            }
            else if (word === "Griff"){
                w = "Handle";
            }
            else if (word === "Korpus"){
                w = "Body";
            }
            else if (word === "Rund"){
                w = "Round";
            }
            else if (word === "Kurz"){
                w = "Short";
            }
            else if (word === "Lang"){
                w = "Long";
            }
            else if (word === "Stand"){
                w = "Std.";
            }
            adjusted_word_list.push(w);
        });
    }
    return adjusted_word_list
}

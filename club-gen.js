var club_path = "";
function choose_club_typ(){
    var club_selector = document.getElementById("club-selector");
    var selected_club = "-";
    var _selection = club_selector.options[club_selector.selectedIndex].value;
    if (_selection != selected_club){
        selected_club = _selection;
        paths = {};
        club_knob_fold = "Knob"
        paths['knob_fold'] = club_knob_fold
        club_grip_fold = "Griff"
        paths['grip_fold'] = club_grip_fold
        club_tape_fold = "Tape"
        paths['tape_fold'] = club_tape_fold
        club_body_fold = "Korpus"
        paths['body_fold'] = club_body_fold
        club_top_fold  = "Top"
        paths['top_fold'] = club_top_fold

        if (selected_club == "Pirouette"){

            knob_colors = [ "KnobRund_schwarz.gif",
                            "KnobRund_gruen.gif",
                            "KnobRund_orange.gif",
                            "KnobRund_blau.gif",
                            "KnobRund_weiß.gif" ]
            paths['knob_items'] = knob_colors

            grip_colors = [ "GriffPiro_lila.gif",
                            "GriffPiro_pink.gif",
                            "GriffPiro_rot.gif",
                            "GriffPiro_weiß.gif",
                            "GriffPiro_gelb.gif",
                            "GriffPiro_gruen.gif",
                            "GriffPiro_silber.gif",
                            "GriffPiro_orange.gif",
                            "GriffPiro_blau.gif"]
            paths['grip_items'] = grip_colors

            tape_colors = [ "Tape_gelb.gif",
                            "Tape_schwarz.gif",
                            "Tape_orange.gif",
                            "Tape_gruen.gif",
                            "Tape_weiß.gif",
                            "Tape_blau.gif",
                            "Tape_pink.gif" ]
            paths['tape_items'] = tape_colors

            body_colors = [ "KorpusLang_lila.gif",
                            "KorpusLang_pink.gif",
                            "KorpusLang_blau.gif",
                            "KorpusLang_schwarz.gif",
                            "KorpusLang_rot.gif",
                            "KorpusLang_gelb.gif",
                            "KorpusLang_orange.gif",
                            "KorpusLang_weiß.gif",
                            "KorpusLang_gruen.gif"]
            paths['body_items'] = body_colors

            top_colors =  [ "TopClassic_orange.gif",
                            "TopClassic_gruen.gif",
                            "TopClassic_blau.gif",
                            "TopClassic_weiß.gif",
                            "TopClassic_schwarz.gif"]
            paths['top_items'] = top_colors
            club_path = paths;
            create_club("piro");
        } else if (selected_club == "Classic Short"){

            knob_colors = [ "KnobClassic_schwarz.gif",
                            "KnobClassic_gruen.gif",
                            "KnobClassic_orange.gif",
                            "KnobClassic_blau.gif",
                            "KnobClassic_weiß.gif" ]
            paths['knob_items'] = knob_colors

            grip_colors = [ "GriffClassic_lila.gif",
                            "GriffClassic_pink.gif",
                            "GriffClassic_rot.gif",
                            "GriffClassic_weiß.gif",
                            "GriffClassic_gelb.gif",
                            "GriffClassic_gruen.gif",
                            "GriffClassic_silber.gif",
                            "GriffClassic_orange.gif",
                            "GriffClassic_blau.gif"]
            paths['grip_items'] = grip_colors

            tape_colors = [ "Tape_gelb.gif",
                            "Tape_schwarz.gif",
                            "Tape_orange.gif",
                            "Tape_gruen.gif",
                            "Tape_weiß.gif",
                            "Tape_blau.gif",
                            "Tape_pink.gif" ]
            paths['tape_items'] = tape_colors

            body_colors = [ "KorpusKurz_weiß.gif",
                            "KorpusKurz_lila.gif",
                            "KorpusKurz_pink.gif",
                            "KorpusKurz_blau.gif",
                            "KorpusKurz_rot.gif",
                            "KorpusKurz_gelb.gif",
                            "KorpusKurz_orange.gif",
                            "KorpusKurz_gruen.gif"]
            paths['body_items'] = body_colors

            top_colors =  [ "TopClassic_orange.gif",
                            "TopClassic_gruen.gif",
                            "TopClassic_blau.gif",
                            "TopClassic_weiß.gif",
                            "TopClassic_schwarz.gif"]
            paths['top_items'] = top_colors
            club_path = paths;
            create_club("4925");
        } else if (selected_club == "Classic Long"){

            knob_colors = [ "KnobClassic_schwarz.gif",
                            "KnobClassic_gruen.gif",
                            "KnobClassic_orange.gif",
                            "KnobClassic_blau.gif",
                            "KnobClassic_weiß.gif" ]
            paths['knob_items'] = knob_colors

            grip_colors = [ "GriffClassic_lila.gif",
                            "GriffClassic_pink.gif",
                            "GriffClassic_rot.gif",
                            "GriffClassic_weiß.gif",
                            "GriffClassic_gelb.gif",
                            "GriffClassic_gruen.gif",
                            "GriffClassic_silber.gif",
                            "GriffClassic_orange.gif",
                            "GriffClassic_blau.gif"]
            paths['grip_items'] = grip_colors

            tape_colors = [ "Tape_gelb.gif",
                            "Tape_schwarz.gif",
                            "Tape_orange.gif",
                            "Tape_gruen.gif",
                            "Tape_weiß.gif",
                            "Tape_blau.gif",
                            "Tape_pink.gif" ]
            paths['tape_items'] = tape_colors

            body_colors = [ "KorpusLang_lila.gif",
                            "KorpusLang_pink.gif",
                            "KorpusLang_blau.gif",
                            "KorpusLang_schwarz.gif",
                            "KorpusLang_rot.gif",
                            "KorpusLang_gelb.gif",
                            "KorpusLang_orange.gif",
                            "KorpusLang_weiß.gif",
                            "KorpusLang_gruen.gif"]
            paths['body_items'] = body_colors

            top_colors =  [ "TopClassic_orange.gif",
                            "TopClassic_gruen.gif",
                            "TopClassic_blau.gif",
                            "TopClassic_weiß.gif",
                            "TopClassic_schwarz.gif"]
            paths['top_items'] = top_colors
            club_path = paths;
            create_club("5175");
        } else if (selected_club == "Mirage"){

            knob_colors = [ "KnobRund_schwarz.gif",
                            "KnobRund_gruen.gif",
                            "KnobRund_orange.gif",
                            "KnobRund_blau.gif",
                            "KnobRund_weiß.gif" ]
            paths['knob_items'] = knob_colors

            grip_colors = [ "GriffPiro_lila.gif",
                            "GriffPiro_pink.gif",
                            "GriffPiro_rot.gif",
                            "GriffPiro_weiß.gif",
                            "GriffPiro_gelb.gif",
                            "GriffPiro_gruen.gif",
                            "GriffPiro_silber.gif",
                            "GriffPiro_orange.gif",
                            "GriffPiro_blau.gif"]
            paths['grip_items'] = grip_colors

            tape_colors = [ "Tape_gelb.gif",
                            "Tape_schwarz.gif",
                            "Tape_orange.gif",
                            "Tape_gruen.gif",
                            "Tape_weiß.gif",
                            "Tape_blau.gif",
                            "Tape_pink.gif" ]
            paths['tape_items'] = tape_colors

            body_colors = [ "KorpusMirage_weiß.gif",
                            "KorpusMirage_pink.gif",
                            "KorpusMirage_blau.gif",
                            "KorpusMirage_rot.gif",
                            "KorpusMirage_gelb.gif",
                            "KorpusMirage_orange.gif",
                            "KorpusMirage_gruen.gif"]
            paths['body_items'] = body_colors

            top_colors =  [ "TopStand_orange.gif",
                            "TopStand_gruen.gif",
                            "TopStand_blau.gif",
                            "TopStand_weiß.gif",
                            "TopStand_schwarz.gif"]
            paths['top_items'] = top_colors
            club_path = paths;
            create_club("4875");
        } else if (selected_club == "Albatros"){

            knob_colors = [ "KnobRund_schwarz.gif",
                            "KnobRund_gruen.gif",
                            "KnobRund_orange.gif",
                            "KnobRund_blau.gif",
                            "KnobRund_weiß.gif" ]
            paths['knob_items'] = knob_colors

            grip_colors = [ "GriffClassic_lila.gif",
                            "GriffClassic_pink.gif",
                            "GriffClassic_rot.gif",
                            "GriffClassic_weiß.gif",
                            "GriffClassic_gelb.gif",
                            "GriffClassic_gruen.gif",
                            "GriffClassic_silber.gif",
                            "GriffClassic_orange.gif",
                            "GriffClassic_blau.gif"]
            paths['grip_items'] = grip_colors

            tape_colors = [ "Tape_gelb.gif",
                            "Tape_schwarz.gif",
                            "Tape_orange.gif",
                            "Tape_gruen.gif",
                            "Tape_weiß.gif",
                            "Tape_blau.gif",
                            "Tape_pink.gif" ]
            paths['tape_items'] = tape_colors

            body_colors = [ "KorpusAlba_weiß.gif",
                            "KorpusAlba_pink.gif",
                            "KorpusAlba_lila.gif",
                            "KorpusAlba_blau.gif",
                            "KorpusAlba_rot.gif",
                            "KorpusAlba_gelb.gif",
                            "KorpusAlba_orange.gif",
                            "KorpusAlba_gruen.gif"]
            paths['body_items'] = body_colors

            top_colors =  [ "TopStand_orange.gif",
                            "TopStand_gruen.gif",
                            "TopStand_blau.gif",
                            "TopStand_weiß.gif",
                            "TopStand_schwarz.gif"]
            paths['top_items'] = top_colors
            club_path = paths;
            create_club("5175");
        }
    }
    
}
document.getElementById("club-selector").addEventListener('click', function(e){ 
    choose_club_typ();
}, false);

function create_club_part(parent, club_part, name_id, fold, items){
    var parent_element = document.getElementById(parent);

    var col = document.createElement("div");
    col.id = name_id;
    parent_element.appendChild(col);

    var swip = document.createElement("div"); // swip_container
    swip.className = "swiper-container swiper-container-"+club_part;
    col.appendChild(swip);

    var wrap_swip = document.createElement("div");
    wrap_swip.className = "swiper-wrapper";
    wrap_swip.id = "club-"+club_part+"-swiper";

    //var dir = "http://ephtron.de/henrys-dev/club-parts/clubs-";
    //var dir = "/home/ephtron/Projects/club-generator/henrys-clubs/images/";
    //var dir = "http://localhost:8000/images/";
    var dir = "../images/";
    var colors = items;
    colors.forEach(function(item){
        var final_url = dir+fold+"/"+item;
        var image_string = '<img id="img-club-'+club_part+'" class="club-pics center-block" src="'+ final_url +'"/>';
        var slide = document.createElement("div");
        slide.className = "swiper-slide"
        slide.innerHTML = image_string;
        wrap_swip.appendChild(slide);
    });

    var next_swip = document.createElement("div");
    next_swip.className = "button-pos-left button-pos-"+club_part+ " swiper-"+club_part+"-button-prev swiper-button-prev";
    var prev_swip = document.createElement("div");
    prev_swip.className = "button-pos-right button-pos-"+club_part+ " swiper-"+club_part+"-button-next swiper-button-next";

    swip.appendChild(wrap_swip);
    parent_element.appendChild(next_swip);
    parent_element.appendChild(prev_swip);
}

function build_swiper(){
    var swiper_top = new Swiper ('.swiper-container-top', {
        slidesPerView:1,
        loop: true,
        nextButton: '.swiper-top-button-prev',
        prevButton: '.swiper-top-button-next'
    })
    var swiper_body = new Swiper ('.swiper-container-body', {
        slidesPerView:1,
        loop: true,
        nextButton: '.swiper-body-button-prev',
        prevButton: '.swiper-body-button-next'
    })
    var swiper_body = new Swiper ('.swiper-container-tape', {
    slidesPerView:1,
        loop: true,
        nextButton: '.swiper-tape-button-prev',
        prevButton: '.swiper-tape-button-next'
    })
    var swiper_grip = new Swiper ('.swiper-container-grip', {
        loop: true,
        nextButton: '.swiper-grip-button-prev',
        prevButton: '.swiper-grip-button-next'
    })
    var swiper_knob = new Swiper ('.swiper-container-knob', {
        loop: true,
        nextButton: '.swiper-knob-button-prev',
        prevButton: '.swiper-knob-button-next'
    })
}

function create_club(type){
    var generator = document.getElementById("club-gen");
    var old_club_window = document.getElementById("club-window");
    generator.removeChild(old_club_window);
    var new_club_window = document.createElement("div");
    new_club_window.id ="club-window";
    generator.appendChild(new_club_window);
    create_club_part("club-window","knob","club-knob-"+type, club_path['knob_fold'], club_path['knob_items']);
    create_club_part("club-window","grip","club-grip-"+type, club_path['grip_fold'], club_path['grip_items']);
    create_club_part("club-window","tape","club-tape-"+type, club_path['tape_fold'], club_path['tape_items']);
    create_club_part("club-window","body","club-body-"+type, club_path['body_fold'], club_path['body_items']);
    create_club_part("club-window","top","club-top-"+type, club_path['top_fold'], club_path['top_items']);
    build_swiper();
}
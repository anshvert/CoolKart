function display_info(id) {

//    butt = document.getElementById("view");

    txt_info = document.getElementById(id);

    if (txt_info.style.visibility === 'hidden') {

        txt_info.style.visibility = 'visible';
    } else {

        txt_info.style.visibility = 'hidden';

    }

}

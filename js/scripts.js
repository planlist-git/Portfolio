
$(function(){
    let animationList = ['opacity_100','rotate_right','rotate_left','rotate_y','scale'];
    moveStar();

    setInterval(()=>{

        moveStar();

    },9000);

    function removeclass(idnum){

        for(j = 0; j<animationList.length; j++){
            if(!$('#moveStar'+idnum).hasClass(animationList[i])){
                $('#moveStar'+idnum).removeClass(animationList[i]);
            }
        }
    }

    function moveStar(){
        let starLength = $('.move_star_wrap').children('img').length;

        for(i = 0; i<starLength; i++){

            let idnum = i+1;
            let randNum = Math.floor(Math.random() * 3);
            removeclass(idnum);
            $('#moveStar'+idnum).addClass(animationList[randNum]);

        }
    }

});
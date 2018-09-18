$(function () {
    var picarr = []
    , idarr = []
    , bool = false
    ,counter=0,
        score_count=0;

    $('.box').click(function () {

        $(this).toggleClass('rotate');
        picarr.push($(this).html());
        idarr.push("#" + this.id);
        if(idarr.length==2){
        if (picarr[0] == picarr[1] && idarr[0]!=idarr[1]) {
            $(idarr[0]).toggleClass('correct');
            $(idarr[1]).toggleClass('correct');
            $(idarr[0]).off();
            $(idarr[1]).off();
            picarr=[];
            idarr=[];
            counter+=1;
            score_count+=1;
            $('#score').html('score: '+score_count);
        }
        else {
            setTimeout(rotateback,800);
            function rotateback(){
              console.log('function fired');  $(idarr[0]).toggleClass('rotate');
                $(idarr[1]).toggleClass('rotate');
                picarr=[];
            idarr=[];
                score_count=0;
                $('#score').html('score: '+score_count);
            };

            if(counter==6){
                $('#restart').append('<button>Restart</button>')
                $('#wrapper').children().removeClass('correct wrong');
                $('#wrapper').children().toggleClass('rotate');
                counter=0;

            }

        }
        console.log('data',picarr);
        console.log('id\'\s',idarr);
        console.log("counter",counter);}
    });
});

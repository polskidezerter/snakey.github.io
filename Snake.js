let window_width = Number(window.innerWidth);
        document.getElementById("spriteContainer").style.visibility = "hidden";
        document.getElementById("spriteContainer").style.height ="0px";
        window.mobileAndTabletCheck = function() {
            let check = false;
            (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            return check;
        };
        if (!window.mobileAndTabletCheck()){
            document.getElementById("mobile_controller").style.height ="0px";
            document.getElementById("mobile_controller").style.visibility = "hidden";
        }
        let SP = [];
        for (i=0;i<12;i++){
            SP.push(document.getElementById(i).innerHTML);
        }
        let mainMenu = document.getElementById("display").innerHTML;let directionChanged = true;let loopStarted = false;let pastDirection = [0,-1,1];let direction = [0,-1,0];let snake = [];let score = 0;let interval = 100;let Beggininginterval = 100;let increseSpeed = true;let foodPosition = [-1,-1];let intervalStatus = "beggining";let startable = false;
        let verticalfov =10;let maxHorisontalFov = Math.round((window_width/(Number(document.getElementById("display").clientHeight)/(2+2*verticalfov)))/2-2);
        document.getElementById("cMaxHFov").innerHTML="current max width based on height = "+maxHorisontalFov;
        let horisontalfov = maxHorisontalFov;
        document.getElementById("width").value=maxHorisontalFov;
        document.getElementById("width").max = maxHorisontalFov;
        document.getElementById("width").setAttribute("max",maxHorisontalFov);
        let width = (Number(document.getElementById("display").clientHeight)/(2+2*verticalfov))*(1+2*horisontalfov);
        document.getElementById("display").style.width = width;
        document.getElementById("display").setAttribute("style","width:"+width+"px;");
        backToSquareOne();
        function backToSquareOne(){
            startable = false;
            var el = document.getElementById('display');
            while ( el.firstChild ) el.removeChild( el.firstChild );
            document.getElementById("display").innerHTML = mainMenu;
            document.getElementById("interval").value=Beggininginterval;
            document.getElementById("increse speed").checked=increseSpeed;
            document.getElementById("width").value=horisontalfov;
            document.getElementById("height").value=verticalfov;
            document.getElementById("width").max = maxHorisontalFov;
            document.getElementById("width").setAttribute("max",maxHorisontalFov);
      if (score >= 3){
        document.getElementById("display").innerHTML= `<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
        
      }
        }
        function start(){
            horisontalfov = Number(document.getElementById("width").value);
            verticalfov = Number(document.getElementById("height").value); 
            let width = (Number(document.getElementById("display").clientHeight)/(2+2*verticalfov))*(1+2*horisontalfov);
            document.getElementById("display").style.width = width;
            document.getElementById("display").setAttribute("style","width:"+width+"px;");
            startable = true;
            Beggininginterval = document.getElementById("interval").value;
            interval = Beggininginterval;
            increseSpeed = document.getElementById("increse speed").checked;
            mainMenu = document.getElementById("display").innerHTML;
            var el = document.getElementById('display');
            while ( el.firstChild ) el.removeChild( el.firstChild );
            for (y = 0 ; y < 1+2*verticalfov ; y++){
                for (x = 0 ; x < 1+2*horisontalfov ; x++){
                    var div = document.createElement('div');
                    div.id = "partNo"+x+"/"+y;div.className = "part";
                    document.getElementById("display").appendChild(div);
                    document.getElementById("partNo"+x+"/"+y).style.height = 100/(1+2*verticalfov)+"%";
                    document.getElementById("partNo"+x+"/"+y).style.width = 100/(1+2*horisontalfov)+"%";
                }
            }
            direction = [0,-1,0];
            score = 0;
            document.getElementById("score").innerHTML=score;
            foodPosition = [-1,-1];
            snake = [];
            snake.push([horisontalfov,verticalfov,0,0]);
            for ( y = 1 ; y < 4 ; y++ ){
                snake.push([horisontalfov,Number(verticalfov)+y,0,0]);
            }
            setSnakeValuesAndRender(true);
        }
        function setSnakeValuesAndRender(SnakeGrowth){
            if (snake[0][0] == foodPosition[0] && snake[0][1] == foodPosition[1]){
                snake[0][2] = 1;
                foodPosition = [-1,-1];
                score++;
                document.getElementById("score").innerHTML=score;
                increse_speed();
            }
            if ( snake[Number(snake.length)-1][2] == 1 ){
                snake[Number(snake.length)-1][2] = 0;
                snake.push([snake[Number(snake.length)-1][0],snake[Number(snake.length)-1][1],0]);
                SnakeGrowth = true;
            }
            let snakeTemplate = [];
            for (i = 0 ; i < snake.length ; i ++){
                snakeTemplate.push(snake[i]);
            }
            snake [0] = [0,0,0,0];
            for( let currentlyUpdatedSnakePart = 1 ; currentlyUpdatedSnakePart < snake.length ; currentlyUpdatedSnakePart++){
                snake[currentlyUpdatedSnakePart] = snakeTemplate[currentlyUpdatedSnakePart - 1];
                if (snake[currentlyUpdatedSnakePart][2] == 0){
                    document.getElementById("partNo"+snake[currentlyUpdatedSnakePart][0]+"/"+snake[currentlyUpdatedSnakePart][1]).innerHTML = SP[snake[currentlyUpdatedSnakePart][3]];
                } else {
                    document.getElementById("partNo"+snake[currentlyUpdatedSnakePart][0]+"/"+snake[currentlyUpdatedSnakePart][1]).innerHTML = SP[Number(snake[currentlyUpdatedSnakePart][3]+6)];
                }
            }
            if (!SnakeGrowth){
                document.getElementById("partNo"+snakeTemplate[Number(snake.length)-1][0]+"/"+snakeTemplate[Number(snake.length)-1][1]).innerHTML = "";
                document.getElementById("partNo"+snakeTemplate[Number(snake.length)-1][0]+"/"+snakeTemplate[Number(snake.length)-1][1]).style.backgroundColor = "black";
            }
            if (foodPosition[0] == -1){
                randomizeFoodLocation();
            }
        }
        function randomizeFoodLocation(){
            let x = 0,y = 0;
            for (i=0;i==0;){
                x =Math.floor(Math.random() * (1+2*horisontalfov));
                y =Math.floor(Math.random() * (1+2*verticalfov));
                snake[0][0] = x;
                snake[0][1] = y;
                snake[0][2] = 0;
                if (IsNotSnake()){
                    break;
                }
            }
            foodPosition[0] = x;
            foodPosition[1] = y;
            document.getElementById("partNo"+(foodPosition[0])+"/"+(foodPosition[1])).style.backgroundColor = "red";
        }
        function IsNotSnake(){
            for (let i = 1; i < snake.length; i++){
                if (snake[0][0] == snake[i][0] && snake[0][1] == snake[i][1]){
                    return false;
                }
            }
            return true;
        }
        function IsNotBorder(){
            if (snake[0][0] == -1 || snake[0][1] == -1 || snake[0][0] == 1+2*horisontalfov || snake[0][1] == 1+2*verticalfov){
                return false;
            }
            return true;
        }
        document.addEventListener("keydown", function(event){
            if (event.keyCode == 38){//up
                buttonPressed(0);
            }
            if (event.keyCode == 40){//down
                buttonPressed(1);
            }
            if (event.keyCode == 37){//left
                buttonPressed(2);
            }
            if (event.keyCode == 39){//right
                buttonPressed(3);
            }
        });
        function buttonPressed(button){
            if (intervalStatus == "beggining" && startable){
                pastDirectionX = direction[0];
                pastDirectionY = direction[1];
                DirectionX = direction[0];
                DirectionY = direction[1];
                if (button == 0 && direction[1] != 1){//up
                    direction[0] = 0;
                    direction[1] = -1;
                    if (!loopStarted){startTheLoop();}
          intervalStatus = "waiting";
                } else if (button == 1 && direction[1] != -1 && loopStarted){//down
          direction[0] = 0;
          direction[1] = 1;
          intervalStatus = "waiting";
                } else if (button == 2 && direction[0] != 1){//left
                    direction[0] = -1;
                    direction[1] = 0;
                    if (!loopStarted){startTheLoop();}
          intervalStatus = "waiting";
                } else if (button == 3 && direction[0] != -1){//right
                    direction[0] = 1;
                    direction[1] = 0;
                    if (!loopStarted){startTheLoop();}
          intervalStatus = "waiting";
                }
                DirectionX = direction[0];
                DirectionY = direction[1];
                if (pastDirectionY == 0 && DirectionX == 0){
                    if (pastDirectionX == -1){
                        if (DirectionY == -1){
                            snake[1][3] = 2;
                        } else {
                            snake[1][3] = 4;
                        }
                    } else {
                        if (DirectionY == -1){
                            snake[1][3] = 3;
                        } else {
                            snake[1][3] = 5;
                        }
                    }
                    directionChanged = false;
                } else if (pastDirectionX == 0 && DirectionY == 0){
                    if (pastDirectionY == -1){
                        if (DirectionX == -1){
                            snake[1][3] = 5;
                        } else {
                            snake[1][3] = 4;
                        }
                    } else {
                        if (DirectionX == -1){
                            snake[1][3] = 3;
                        } else {
                            snake[1][3] = 2;
                        }
                    }
                    directionChanged = false;
                }
            }
        }
        function increse_speed(){
            if ((score % 10) == 0 && increseSpeed){
                interval -= interval/2;
            }
        }
        function startTheLoop(){
            loopStarted = true;
            var loop = setInterval(function(){
                directionChanged = true;
                intervalStatus = "beggining";
                pastDirection = [0,0,1];
                pastDirection[0] = Number(direction[0]);
                pastDirection[1] = Number(direction[1]);
                pastDirection[2] = 1;
                if (directionChanged){
                    if (pastDirection[0] == 0){
                        snake[0][3] = 0;
                    } else {
                        snake[0][3] = 1;
                    }
                }
                snake[0][0]=snake[1][0]+direction[0];snake[0][1]=snake[1][1]+direction[1];snake[0][2]=0;
                if (IsNotBorder() && IsNotSnake()){
                    setSnakeValuesAndRender(false);
                } else {
                    backToSquareOne();
                    loopStarted = false;
                    clearInterval(loop);
                }
            },interval);
        }
        function calculateMaxHorisontalFov(){
            window_width = Number(window.innerWidth);
            verticalfov = Number(document.getElementById("height").value);
            maxHorisontalFov = Math.round((window_width/(Number(document.getElementById("display").clientHeight)/(2+2*Number(verticalfov))))/2-2);
            document.getElementById("cMaxHFov").innerHTML="current max width based on height = "+maxHorisontalFov;
            document.getElementById("width").max = maxHorisontalFov;
            document.getElementById("width").setAttribute("max",maxHorisontalFov);
        }
        function readHighScoreFromJSON(){
            
        }
        function writeScoreToJSON(){
            if( score > highScore){
                
            }
        }

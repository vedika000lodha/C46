var gameState = "intro"
var introimg
var bg = "sprites/background 2.png"

function preload (){
    img = setBackground("intro")
    introimg = loadImage(img)
 }

 function setup (){
     createCanvas(displayWidth - 50, displayHeight - 60)
 }

 function draw (){
     background(introimg) 
     if (gameState === "intro"){
         var button = createButton('play')
         var title = createElement('h1')
         title.html("NINJA HUNT")
         title.position(displayWidth/ 2 - 100, 50)
         button.position(displayWidth/2, displayHeight/ 2 + 60)
         button.mousePressed(()=>{
            button.hide();
            gameState = "story"
            var greeting = createElement('h3')
            greeting.position(displayWidth/2 - 70, displayHeight/4);
           })
        } 
     if (gameState === "story"){
         console.log(gameState)
         img = setBackground("story")
         clear()
         textSize(20)
         fill("black")
         text("Fuma is a young boy who had lost his father in the battle against the dark ninja clans.", 30,200)
         text("Recently he lost his mother and his siblings in a massacre.",30,230) 
         text("He was thirsty for revenge when just then he a member of the hashira clan, Giyu tomioka approached him and told him that he would help him seek his goal.",30, 260)
         text("Fuma trained hard everyday and after 6 months of endless and extreme training he finally succeeded. Now he is out for revenge and will show NO mercy to his familys slaughterers!",30,290)
        }
    }

    function setBackground (state){
        if(gameState === state){
            bg = "sprites/background 1.png"
            return bg
        }
        if(gameState === state){
            bg = "sprites/background 2.png"
            return bg
        }
        console.log(bg)
    }

// BIRD AND WORM ANIMATION
// Copyright John van der Linden, 2025
// bird-worm11 & jvdl4 first fully functioning ones
/* global document, window */ //Needed for ESLint

"use strict";

// Create and display play button
const playBtn = document.createElement("button");
const playBtnTxt = ["&#x25B6;", "&#215;"];
playBtn.innerHTML = playBtnTxt[0];
playBtn.setAttribute("class", "birdBtn play triangle");

// Append HTML for stat bar, radio buttons
const statPlaceholder = document.querySelector(".stat-placeholder");
const rightBtnCont1 = document.querySelector("#btns-main-right .btn-cont1");
const rightBtnCont2 = document.querySelector("#btns-main-right .btn-cont2");
const rightBtnContTop = document.querySelector("#btns-top-right");
rightBtnCont1.appendChild(playBtn);
rightBtnContTop.innerHTML = `
  <form class="top-choices" style="display:none;">
  <fieldset style="border:none;"><legend>I would like the bird to:</legend>
  <div id="radio1"><input type="radio" name="wormchoose" id="choice1" value="eat">
  <label for="choice1">A: Eat the worm</label></div>
  <div id="radio2"><input type="radio" name="wormchoose" id="choice2" value="letgo">
  <label for="choice2">B: Let it go</label></div>
  </fieldset></form></div>`;
statPlaceholder.innerHTML = `
  <div class="stat-cont" style="display:none;"><div class="statlabel"></div>
  <div class="statbar"><div class="fillbar"><div class="filler"></div></div></div>
  <div class="statnum"></div></div>`;

//Array for storing bird and worm frames
const main = [`
 BIRD AND WORM     //.    
  l  forward     &lt; 0  )
  k  backward     !    \\
  ;  go to end    \\     !
  j  go to start   \\    )
  or use buttons   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\
     
                   

`,
`
    I'm            //.    
                 &lt; 0  )
                  !    \\
                  \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\
     
                   

`,
`
    I'm so         //.    
                 &lt; 0  )
                  !    \\
                  \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\
     
                   

`,
`
    I'm so         //.    
    hun          &lt; 0  )
                  !    \\
                  \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\
     
                                     ~~~

`,
`
    I'm so         //.    
    hungry       &lt; 0  )
                  !    \\
                  \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\
     
                                   '^~

`,
`
    I'm            //.    
                 &lt; 0  )
                  !    \\
                  \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\
     
                                 ~~~

`,
`
    I'm so         //.    
                 &lt; 0  )
                  !    \\
                  \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\
     
                               '^~

`,
`
    I'm so         //.    
    hun          &lt; 0  )
                  !    \\
                  \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\
     
                             ~~~

`,
`
    I'm so         //.    
    hungry       &lt; 0  )
                  !    \\
                  \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\
     
                           '^~

`,
`
    What'll        //.    
                 &lt; 0  )
                  !    \\
                  \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\
     
                         ~~~

`,
`
    What'll        //.    
    I            &lt; 0  )
                  !    \\
                  \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\
     
                       '^~

`,
`
    What'll        //.    
    I eat?       &lt; 0  )
                  !    \\
                  \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\
     
                    ~~~

`,
`
    Hmmm....       //.    
                  &lt; o )
                  !    \\
                  \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\
     
                   '^~

`,
`
                   //.    
 {{ wha...? }}    &lt; . )
                  !    \\
                  \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\
     
                   ~~~

`,
`
                   ,//,    
   ,\\ * | * /,    (. .)
  --  AHA!!! --   | V  \\
   \`/ # | # \\\`    \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\
                       
                   ~~~

`,
`

                   ,//,    
              .-,,(. .),,,-.
             /,-,,/ V  ),,-,\\
             \`    \\    /    \` 
                   / | \\
==================&amp;==&amp;==========
                       \\_\\

                   ~~~

`,
`

                   ,//,    
          .----,__(. .),___,----.
           \`\`\`.,,,/ V  ),,,..-\`\`
                  \\    /
                   / | \\
==================&amp;==&amp;==========
                       \\_\\
                       
                   ~~~

`,
`


                   ,//,    
          .----,__(. .),___,----.
           \`\`\`.,,,,\\V /,,,.-\`\`\`\`
                   / | \\
==================&amp;==&amp;==========
                      \`-\`

                   ~~~

`,
`



                   /|\\    
          .----,__(. .),__,----.
           \`\`\`\`\`\`\`'.V.'\`\`\`\`\`\`\`\`
==================&amp;===&amp;=========
                       

                   ~~~

`,
`



            ^.             .^
            \\\\\`\`\`-,/|\\,-\`\`\`//
             \`----(. .)----\`  
=================&amp;=\`V\`=&amp;========
                 
                       
                   ~~~

`,
`



            ^.     ,-,     .^
            \\\\\`\`\`--\` \`--\`\`\`//
             \`----,/|\\,----\`  
=================&amp;(. .)&amp;========
                   \`V\`
                 
                   ~~~

`,
`



                   ,,,      
            ^.     : :     .^
            \\\\\`\`\`--\` \`--\`\`\`//
=============\`--___/|\\___--\`==== 
                  (. .)
                   \`V\`
                   ~~~                 

`,
`



                  :\`\`\`:   
            ^.     \\ /     .^
            \\\\\`\`\`--\` \`--\`\`\`//
=============\`--__     __--\`====  
                  \\/|\\/
                  (. .)
                   ~V~

`,
`



                  :\`\`\`:   
            ^.     \\ /     .^
            \\\\\`\`\`--\` \`--\`\`\`//
=============\`--__     __--\`====
         $        \\/|\\/
            +     (. .)   * $
        +   *  .   ~V~     .  +
             *  .       *   *
`,
`



                  :\`\`\`:   
            ^.     \\ /     .^
            \\\\\`\`\`--\` \`--\`\`\`//
=============\`--__     __--\`====
          $       \\/|\\/
           +  .   (. .)  *    $
         +   *     ~V~    .     +
            *  .       *     *
`,
`



                  :\`\`\`:   
            ^.     \\ /     .^
            \\\\\`\`\`--\` \`--\`\`\`//
=============\`--__     __--\`====
         $        \\/|\\/
            +     (. .)   * $
        +   *  .   ~V~     .  +
             *  .       *   *
`,
`



                  :\`\`\`:   
            ^.     \\ /     .^
            \\\\\`\`\`--\` \`--\`\`\`//
=============\`--__     __--\`====
          $       \\/|\\/
           +  .   (. .)  *    $
         +   *     ~V~    .     +
            *  .       *     *
`,
`



                   ,,,      
            ^.     : :     .^
            \\\\\`\`\`--\` \`--\`\`\`//
=============\`--___/|\\___--\`====
                  (. .)
                   ~V~


`,
`



            ^.     ,-,     .^
            \\\\\`\`\`--\` \`--\`\`\`//
             \`----,/|\\,----\`  
=================&amp;(. .)&amp;========
                   ~V~



`,
`



            ^.             .^
            \\\\\`\`\`-,/|\\,-\`\`\`//
             \`----(. .)----\`  
=================&amp;=~V~=&amp;========




`,
`



                   /|\\    
          .----,__(. .),__,----.
           \`\`\`\`\`\`\`'~V~'\`\`\`\`\`\`\`\`
==================&amp;===&amp;=========




`,
`


                   ,//,    
          .----,__(. .),___,----.
           \`\`\`.,,,,~V~/,,,.-\`\`\`\`
                   / | \\
==================&amp;==&amp;==========
                       \`-\`



`,
`

                   ,//,    
             .-,__(. .),__,-.
            /,-,,,/~V~ ),,,-,\\
            \`     \\    /     \` 
                   / | \\
==================&amp;==&amp;==========
                       \\_\\



`,
`

                   ,//,    
              .-,,(. .),,,-.
             /,-,,/~V~ ),,-,\\
             \`    \\    /    \` 
                   / | \\
==================&amp;==&amp;==========
                       \\_\\



`,
`

                   ,//,    
                .-(. .),-.
               /,-/~V~ )-,\\
               \`  \\    /  \` 
                   / | \\
==================&amp;==&amp;==========
                       \\_\\



`,
`

                   ,//,    
                  (. .)
                  /~V~ )
                  \\    /
                   / | \\
==================&amp;==&amp;==========
                       \\_\\



`,
`
                   ,//,    
                  (. .)
                  |~V~ \\
                  \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\



`,
`
                   //.    
                ~&lt;~ o )
                  !    \\
                  \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\



`,
`
            .      //.      *    +
        $       ~&lt;~ o )    . *    
      +     *     !    \\
          .   +   \\     !     +   $
         *         \\    )   $  .  
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\



`,
`
             .     //.     *      +
         $      ~&lt;~ o )   .   *    
      +    *      !    \\
         .     +  \\     !      + $
          *        \\    )    $    .  
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\



`,
`
            .      //.      *    +
        $       ~&lt;~ o )    . *    
      +     *     !    \\
          .   +   \\     !     +   $
         *         \\    )   $  .  
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\



`,
`
             .     //.     *      +
         $      ~&lt;~ o )   .   *    
      +    *      !    \\
         .     +  \\     !      + $
          *        \\    )    $    .  
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\



`,
`
            .      //.      *    +
        $       ~&lt;~ o )    . *    
      +     *     !    \\
          .   +   \\     !     +   $
         *         \\    )   $  .  
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\



`,
`
             .     //.     *      +
         $      ~&lt;~ o )   .   *    
      +    *      !    \\
         .     +  \\     !      + $
          *        \\    )    $    .  
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\



`,
`
            .      //.      *    +
        $       ~&lt;~ o )    . *    
      +     *     !    \\
          .   +   \\     !     +   $
         *         \\    )   $  .  
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\



`,
`
 #############     //.     *      +
 #  LEVEL 1  #  ~&lt;~ o )   .   *    
 #  COMPLETE #    !    \\
 #############    \\     !      + $
               .   \\    )    $    .  
          *        / |\\ \\
==================&amp;==&amp;==========
                        \\_\\
 *To proceed to the next level,
   click "On to Level 2" below
 *To rewind Level 1, use keys/buttons
`,
`
                   //.
  LEVEL 2       ~&lt;~ o )
 What would you   !    \\
 like the bird to \\     !
 do? Eat the worm  \\    )
 or let it go?     / |\\ \\
==================&amp;==&amp;==========
                        \\_\\
 *To proceed, make a choice  
   using the radio buttons at top
 *Or revisit Level 1 via link below
`];

// User's first choice for ending the animation
const choice1 = [`
                   //.
                ~&lt;~ o )
                  !    \\
 Eat the worm     \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\
 *To proceed, use buttons or
   keyboard as in Level 1

`,
`
                   //.
                 ~&lt;~o )
                  !    \\
                  \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\



`,
`
                   //.
                  ~&lt;~o)
                  !    \\
                  \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\



`,
`
                   /|\\
                  (~&lt;~)
                  !    \\
                  \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\



`,
`
                   /|\\
                  (~^~)
                  !    \\
                  \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\



`,
`
                  ~;^;~
                  (   )
                  !    \\
                  \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\



`,
`
                   ~^~.
                  (    )
                  !    \\
                  \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\



`,
`
                   .^.
                 (\`   \`)
                  !\`-\` \\
                  \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\



`,
`
                   .^.
                  (\` \`)
                  !'..'\\
                  \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\



`,
`
                   .^.
                  (, ,)
                  !.  .\\
                  \\ \`\`  !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\



`,
`
                   .^.
                  (   )
                  !    \\
                  \\ \`\`  !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\



`,
`
                   .^.
                  (   )
                  !    \\
                  \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\



`,
`
                   /|\\
                  (\`^\`)
                  !    \\
                  \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\



`,
`
                   /|\\
                  (&lt; o)
                  !    \\
                  \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\



`,
`
                   //!
                  &lt; 0 )
                  !    \\
                  \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\



`,
`
 #############     //.
 #  LEVEL 2  #   &lt; 0  )
 #  COMPLETE #    !    \\
 #############    \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\



`];

// User's second choice for ending the animation
const choice2 = [`
                   //.
                ~&lt;~ o )
                  !    \\
 Let worm go      \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\
 *To proceed, use buttons or
   keyboard as in Level 1

`,
`
                   //.
                ~&lt;~ o )
                  !    \\
                  \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\



`,
`
                   //.
                 ~&lt;~o )
                  !    \\
                  \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\



`,
`
                   //.
                  ~&lt;~\`)
                  !    \\
                  \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\



`,
`
                   /|\\
                  (~&lt;~)
                  !    \\
                  \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\



`,
`
                   /|\\
                  (~v~)
                  !    \\
                  \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\



`,
`
                   /|\\
                  (. .)
                  !~v~ \\
                  \\     !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\



`,
`
                    
                   /|\\
                  (. .),
                  \\~v~  !
                   \\    )
                   / |\\ \\
==================&amp;==&amp;==========
                        \\_\\



`,
`
                    
                   
                   /|\\
                  (. .),
                  \\~v~  )
                   / |\\ \\
==================&amp;==&amp;==========
                        \`-\`



`,
`
                    
                   
                   /|\\
                  (. .)
                  \\~v~ )
                   /  \\\\
==================&amp;===&amp;=========




`,
`
                   
                   
                   
                   /|\\
                 /(. .)\\
                 \`/~v~\\'
=================&amp;=====&amp;========
                       



`,
`
                   
                   
                   
                  .~"~.
                 / /|\\ \\
                 \`(. .)'
=================&amp;\`~v~\`&amp;========
                       



`,
`
                   
                   
                   ___
                   |_|
                  / - \\
                 ( /|\\ )
=================&amp;(. .)&amp;========
                   ~v~ 



`,
`
                   
                   
                   ___
                   | |
                  /   \\
                 !     !
=================( /|\\ )========
                  (. .) 
                   ~v~


`,
`
                   
                   
                   ___
                   | |
                  ,' ',
                 !     !
=================(     )========
                  \\/|\\/ 
                  (. .)
                   ~v~

`,
`
                   
                   
                   ___
                   | |
                  ,' ',
                 !     !
=================( /|\\ )========
                  (. .) 
                   \`v\`
                   ~~~

`,
`
                   
                   
                   ___
                   | |
                  ,' ',
                 ! /|\\ !
=================((. .))========
                   \`v\` 
                   
                   ~~~

`,
`
                   
                   
                   
                   --- 
                  ,' ',
                 ! /|\\ !
=================((. .))========
                   \`v\` 
                   
                   ~~~

`,
`
                   
                   
                   
                   
                  ,/|\\,
                 ((. .))
=================&amp;\`'v'\`&amp;========
                   
                   
                   ~~~

`,
`
                   
                   
                   
                   
                  ,/|\\,
                 ((. .))
=================&amp;\`'v'\`&amp;========
                   
                   
                    ~^'

`,
`
                   
                   
                   
                   
                  ,/|\\,
                 ((. .))
=================&amp;\`'v'\`&amp;========
                   
                   
                     ~~~

`,
`
                   
                   
                   
                   
                  ,/|\\,
                 ((. .))
=================&amp;\`'v'\`&amp;========
                   
                   
                      ~^'

`,
`
                   
                   
                   
                   
                  ,,/|\\,
                 ( (. .)
=================&amp;=\`'v'&amp;========
                   
                   
                       ~~~

`,
`
                   
                   
                   
                   
                  ,,/|\\,
                 ( (. .)
=================&amp;=\`'v'&amp;========
                   
                   
                        ~^'

`,
`
                   
                   
                   
                   
                _,-.\\\\.
                \`(( .  )
=================&amp;=\`\`v\`&amp;========
                   
                   
                         ~~~

`,
`
                   
                   
                   
               __     
               \`,\`=-.\\\\.
                \\( ( .  )
=================&amp;-''\`v\`========
                   
                   
                          ~^'

`,
`
                   
                   
                   
               __     
               \`,\`==.\\\\.
                \\(\` ( . )
=================&amp;'..\`-v =======
                   
                   
                           ~~~

`,
`
                   
                   
                   
               __     
               \`,\`==.\\\\.
                \\(\` ( . )
=================&amp;'..\`-v =======
                   
                   
                            ~^'

`,
`
                   
                   
                   
               __     
               \`,\`==.\\\\.
                \\(\` ( . )
=================&amp;'..\`-v =======
                   
                   
                              ~~~

`,
`
                   
                   
                   
               __     
               \`,\`==.\\\\.
                \\(\` ( . )
=================&amp;'..\`-v =======


                                ~^'

`,
`
                   
                   
                   
               __     
               \`,\`==.\\\\.
                \\(\` ( . )
=================&amp;'..\`-v =======


                                  ~~~

`,
`
                   
                   
                   
               __     
               \`,\`==.\\\\.
                \\(\` ( . )
=================&amp;'..\`-v =======


                                    ~^'

`,
`
                   
                   
                   
               __     
               \`,\`==.\\\\.
                \\(\` ( . )
=================&amp;'..\`-v =======


                                      ~~

`,
`
                   
                   
                   
               __     
               \`,\`==.\\\\.
                \\(\` ( . )
=================&amp;'..\`-v =======




`,
`
                   
                   
                   
               __    \\\\.  
               \`,\`="( . )
                \\(\`  \`-v
=================&amp;\`..\`&amp;=========




`,
`
                   
                   
                   
               __    \\\\.  
               \`,\`="( o &gt;
                \\(\`    /
=================&amp;\`..\`&amp;=========




`,
`
                   
                   
                    .\\\\
               __ ,(  o &gt;  
               \`,'     /
                \\(\`   /
=================&amp;\`--\`&amp;=========




`,
`
                   
                    .\\\\
                  ,(  o &gt;
               __/     !
               \`,'    /
                \\\`\`..\\
=================&amp;\`-- &amp;=========




`,
`
                   .\\\\
                  (  o &gt;
                  /    \\
               _./.    !
               \`,'    /
                 |\`''\\
=================&amp;\`---&amp;=========




`,
`
                   .\\\\.
                  (o &gt;o)
                  /    \\
               _./.    !
               \`,'    /
                 |\`''\\
=================&amp;\`---&amp;=========




`,
`
                   .//.
                  (&lt; o )
                  /    \\
               _./.    !
               \`,'    /
                 |\`--\\
=================&amp;\`---&amp;=========




`,
`
                   .//.
                  &lt; 0  )
                  /    \\
               _,/.    !
               \`,'    /
                 |\`--\\
=================&amp;\`---&amp;=========




`,
`
                   //.
                 &lt; 0  )
                  !    \\
               _./.    !
               \`,'    /
                 |\`--\\
=================&amp;\`---&amp;=========




`,
`
    Hmmm...        //.
                 &lt; 0  )
                 ;    \\
                i\`    !
              -;:    /
                \`|--\`\\
=================&amp;\`---&amp;=========




`,
`
    Hmmm...    ?  //.  ?
 I wonder if    &lt; 0  )   ?
 that bird      ,\`   l
 feeder is      [     !
 open right    -;    /
   now...?       |--\`\\
=================&amp;\`---&amp;=========




`,
`
    Hmmm...   ?   //.   ?
 I wonder if    &lt; 0  )  ?
 that bird      ,\`   l
 feeder is      [     !
 open right    -;    /
   now...?       |--\`\\
=================&amp;\`---&amp;=========




`,
`
    Hmmm...     ? //.    ?
 I wonder if    &lt; 0  ) ?
 that bird      ,\`   l
 feeder is      [     !
 open right    -;    /
   now...?       |--\`\\
=================&amp;\`---&amp;=========




`,
`
    Hmmm...    ?  //.  ?
 I wonder if    &lt; 0  )   ?
 that bird      ,\`   l
 feeder is      [     !
 open right    -;    /
   now...?       |--\`\\
=================&amp;\`---&amp;=========




`,
`
                  //.  
  Let's find    &lt; 0  )   
   out!         ,\`   l
                [     !
               -;    /
                 |--\`\\
=================&amp;\`---&amp;=========




`,
`
                  //.  
                &lt; 0  )   
                .\`    l
                !     :
                \\     ;
                 |--\`|
=================&amp;\`--&amp;==========




`,
`
                  //.  
                &lt; 0  )   
             ,i'|\`    !i.
            /.'\`i     :\`'\\
            \`   \\     ;  \`
                 |--\`|
=================&amp;\`--&amp;==========




`,
`
                  //.  
            ____&lt; 0  ) ____  
      ,-"'\`\`..,,!     !,,..\`\`'"-,
                :     :
                \\     ;   
                 |--\`|
=================&amp;\`--&amp;==========




`,
`
                    
                 .//.
           ____ (&lt; 0 ) ____  
     """'\`\`..,,\`!      !,,..\`\`'"""
                \\     ,:   
                 '/,,|'
=================&amp;\`--&amp;==========




`,
`
      
      
                 .//.
           ____ (&lt; 0 ),_____  
      "'\`\`..,,..\\    ,:,,..\`\`'"""'
                 ',,,'/
=================&amp;\`--&amp;==========




`,
`
      
      
      
             .//.
 .__________(&lt; 0 ),_____________.
    \`\`\`\`'''"\\     ,:,''''"\`\`\`
=============\`.,.'\`=============




`,
`
      
      


          .//.
_________(&lt; 0 ),_____________.
\`\`\`\`\`'''"\\\`--\`  ;''''''\`\`=======
          \`'--'\`



`,
`
      
      



      .//.  ___
_____(&lt; 0 ),_____________. =====
\`'''"\\\`--\`  ,;''''''\`\`
      \`'''\`\`


`,
`
      
      



         
= .//. /\`\`7 ====================
_(&lt; 0 )''======-------\` 
 \`'.,,.''\`\`\`
  

`,
`
      
      




================================
/. /\`\`7 
0 )''======-------\` 
,,.''\`\`\`
  
`,
`
      
      




================================

\`\`7 
=======-------\` 
\`\`\`  
`,
`
      
      




================================


 
===-------\`  
`,
`
      
      




================================


 
  
`,
`                      //\\\\    /\\/\\      
 #############        |  |    
 #  LEVEL 2  #       -|:.|-     ^^
 #  COMPLETE #        |:;|         
 #############       -|;:|-    /\\@/\\
                'D-   |:;|        \`
            . . (V)  -|==|- .:. .
================/===============
                

                   ~~~  ~^'  ~~~  ~^'
  
`,
`                     ____|____  ^^
 #############      /////:\\\\\\\\\\    
 #  LEVEL 2  #     /===========\\  /\\/\\
 #  COMPLETE #   D- |;':;.;:.;|       
 #############  (V) |:;:,':;";|
                / \`-------------    
           . . .:. .     . .:..
================================


                     ~^'  ~~~  ~^'  ~~~
  
`];

// Groundwork for manipulating bird and worm frames
let j = 0;
let playBtnIndex = 0;
let done1 = false; let done2A = false; let done2B = false;
const birdStart = document.querySelector("#birdStart");
const eternalBird = birdStart.innerHTML;
const radiosForm = document.querySelector(".top-choices");
const statLabel = document.querySelector(".statlabel");
const filler = document.querySelector(".filler");
const statNum = document.querySelector(".statnum");
const statCont = document.querySelector(".stat-cont");

let btn, startBtn, prevBtn, nextBtn, endBtn;
let changeBtn, choice1Btn, choice2Btn, hotKeys, keyImg;
let hotKeysExpl, hKBtn, hKOn;
let ctrlMains = []; let ctrlTops = [];
const c = ["Back to Level 1", "On to Level 2"];
function rad0() {ctrlTops.forEach((n) => {n.checked = false;});}
function hideTops() {radiosForm.style.display = "none";}
function showTops() {radiosForm.style.display = "block"; rad0();}
function hideChg() {changeBtn.style.display = "none";}
function showHotKeys() {hotKeys.style.display = "block"; hotKeysExpl.style.display = "none";}
function hideHotKeys() {
  hotKeys.style.display = "none"; 
  hotKeysExpl.style.display = "none"; 
  keyImg.src = "images/hotkeys/hotkeys3_d_85px.png"; hKOn = false;
}
function showChgTo1() {changeBtn.textContent = c[0]; changeBtn.style.display = "block";}
function showChgTo2() {changeBtn.textContent = c[1]; changeBtn.style.display = "block";}
function showStats() {
  statCont.style = "display: flex; flex-direction: row; align-items: center"; stat();
}
function hideStats() {statCont.style = "display: none";}
function turnOff(button) {button.setAttribute("class", "birdBtn ctrls ctrl-main turned-off");}
function turnOn(button) {button.setAttribute("class", "birdBtn ctrls ctrl-main turned-on");}
function setDone1(g) {done1 = g; if (g === true) {turnOn(endBtn);} else {turnOff(endBtn);}}
function setDone2A(g) {done2A = g; if (g === true) {turnOn(endBtn);} else {turnOff(endBtn);}}
function setDone2B(g) {done2B = g; if (g === true) {turnOn(endBtn);} else {turnOff(endBtn);}}

function jAdd() {j = j + 1;}
function jSub() {j = j - 1;}
const mL = main.length;
const c1L = choice1.length;
const c2L = choice2.length;
const mainC1C2L = mL + c1L + c2L;
const framesAll = main.concat(choice1, choice2);
const zerop0 = 0; const zerop1 = 1; const mLm3 = mL - 3; const mLm2 = mL - 2; const mLm1 = mL - 1;
const mLp1 = mL + 1; const mLC = mL + c1L; const mLCm2 = mLC - 2; const mLCm1 = mLC - 1;
const mLCp1 = mLC + 1; const mLCCm2 = mainC1C2L - 2; const mLCCm1 = mainC1C2L - 1;
let f = 0; let w = "one"; let d = "zerop0"; let q = 0;
let m1 = []; let m2A = []; let m2B = [];
let m1s = ["zerop0", "zerop1"]; let m1e = ["mLm3", "mLm2"]; let mchAB = ["mLm1"];
let m2As = ["mL", "mLp1"]; let m2Ae = ["mLCm2", "mLCm1"];
let m2Bs = ["mLC", "mLCp1"]; let m2Be = ["mLCCm2", "mLCCm1"];
for (q = 0; q < (main.length - 5); q++) {m1.push("");}
for (q = 0; q < (choice1.length - 4); q++) {m2A.push("");}
for (q = 0; q < (choice2.length - 4); q++) {m2B.push("");}
let dArray = m1s.concat(m1, m1e, mchAB, m2As, m2A, m2Ae, m2Bs, m2B, m2Be);

const arrayLngthsDisplay = {one: mL - 2, chAB: 0, twoA: c1L - 1, twoB: c2L - 1};
const arrayLngthsDivision = {one: mL - 2, chAB: 1, twoA: c1L - 1, twoB: c2L - 1};
const lbls = {one: "Level 1", chAB: "Level 2", twoA: "Level 2 Opt.A", twoB: "Level 2 Opt.B"};
const setF = {
  one: {set() {f = j;}}, chAB: {set() {f = 0;}},
  twoA: {set() {f = j - mL;}}, twoB: {set() {f = j - mLC;}}
};
function drawBar() {
  filler.style.width = `${Math.round((f / arrayLngthsDivision[w]) * 100)}%`;
}
function stat() {
  setF[w].set(); drawBar();
  statLabel.innerHTML = `${lbls[w]}`;
  statNum.innerHTML = `${f} / ${arrayLngthsDisplay[w]}`;
}
function fs() {birdStart.innerHTML = framesAll[j]; stat();}


// Begin executing event listeners by evaluating the value of j
function iterate() {
  d = dArray[j];
  if ((0 <= j) && (j <= mLm2)) {w = "one";
    if ((zerop1 < j) && (j < mLm3)) {standardBtn();} // note "<"
    else {
      if (j <= zerop1) {
        if ((btn === "n") && (j === zerop1)) {btnMap[btn].standard();}
        else if (btn === "e") {btnMap[btn][w].standard();}
        else {marginBtn();}
      }
      else if (j === mLm2) {
        if ((btn === "n") || (btn === "e")) {fs();}
        else {marginBtn();}
      }
      else {marginBtn();}
    }
  }
  else if ((mL <= j) && (j <= mLCm1)) {w = "twoA";
    if ((mLp1 < j) && (j < mLCm2)) {standardBtn();} // note "<"
    else {
      if (btn === "A") {fs();}
      else if ((btn === "B") || (btn === "chg")) {btnMap[btn][w].standard();}
      else if ((btn === "p") && (j === mLCm2)) {btnMap[btn].standard();}
      else if ((btn === "s") && (j >= mLp1)) {btnMap[btn][w].standard();}
      else if (j <= mLp1) {
        if ((btn === "n") && (j === mLp1)) {btnMap[btn].standard();}
        else if (btn === "e") {btnMap[btn][w].standard();}
        else {marginBtn();}
      }
      else {marginBtn();}
    }
  }
  else if ((mLC <= j) && (j <= mLCCm1)) {w = "twoB";
    if ((mLCp1 < j) && (j < mLCCm2)) {standardBtn();} // note "<"
    else {
      if (btn === "B") {fs();}
      else if ((btn === "A") || (btn === "chg")) {btnMap[btn][w].standard();}
      else if ((btn === "p") && (j === mLCCm2)) {btnMap[btn].standard();}
      else if ((btn === "s") && (j >= mLCp1)) {btnMap[btn][w].standard();}
      else if (j <= mLCp1) {
        if ((btn === "n") && (j === mLCp1)) {btnMap[btn].standard();}
        else if (btn === "e") {btnMap[btn][w].standard();}
        else {marginBtn();}
      }
      else {marginBtn();}
    }
  }
  else if (j === mLm1) {w = "chAB"; d = "mLm1"; marginBtn();}
}

// Continue executing event listeners for certain values of j,
// according to button value ("btn") and game level ("w")
function standardBtn() {
  if ((btn === "n")||(btn === "p")) {btnMap[btn].standard();}
  else {btnMap[btn][w].standard();}
}
function marginBtn() {
  btnMap[btn][w][d].t();
}
const btnMap = {
  n: {
    chAB: {
      mLm1: {t() {fs();}}
    },
    one: {
      mLm3: {t() {turnOff(nextBtn); turnOff(endBtn); showChgTo2(); done1 = true; jAdd(); fs();}},
      zerop0: {t() {turnOn(prevBtn); turnOn(startBtn); jAdd(); fs();}}
    },
    twoA: {
      mL: {t() {turnOn(prevBtn); jAdd(); fs();}},
      mLCm1: {t() {fs();}},
      mLCm2: {t() {done2A = true; turnOff(nextBtn); turnOff(endBtn); jAdd(); fs();}}
    },
    twoB: {
      mLC: {t() {turnOn(prevBtn); jAdd(); fs();}},
      mLCCm1: {t() {fs();}},
      mLCCm2: {t() {done2B = true; turnOff(nextBtn); turnOff(endBtn); jAdd(); fs();}}
    },
    standard() {jAdd(); fs();}
  },
  p: {
    chAB: {
      mLm1: {t() {fs();}}
    },
    one: {
      mLm2: {t() {turnOn(nextBtn); turnOn(endBtn); hideChg(); jSub(); fs();}},
      mLm3: {t() {jSub(); fs();}},
      zerop0: {t() {fs();}},
      zerop1: {t() {turnOff(prevBtn); turnOff(startBtn); jSub(); fs();}}
    },
    twoA: {
      mL: {t() {fs();}},
      mLCm1: {t() {turnOn(nextBtn); turnOn(endBtn); jSub(); fs();}},
      mLp1: {t() {turnOff(prevBtn); jSub(); fs();}}
    },
    twoB: {
      mLC: {t() {fs();}},
      mLCCm1: {t() {turnOn(nextBtn); turnOn(endBtn); jSub(); fs();}},
      mLCp1: {t() {turnOff(prevBtn); jSub(); fs();}}
    },
    standard() {jSub(); fs();}
  },
  e: {
    chAB: {
      mLm1: {t() {fs();}}
    },
    one: {
      mLm3: {t() {
        if (done1 === false) {fs();}
        else {
          turnOff(endBtn); turnOff(nextBtn); turnOn(prevBtn);
          turnOn(startBtn); showChgTo2(); j = mLm2; fs();
        }
      }},
      standard() {
        if (done1 === false) {fs();}
        else {
          turnOff(endBtn); turnOff(nextBtn); turnOn(prevBtn);
          turnOn(startBtn); showChgTo2(); j = mLm2; fs();
        }
      }
    },
    twoA: {
      mLCm1: {t() {fs();}},
      mLCm2: {t() {
        if (done2A === false) {fs();}
        else {
          turnOff(endBtn); turnOff(nextBtn); turnOn(prevBtn); turnOn(startBtn);
          j = mLCm1; fs();
        }
      }},
      standard() {
        if (done2A === false) {fs();}
        else {
          turnOff(endBtn); turnOff(nextBtn); turnOn(prevBtn); turnOn(startBtn);
          j = mLCm1; fs();
        }
      }
    },
    twoB: {
      mLCCm1: {t() {fs();}},
      mLCCm2: {t() {
        if (done2B === false) {fs();}
        else {
          turnOff(endBtn); turnOff(nextBtn); turnOn(prevBtn); turnOn(startBtn);
          j = mLCCm1; fs();
        }
      }},
      standard() {
        if (done2B === false) {fs();}
        else {
          turnOff(endBtn); turnOff(nextBtn); turnOn(prevBtn); turnOn(startBtn);
          j = mLCCm1; fs();
        }
      }
    }
  },
  s: {
    chAB: {
      mLm1: {t() {fs();}}
    },
    one: {
      mLm2: {t() {
        turnOn(nextBtn); turnOn(endBtn); turnOff(prevBtn);
        turnOff(startBtn); hideChg(); j = zerop0; fs();
        }},
      mLm3: {t() {turnOff(prevBtn); turnOff(startBtn); j = zerop0; fs();}},
      standard() {turnOff(startBtn); turnOff(prevBtn); j = zerop0; fs();},
      zerop0: {t() {fs();}},
      zerop1: {t() {turnOff(startBtn); turnOff(prevBtn); j = zerop0; fs();}}
    },
    twoA: {
      mL: {t() {
        rad0(); turnOff(nextBtn); turnOff(startBtn); turnOff(prevBtn); turnOff(endBtn);
        w = "chAB"; j = mLm1; fs();
      }},
      standard() {
        turnOff(prevBtn); turnOn(nextBtn); j = mL; fs();
        if (done2A === true) {turnOn(endBtn);}
      }
    },
    twoB: {
      mLC: {t() {
        rad0(); turnOff(nextBtn); turnOff(startBtn); turnOff(prevBtn); turnOff(endBtn);
        w = "chAB"; j = mLm1; fs();
      }},
      standard() {
        turnOff(prevBtn); turnOn(nextBtn); j = mLC; fs();
        if (done2B === true) {turnOn(endBtn);}
      }
    }
  },
  A: {
    chAB: {
      mLm1: {t() {
        turnOff(prevBtn); turnOn(nextBtn); turnOn(startBtn); w = "twoA"; j = mL; fs();
        if (done2A === true) {turnOn(endBtn);} else {turnOff(endBtn);}
      }}
    },
    twoA: {
      standard() {fs();}
    },
    twoB: {
      standard() {
        turnOff(prevBtn); turnOn(nextBtn); turnOn(startBtn); w = "twoA"; j = mL; fs();
        if (done2A === true) {turnOn(endBtn);} else {turnOff(endBtn);}
      }
    }
  },
  B: {
    chAB: {
      mLm1: {t() {
        turnOff(prevBtn); turnOn(nextBtn); turnOn(startBtn); w = "twoB"; j = mLC; fs();
        if (done2B === true) {turnOn(endBtn);} else {turnOff(endBtn);}
      }}
    },
    twoA: {
      standard() {
        turnOff(prevBtn); turnOn(nextBtn); turnOn(startBtn); w = "twoB"; j = mLC; fs();
        if (done2B === true) {turnOn(endBtn);} else {turnOff(endBtn);}
      }
    },
    twoB: {
      standard() {fs();}
    }
  },
  chg: {
    chAB: {
      mLm1: {t() {
        w = "one"; j = mLm2; fs(); showChgTo2(); hideTops();
        turnOn(prevBtn); turnOn(startBtn);
      }}
    },
    one: {
      mLm2: {t() {
        w = "chAB"; j = mLm1; fs(); showChgTo1(); showTops();
        turnOff(nextBtn); turnOff(prevBtn); turnOff(startBtn); turnOff(endBtn);
      }},
      standard() {
        w = "chAB"; j = mLm1; fs(); showChgTo1(); showTops();
        turnOff(nextBtn); turnOff(prevBtn); turnOff(startBtn); turnOff(endBtn);
      }
    },
    twoA: {
      standard() {
        w = "one"; j = mLm2; fs(); showChgTo2(); hideTops();
        turnOn(prevBtn); turnOn(startBtn); turnOff(nextBtn); turnOff(endBtn);
      }
    },
    twoB: {
      standard() {
        w = "one"; j = mLm2; fs(); showChgTo2(); hideTops();
        turnOn(prevBtn); turnOn(startBtn); turnOff(nextBtn); turnOff(endBtn);
      }
    }
  }
};
// Fxn to create and display the other buttons
function createButtons() {

  startBtn = document.createElement("button");
  prevBtn = document.createElement("button");
  nextBtn = document.createElement("button");
  endBtn = document.createElement("button");
  changeBtn = document.createElement("button");
  choice1Btn = document.querySelector("#choice1");
  choice2Btn = document.querySelector("#choice2");
  hotKeys = document.createElement("div");
  ctrlMains = [startBtn, prevBtn, nextBtn, endBtn];
  ctrlTops = [choice1Btn, choice2Btn];

  startBtn.innerHTML = "|<";
  prevBtn.textContent = "<";
  nextBtn.textContent = ">";
  endBtn.textContent = ">|";
  playBtn.innerHTML = playBtnTxt[1];
  playBtn.setAttribute("class", "birdBtn play cross");

  ctrlMains.forEach((ctrlMain) => {
    ctrlMain.setAttribute("class", "birdBtn ctrls ctrl-main turned-on");
    ctrlMain.style.display = "block";
    rightBtnCont1.appendChild(ctrlMain);
  });

  hotKeys.setAttribute("class", "hotkeys-btn");
  hotKeys.style.display = "block";
  hotKeys.innerHTML = `<button>
    <img src='images/hotkeys/hotkeys3_d_85px.png' alt='click for list of hotkeys'></button>
    <div class='expl' style='display:none;'>
    <div>J</div>go to start<div>K</div>back<div>L</div>forward<div>;</div>go to end</div>
    <div class='hotkeys-tip'>Click to view list of hotkeys</div>`;
  rightBtnCont2.appendChild(hotKeys);
  hotKeysExpl = document.querySelector(".expl");
  keyImg = document.querySelector(".hotkeys-btn img");
  hKBtn = document.querySelector(".hotkeys-btn button");
  hKOn = false;

  changeBtn.setAttribute("class", "change-btn");
  changeBtn.style.display = "none";
  rightBtnCont2.appendChild(changeBtn);

  turnOff(prevBtn); turnOff(startBtn); turnOff(endBtn);
}

function toggleHk() {
    if (hKOn === false) {
      hotKeysExpl.style.display = "block"; hKOn = true;
      keyImg.src = "images/hotkeys/hotkeys3_u_85px.png";
    }
    else {
      hotKeysExpl.style.display = "none"; hKOn = false;
      keyImg.src = "images/hotkeys/hotkeys3_d_85px.png";
    }
}

// Fxns to activate buttons with event listeners
function keyInputs(pressed) {
  if (pressed.key === "j") {btn = "s"; iterate();}
  else if (pressed.key === "k") {btn = "p"; iterate();}
  else if (pressed.key === "l") {btn = "n"; iterate();}
  else if (pressed.key === ";") {btn = "e"; iterate();}
  else if (pressed.key === "m") {btn = "chg"; iterate();}
}
function listenForClicks() {
  startBtn.addEventListener("click", () => {btn = "s"; iterate();});
  prevBtn.addEventListener("click", () => {btn = "p"; iterate();});
  nextBtn.addEventListener("click", () => {btn = "n"; iterate();});
  endBtn.addEventListener("click", () => {btn = "e"; iterate();});
  changeBtn.addEventListener("click", () => {btn = "chg"; iterate();});
  choice1Btn.addEventListener("click", () => {btn = "A"; iterate();});
  choice2Btn.addEventListener("click", () => {btn = "B"; iterate();});
  hKBtn.addEventListener("click", () => {toggleHk();});
}
function startListeningForKeys() {
  window.addEventListener("keydown", keyInputs);
}
function stopListeningForKeys() {
  window.removeEventListener("keydown", keyInputs);
}

// Fxns to show/hide other buttons after first viewing
function hideButtons() {
  ctrlMains.forEach((ctrlMain) => {ctrlMain.style.display = "none";});
  hideTops(); hideStats(); hideChg(); hideHotKeys();
  playBtn.innerHTML = playBtnTxt[0];
  playBtn.setAttribute("class", "birdBtn play triangle");
}
function showButtons() {
  ctrlMains.forEach((ctrlMain) => {ctrlMain.style.display = "block";});
  showStats(); showHotKeys();
  playBtn.innerHTML = playBtnTxt[1];
  playBtn.setAttribute("class", "birdBtn play cross");
}

// Perform the above fxns when play button clicked
playBtn.addEventListener("click", () => {
  if ((playBtnIndex % 2) === 0) {
    fs();
    if (playBtnIndex === 0) {
      createButtons();
      showStats();
      listenForClicks();
      startListeningForKeys();
    }
    else {
      showButtons();
      startListeningForKeys();
    }
  }
  else {
    hideButtons(); hideHotKeys();
    birdStart.innerHTML = eternalBird;
    stopListeningForKeys();
    turnOff(prevBtn); turnOff(startBtn); turnOff(endBtn); turnOn(nextBtn);
    setDone1(false); setDone2A(false); setDone2B(false);
    w = "one"; d = "zerop0"; j = 0;
  }
  playBtnIndex = playBtnIndex + 1;
});
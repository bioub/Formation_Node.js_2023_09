setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);

console.log('E');

// Dans quel ordre vont s'afficher ces lettres :
// 1 / A B C D E
// 2 / E B A D C
// 3 / B E A D C

// call stack
// ^
// |
// |
// |                             [lg   ]
// |[st][st][st][st][lg] ...     [taskB] ...         [taskA][taskD] ...      [taskC]
// +-----------------------------5ms---------------------------------------------------> temps
//                  E            B                   B      D                C

// file d'attente de timers (0ms) : taskB
// file d'attente de timers (5ms) :
// file d'attente de timers (500ms) : taskA - taskD
// file d'attente de timers (501ms) : taskD
// file d'attente de timers (502ms) :
// file d'attente de timers (1000ms) : taskC
// file d'attente de timers (1001ms) :

// Jake Archibald JSConf Asia 2018 -> In the loop

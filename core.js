

$(document).keyup(function (e) {
    const key = keydownToKey[e.which || e.charcode]
    setBackgroundColor(key, 'pressed', 'pressing')
    e.preventDefault()
});

//keydown trata as teclas que keypress nao trata
$(document).keydown(function (e) {
    const key = keydownToKey[e.which]
    console.log(key, e.which)
    setBackgroundColor(key, 'pressing', 'pressed')
    e.preventDefault()
});
/*
//keypress trata as teclas imprimiveis
$(document).keypress(function (e) {
    const key = keydownToKeyHTML[e.which]
    console.log(key, e.which)
    setBackgroundColor(key, 'pressing', 'pressed')
    e.preventDefault()
});
*/


/*
$(document).on("keydown", function (e) {
// which verifica qual letra esta pressionada no teclado e retorna um codigo para cada tecla
        const key = keydownToKeyHTML[e.which]
        
//verifica se o array existe, se existir "isarray" retorna true 
        if(Array.isArray(key)) {
//enquanto "key" possuir um valor para interar/passar para "i" ira executar o for
            for(var i of key){
//se includes(i) for diferente de pressing (que tem o valor vazio) ou seja se for diferente de vazio, ele executa
                if (!pressing.includes(i)) {
                
//adicionando "i" ao pressing, que anteriormente estava vazio
                    pressing.push(i)
//chamando a funçao e passando seus respectivos parametros: key = i , status = pressing e remove = pressed    
                    setBackgroundColor(i, 'pressing', 'pressed')
                }
            }
        }
        else {
            if (!pressing.includes(key)) {
                pressing.push(key)
                setBackgroundColor(key, 'pressing', 'pressed')
            }
        }
    
        e.preventDefault()
    });
*/
/*
$(document).on("keyup", function (e) {
        const key = keydownToKeyHTML[e.which]
    
        if(Array.isArray(key)) {
            for(var i of key){
                let index = pressing.indexOf(i);
                if (index > -1) {
                    pressing.splice(index, 1);
                }
                setBackgroundColor(i, 'pressed', 'pressing')
            }
        }
        else {
            const index = pressing.indexOf(key);
            if (index > -1) {
                pressing.splice(index, 1);
            }
            setBackgroundColor(key, 'pressed', 'pressing')
        }
        
    });
*/
const keydownToKey = {
    8: 'key26', //delete
    9: 'key27', //tab
    13: 'key74', //enter
    17: 'key67', //ctrl
    91: 'key68', // windows
    18: 'key69', //alt
    32: 'key70', //space
    225: 'key71', // altgr
    93: 'key72',  // menu
    16: 'key53',  //shift
    20: 'key40',  // capslock
    192: 'key13', // ' ""
    189: 'key24', // - _
    187: 'key25', // = +
    188: 'key62', // , <
    190: 'key63', // . >
    193: 'key64', // ; :
    191: 'key65', // / ?
    226: 'key54', // \ |
    186: 'key50', // ç
    222: 'key51', // ~ ^
    220: 'key54', // \ |
    219: 'key38', // ´`
    221: 'key39', //[{

    27: 'key0',  //esc
    112: 'key1',  //F1
    113: 'key2',  //f2
    114: 'key3',  //f3
    115: 'key4',  //f4
    116: 'key5',  //f5
    117: 'key6',  //f6
    118: 'key7',  //f7
    119: 'key8',  //f8
    120: 'key9',  //f9
    121: 'key10', //f10
    122: 'key11',   //f11
    123: 'key12',   //f12
    48: 'key23',    //0
    49: 'key14',    //1
    50: 'key15',    //2
    51: 'key16',    //3
    52: 'key17',    //4
    53: 'key18',    //5
    54: 'key19',    //6
    55: 'key20',    //7
    56: 'key21',    //8
    57: 'key22',    //9
    65: 'key41',    //A
    66: 'key59', 	//B
    67: 'key57', 	//C
    68: 'key43', 	//D
    69: 'key30', 	//E
    70: 'key44', 	//F
    71: 'key45', 	//G
    72: 'key46', 	//H
    73: 'key35', 	//I
    74: 'key47', 	//J

    75: 'key48',   //K
    76: 'key49', 	//L
    77: 'key61', 	//M
    78: 'key60', 	//N
    79: 'key36', 	//O
    80: 'key37', 	//P
    81: 'key28',   //Q
    82: 'key31',   //R
    83: 'key42', 	//S
    84: 'key32', 	//T
    85: 'key34', 	//U
    86: 'key58',   //V
    87: 'key29',   //W
    88: 'key56', 	//X
    89: 'key33', 	//Y
    90: 'key55', 	//Z

}

const keydownToKeyHTML = {
    /*
    '27': 'key0', //esc
    '112': 'key1', //F1
    '113': 'key2', //f2
    '114': 'key3', //f3
    '115': 'key4', //f4
    '116': 'key5', //f5
    '117': 'key6', //f6
    '118': 'key7', //f7
    '119': 'key8', //f8
    '120': 'key9', //f9
    '121': 'key10', //f10
    '122': 'key11', //f11
    '123': 'key12', //f12
    //
    '192': 'key13', // ' ""
    '49': 'key14', // 1
    '50': 'key15', // 2
    '51': 'key16', //3
    '52': 'key17', //4 
    '53': 'key18', //5
    '54': 'key19', //6
    '55': 'key20', //7
    '56': 'key21', //8
    '57': 'key22', //9
    '48': 'key23', //0
    '189': 'key24', // - _
    '187': 'key25', // = +
    '8': 'key26', // backspace <-
    //keydown
    '69': 'key30', // e
    '82': 'key31', // r
    '84': 'key32', // t
    '89': 'key33', // y
    '85': 'key34', // u
    '73': 'key35', // i
    '79': 'key36', // o
    '80': 'key37', // p
    '219': 'key38', // ´`
    '221': 'key39', //[{
    //
    '20': 'key40', // capslock
    '65': 'key41', // a
    '83': 'key42', // s
    '68': 'key43', // d
    '70': 'key44', // f
    '71': 'key45', // g
    '72': 'key46', // h
    '74': 'key47', // j
    '75': 'key48', // k
    '76': 'key49', // L
    '186': 'key50', // ç
    '222': 'key51', // ~ ^
    '220': 'key52', // 
    '13': 'key74', // Enter
    //
    '16': ['key53', 'key66'], // Shift LR
    '226': 'key54', // \ |
    '90': 'key55', // z
    '88': 'key56', // x
    '67': 'key57', // c
    '86': 'key58', // v
    '66': 'key59', // b
    '78': 'key60', // n
    '77': 'key61', // m
    '188': 'key62', // , <
    '190': 'key63', // . >
    '191': 'key64', // ; :
    '193': 'key65', // / ?
    //
    '17': ['key67', 'key73'], // ctrl
    '91': 'key68', // windows
    '18': ['key69', 'key71'], // alt / altGR
    '32': 'key70', // space
    '93': 'key72', // menu



/****************************** */
 48: 'key23',    //0
 49: 'key14',    //1
 50: 'key15',    //2
 51: 'key16',    //3
 52: 'key17',    //4
 53: 'key18',    //5
 54: 'key19',    //6
 55: 'key20',    //7
 56: 'key21',    //8
 57: 'key22',    //9

 65 : 'key41',    //A
 66 : 'key59',
 67 : 'key57',
 68 : 'key43',
 69 : 'key30',
 70 : 'key44',
 71 : 'key45',
 72 : 'key46',
 73 : 'key35',
 74 : 'key47',
 75 : 'key48',
 76	: 'key49',
 77 : 'key61',
 78 : 'key60',
 79 : 'key36',
 80 : 'key37',
 81 : 'key28',
 82 : 'key31',
 83 : 'key42',
 84 : 'key32',
 85 : 'key34',
 86 : 'key58',
 87 : 'key29',
 88 : 'key56',
 89 : 'key33',
 90 : 'key55', //Z

}

function setBackgroundColor(key, status, remove) {
    const doc = elementById(key)

    if (!doc) return

    if (remove) {
        doc.classList.remove(remove)
    }

    doc.classList.add(status)
}
function elementById(id) {
    return document.getElementById(id)
}
var pressing = []
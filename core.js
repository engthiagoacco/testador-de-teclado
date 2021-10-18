
$(document).on("keydown", function (e) {
// which verifica qual letra esta pressionada no teclado e retorna um codigo para cada tecla
        const key = keydownToKeyHTML[e.which]
        console.log(key , e.which)
//verifica se o array existe, se existir "isarray" retorna true 
        if(Array.isArray(key)) {
//enquanto "key" possuir um valor para interar/passar para "i" ira executar o for
            for(var i of key){
//se includes(i) for diferente de pressing (que tem o valor vazio) ou seja se for diferente de vazio, ele executa
                if (!pressing.includes(i)) {
                console.log(pressing)
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


const keydownToKeyHTML = {
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
    //
    '9': 'key27', // tab
    '81': 'key28', // q
    '87': 'key29', // w
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
    '220': 'key52', // ]}
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
    '93': 'key72' // menu
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

                      //if we want to delete whole order of any items
//BOX1:
document.getElementById('cross1').addEventListener('click',function(){
    const buttonItems1=document.getElementById('box1btn2val')
    const boxItemOrdered1=document.getElementById('box1order')
    const boxItemOrderedTotalPrice1=document.getElementById('box1orderPrice')
    const totalItems=document.getElementById('totalItems')
    
    //transaction
    const moneyTotal=document.getElementById('finally-money')
    const MoneyHave=parseFloat(moneyTotal.innerText)
    const moneHaveToCut=parseFloat(boxItemOrderedTotalPrice1.innerText)
    moneyTotal.innerText=MoneyHave-moneHaveToCut

    totalItems.innerText=parseInt(totalItems.innerText)-parseInt(boxItemOrdered1.innerText)
    buttonItems1.innerText=0;
    boxItemOrdered1.innerText=0;
    boxItemOrderedTotalPrice1.innerText=0;

    const unvisible=document.getElementById('new1')
    unvisible.classList.add('hidden')

    //modal
    const offBox1Modal=document.getElementById('box1modal')
    offBox1Modal.classList.add('hidden')
    const modalTotal=document.getElementById('modalTOtal')
    modalTotal.innerText=MoneyHave-moneHaveToCut

})

//BOX2:
document.getElementById('cross2').addEventListener('click',function(){
    const buttonItems1=document.getElementById('box2btn2val')
    const boxItemOrdered1=document.getElementById('box2order')
    const boxItemOrderedTotalPrice1=document.getElementById('box2orderPrice')
    const totalItems=document.getElementById('totalItems')
    
    //transaction
    const moneyTotal=document.getElementById('finally-money')
    const MoneyHave=parseFloat(moneyTotal.innerText)
    const moneHaveToCut=parseFloat(boxItemOrderedTotalPrice1.innerText)
    moneyTotal.innerText=MoneyHave-moneHaveToCut

    totalItems.innerText=parseInt(totalItems.innerText)-parseInt(boxItemOrdered1.innerText)
    buttonItems1.innerText=0;
    boxItemOrdered1.innerText=0;
    boxItemOrderedTotalPrice1.innerText=0;

    const unvisible=document.getElementById('new2')
    unvisible.classList.add('hidden')

    //modal
    const offBox1Modal=document.getElementById('box2modal')
    offBox1Modal.classList.add('hidden')
    const modalTotal=document.getElementById('modalTOtal')
    modalTotal.innerText=MoneyHave-moneHaveToCut
})
//BOX3:
document.getElementById('cross3').addEventListener('click',function(){
    const buttonItems1=document.getElementById('box3btn2val')
    const boxItemOrdered1=document.getElementById('box3order')
    const boxItemOrderedTotalPrice1=document.getElementById('box3orderPrice')
    const totalItems=document.getElementById('totalItems')

    //transaction
    const moneyTotal=document.getElementById('finally-money')
    const MoneyHave=parseFloat(moneyTotal.innerText)
    const moneHaveToCut=parseFloat(boxItemOrderedTotalPrice1.innerText)
    moneyTotal.innerText=MoneyHave-moneHaveToCut
    
    totalItems.innerText=parseInt(totalItems.innerText)-parseInt(boxItemOrdered1.innerText)
    buttonItems1.innerText=0;
    boxItemOrdered1.innerText=0;
    boxItemOrderedTotalPrice1.innerText=0;

    const unvisible=document.getElementById('new3')
    unvisible.classList.add('hidden')

    //modal
    const offBox1Modal=document.getElementById('box3modal')
    offBox1Modal.classList.add('hidden')
    const modalTotal=document.getElementById('modalTOtal')
    modalTotal.innerText=MoneyHave-moneHaveToCut
})
// BOX4:
document.getElementById('cross4').addEventListener('click',function(){
    const buttonItems1=document.getElementById('box4btn2val')
    const boxItemOrdered1=document.getElementById('box4order')
    const boxItemOrderedTotalPrice1=document.getElementById('box4orderPrice')
    const totalItems=document.getElementById('totalItems')

    //transaction
    const moneyTotal=document.getElementById('finally-money')
    const MoneyHave=parseFloat(moneyTotal.innerText)
    const moneHaveToCut=parseFloat(boxItemOrderedTotalPrice1.innerText)
    moneyTotal.innerText=MoneyHave-moneHaveToCut
    
    totalItems.innerText=parseInt(totalItems.innerText)-parseInt(boxItemOrdered1.innerText)
    buttonItems1.innerText=0;
    boxItemOrdered1.innerText=0;
    boxItemOrderedTotalPrice1.innerText=0;

    const unvisible=document.getElementById('new4')
    unvisible.classList.add('hidden')

    //modal
    const offBox1Modal=document.getElementById('box4modal')
    offBox1Modal.classList.add('hidden')
    const modalTotal=document.getElementById('modalTOtal')
    modalTotal.innerText=MoneyHave-moneHaveToCut
})
// BOX 5:
document.getElementById('cross5').addEventListener('click',function(){
    const buttonItems1=document.getElementById('box5btn2val')
    const boxItemOrdered1=document.getElementById('box5order')
    const boxItemOrderedTotalPrice1=document.getElementById('box5orderPrice')
    const totalItems=document.getElementById('totalItems')

    //transaction
    const moneyTotal=document.getElementById('finally-money')
    const MoneyHave=parseFloat(moneyTotal.innerText)
    const moneHaveToCut=parseFloat(boxItemOrderedTotalPrice1.innerText)
    moneyTotal.innerText=MoneyHave-moneHaveToCut
    
    totalItems.innerText=parseInt(totalItems.innerText)-parseInt(boxItemOrdered1.innerText)
    buttonItems1.innerText=0;
    boxItemOrdered1.innerText=0;
    boxItemOrderedTotalPrice1.innerText=0;

    const unvisible=document.getElementById('new5')
    unvisible.classList.add('hidden')

    //modal
    const offBox1Modal=document.getElementById('box5modal')
    offBox1Modal.classList.add('hidden')
    const modalTotal=document.getElementById('modalTOtal')
    modalTotal.innerText=MoneyHave-moneHaveToCut
})
//BOX 6:
document.getElementById('cross6').addEventListener('click',function(){
    const buttonItems1=document.getElementById('box6btn2val')
    const boxItemOrdered1=document.getElementById('box6order')
    const boxItemOrderedTotalPrice1=document.getElementById('box6orderPrice')
    const totalItems=document.getElementById('totalItems')

    //transaction
    const moneyTotal=document.getElementById('finally-money')
    const MoneyHave=parseFloat(moneyTotal.innerText)
    const moneHaveToCut=parseFloat(boxItemOrderedTotalPrice1.innerText)
    moneyTotal.innerText=MoneyHave-moneHaveToCut
    
    totalItems.innerText=parseInt(totalItems.innerText)-parseInt(boxItemOrdered1.innerText)
    buttonItems1.innerText=0;
    boxItemOrdered1.innerText=0;
    boxItemOrderedTotalPrice1.innerText=0;

    const unvisible=document.getElementById('new6')
    unvisible.classList.add('hidden')

    //modal
    const offBox1Modal=document.getElementById('box6modal')
    offBox1Modal.classList.add('hidden')
    const modalTotal=document.getElementById('modalTOtal')
    modalTotal.innerText=MoneyHave-moneHaveToCut
})
// BOX 7:
document.getElementById('cross7').addEventListener('click',function(){
    const buttonItems1=document.getElementById('box7btn2val')
    const boxItemOrdered1=document.getElementById('box7order')
    const boxItemOrderedTotalPrice1=document.getElementById('box7orderPrice')
    const totalItems=document.getElementById('totalItems')

    //transaction
    const moneyTotal=document.getElementById('finally-money')
    const MoneyHave=parseFloat(moneyTotal.innerText)
    const moneHaveToCut=parseFloat(boxItemOrderedTotalPrice1.innerText)
    moneyTotal.innerText=MoneyHave-moneHaveToCut
    
    totalItems.innerText=parseInt(totalItems.innerText)-parseInt(boxItemOrdered1.innerText)
    buttonItems1.innerText=0;
    boxItemOrdered1.innerText=0;
    boxItemOrderedTotalPrice1.innerText=0;

    const unvisible=document.getElementById('new7')
    unvisible.classList.add('hidden')

    //modal
    const offBox1Modal=document.getElementById('box7modal')
    offBox1Modal.classList.add('hidden')
    const modalTotal=document.getElementById('modalTOtal')
    modalTotal.innerText=MoneyHave-moneHaveToCut
})
// BOX 8
document.getElementById('cross8').addEventListener('click',function(){
    const buttonItems1=document.getElementById('box8btn2val')
    const boxItemOrdered1=document.getElementById('box8order')
    const boxItemOrderedTotalPrice1=document.getElementById('box8orderPrice')
    const totalItems=document.getElementById('totalItems')

    //transaction
    const moneyTotal=document.getElementById('finally-money')
    const MoneyHave=parseFloat(moneyTotal.innerText)
    const moneHaveToCut=parseFloat(boxItemOrderedTotalPrice1.innerText)
    moneyTotal.innerText=MoneyHave-moneHaveToCut
    
    totalItems.innerText=parseInt(totalItems.innerText)-parseInt(boxItemOrdered1.innerText)
    buttonItems1.innerText=0;
    boxItemOrdered1.innerText=0;
    boxItemOrderedTotalPrice1.innerText=0;

    const unvisible=document.getElementById('new8')
    unvisible.classList.add('hidden')

    //modal
    const offBox1Modal=document.getElementById('box8modal')
    offBox1Modal.classList.add('hidden')
    const modalTotal=document.getElementById('modalTOtal')
    modalTotal.innerText=MoneyHave-moneHaveToCut
})
//BOX 9
document.getElementById('cross9').addEventListener('click',function(){
    const buttonItems1=document.getElementById('box9btn2val')
    const boxItemOrdered1=document.getElementById('box8order')
    const boxItemOrderedTotalPrice1=document.getElementById('box9orderPrice')
    const totalItems=document.getElementById('totalItems')

    //transaction
    const moneyTotal=document.getElementById('finally-money')
    const MoneyHave=parseFloat(moneyTotal.innerText)
    const moneHaveToCut=parseFloat(boxItemOrderedTotalPrice1.innerText)
    moneyTotal.innerText=MoneyHave-moneHaveToCut
    
    totalItems.innerText=parseInt(totalItems.innerText)-parseInt(boxItemOrdered1.innerText)
    buttonItems1.innerText=0;
    boxItemOrdered1.innerText=0;
    boxItemOrderedTotalPrice1.innerText=0;

    const unvisible=document.getElementById('new9')
    unvisible.classList.add('hidden')

    //modal
    const offBox1Modal=document.getElementById('box9modal')
    offBox1Modal.classList.add('hidden')
    const modalTotal=document.getElementById('modalTOtal')
    modalTotal.innerText=MoneyHave-moneHaveToCut
})
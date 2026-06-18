let spinning = false;

async function spin(){

    if(spinning) return;

    spinning = true;

    spinBtn.disabled = true;

    const reels = [r1, r2, r3];

    for(let i=0;i<reels.length;i++){

        let reel = reels[i];

        let timer = setInterval(()=>{
            reel.textContent = randomSymbol();
        },80);

        await new Promise(resolve =>
            setTimeout(resolve, 800 + i*400)
        );

        clearInterval(timer);
    }

    evaluateSpin();

    spinBtn.disabled = false;
    spinning = false;
}

let box=document.querySelector('.box');
x=0;
y=79;
x1=41;
y1=81;
setInterval(() => {
    // console.log(n);
    if(x<=79)
    {
        box.style.left=`${x}%`;
        x+=0.5;
    }
    else
    {
        box.style.left=`${y}%`;
        y-=0.5;
    }
    if(y==0)
    {
        x=0;
        y=79;
    }
    if(x1<=82)
    {
        box.style.top=`${x1}%`;
        x1+=0.5;
    }
    else
    {
        box.style.top=`${y1}%`;
        y1-=0.5;
    }
    if(y1==0)
    {
        y1=81;
        x1=0;
    }
}, 15);
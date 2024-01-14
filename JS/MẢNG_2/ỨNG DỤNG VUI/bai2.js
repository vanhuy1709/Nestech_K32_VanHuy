
let a=new Array(),n="";
a[1]='T';a[2]='R';a[3]='Ầ';a[4]='N';a[5]=' ';a[6]='V';a[7]='Ă';a[8]='N';a[9]=' ';a[10]='H';a[11]='U';a[12]='Y';a[13]=':';a[14]=')'; a[15]=' ';
function typeTextarea(){
    t = document.f.txt.value;
    j = t.length;
    if(j > 0)
    {
        for(let i=1; i<=j; i++)
        {
            n = n + a[i];
            if(i == 15)
            {
                document.f.txt.value = "";
                n = "";
            }
        }
    }
    document.f.txt.value = n;
    n="";
    setTimeout("typeTextarea()", 1);
    return false;
}

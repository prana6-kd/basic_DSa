let string = "";
for (let i=1;i<=5; i++)
{
    for(let k=i; k<=4;k++)
        {
            string +=" ";
        }
    for (let j=1;j<=2*i-1;j++)
    {
        
        string +="*";
    }
    string +="\n";
}
console.log(string);
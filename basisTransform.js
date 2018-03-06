function updateVectorContents()
{
    var a = [];
    var b = [];

    for (i=1;i<4;++i)
    {
        a.push(parseFloat(valueFromId("a"+i)));
        b.push(parseFloat(valueFromId("b"+i)));
    }

    var A = [];
    var B = [];
    
    for (i=1;i<4;++i)
    {
        A.push([]);
        B.push([]);
        for (j=1;j<4;++j)
        {
            A[i-1].push(parseFloat(valueFromId("A"+i+""+j)))
            B[i-1].push(parseFloat(valueFromId("B"+i+""+j)))
        }
    }

    if (math.det(B)==0)
    {
        for (i=1;i<4;++i)
            setValueFromId("b"+i, "Determinant(B) = 0");
        return;
    }

    var Binv = math.inv(B);
    b = math.multiply(Binv, math.multiply(A,a));
    console.log(math.multiply(math.inv(B),B));

    for (i=1;i<4;++i)
        setValueFromId("b"+i, b[i-1]);

}

function loadFromCsv(id)
{
    var val = document.getElementById("csvInput").value;
    console.log("Loading csv into "+id+": "+val);
    var split = val.split(",");

    if ((id == "A") || (id == "B"))
    {
        for (i=1;i<4;++i)
            for (j=1;j<4;++j)
            {
                setValueFromId(id+i+""+j,parseFloat(split[j-1+(i-1)*3]));
            }
    }

    if ((id == "a") || (id == "b"))    
        for (i=1;i<4;++i)
            setValueFromId(id+i,parseFloat(split[i-1]));

    update();
}

function start()
{
    for (i=1;i<4;++i)
    {
        addUpdate("a"+i);
        addUpdate("b"+i);
        for (j=1;j<4;++j)
        {
            addUpdate("A"+i+""+j);
            addUpdate("B"+i+""+j);
        }
    }

    update();
}

function update()
{
    updateVectorContents();
    callForEach(updateWidth);
}

function addUpdate(id)
{
    var e = document.getElementById(id);
    if (e == null) return;
    e.onchange = function()
    {
        update();
    };
}

function updateWidth(id)
{
    var e = document.getElementById(id);
    e.style.fontSize = charHeight()-2;
    e.style.width = e.value.length * charWidth();
}

function charWidth()
{
    var e = document.getElementById("oneCharWide");
    return e.offsetWidth;
}

function charHeight()
{
    var e = document.getElementById("oneCharWide");
    return e.offsetHeight;
}

function callForEach(f)
{
    for (i=1;i<4;++i)
    {
        f("a"+i);
        f("b"+i);
        for (j=1;j<4;++j)
        {
            f("A"+i+""+j);
            f("B"+i+""+j);
        }
    }
}

function valueFromId(id)
{
    var e = document.getElementById(id);
    return e.value;
}

function setValueFromId(id, value)
{
    var e = document.getElementById(id);
    e.value = value;
}
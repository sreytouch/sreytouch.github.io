$(function () {
    // submit btn 
    $("#submit").click(function () {
        if ($("#fName").val() == "" || $("#lName").val() == "" || $("#email").val() == "" || $("#address").val() == "" || $("#course").val() == "") {
            alert("required");
        } else {
            let fn = document.createElement("label");
            fn.innerHTML = $("#fName").val();
            $("#fName").replaceWith(fn);

            let ln = document.createElement("label");
            ln.innerHTML = $("#lName").val();
            $("#lName").replaceWith(ln);

            let em = document.createElement("label");
            em.innerHTML = $("#email").val();
            $("#email").replaceWith(em);

            let ad = document.createElement("label");
            ad.innerHTML = $("#address").val();
            $("#address").replaceWith(ad);

            let ge = document.createElement("label");
            let dd = $("input[name='gender']:checked").val();
            ge.innerHTML = dd;
            $("#gender").replaceWith(ge);

            let si = document.createElement("label");
            let ss = $("input[name='single']");
            let result = "";
            for (let i = 0; i < ss.length; i++) {
                if (ss[i].checked) {
                    result += ", " + ss[i].value;
                }
            }
            si = result.substring(1);
            $("#single").replaceWith(si);

            let co = document.createElement("label");
            co.innerHTML = $("#course").val();
            $("#course").replaceWith(co);
        }
    })

    // reset btn 
    $("#reset").click(function () {
        location.reload();
    })


    let tableArray = [
        { "Name": "Apple", "Code": 2222, "Color": "Red" },
        { "Name": "Samsung", "Code": 1111, "Color": "Yellow" },
        { "Name": "Oppo", "Code": 4444, "Color": "Blue" },
        { "Name": "Nokia", "Code": 3333, "Color": "Pink" }
    ];

    let myTable = createTable(tableArray);
    let myUL = createUL(tableArray);

    let nameDiv = document.createElement("div");
    let nameLable = document.createElement("label");
    nameLable.innerHTML = "name:";
    let nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";
    document.body.append(nameDiv);
    nameDiv.append(nameLable);
    nameDiv.append(nameInput);

    let codeDiv = document.createElement("div");
    let codeLable = document.createElement("label");
    codeLable.innerHTML = "code:";
    let codeInput = document.createElement("input");
    codeInput.type = "text";
    codeInput.id = "code";
    document.body.append(codeDiv);
    codeDiv.append(codeLable);
    codeDiv.append(codeInput);

    let colorDiv = document.createElement("div");
    let colorLable = document.createElement("label");
    colorLable.innerHTML = "color:";
    let colorInput = document.createElement("input");
    colorInput.type = "text";
    colorInput.id = "color";
    document.body.append(colorDiv);
    colorDiv.append(colorLable);
    colorDiv.append(colorInput);

    let btnSub = document.createElement("button");
    btnSub.innerHTML = "submit";
    btnSub.id = "submit";
    document.body.append(btnSub);

    let btnSort = document.createElement("button");
    btnSort.innerHTML = "sort";
    btnSort.id = "sort";
    document.body.append(btnSort);

    let btnFilter = document.createElement("button");
    btnFilter.innerHTML = "filter";
    btnFilter.id = "filter";
    document.body.append(btnFilter);

    let btnReduce = document.createElement("button");
    btnReduce.innerHTML = "reduce";
    btnReduce.id = "reduce";
    document.body.append(btnReduce);

    // btnSub.onclick = (function () {
    $("#submit").click(function () {
        let na = $("#name").val();
        let col = $("#color").val();
        let cod = $("#code").val();
        if (na != "" || col != "" || cod != "") {
            $("#table").append(
                "<tr>" +
                "<td>" + na + "</td>" +
                "<td>" + col + "</td>" +
                "<td>" + cod + "</td>" +
                "</tr>");
            $("#ul").append(
                "<li>" + na + "</li>" +
                "<li>" + col + "</li>" +
                "<li>" + cod + "</li>");
            clear();
        }
    })

    $("#sort").click(function () {
        tableArray = tableArray.sort((x, y) => x.Code - y.Code);
        let filterTable = createTable(tableArray);
        let filterUl = createUL(tableArray);
        $("#table").replaceWith(filterTable);
        $("#ul").replaceWith(filterUl);
    })

    $("#filter").click(function () {
        tableArray = tableArray.filter(function (ele, index, arr) {
            if (ele.Code >= 2222) {
                return true;
            }
        });
        let filterTable = createTable(tableArray);
        let filterUl = createUL(tableArray);
        $("#table").replaceWith(filterTable);
        $("#ul").replaceWith(filterUl);
    })

    $("#reduce").click(function () {
        tableArray = tableArray.reduce(function (prev, cur, index, arr) {
            let addRow = {};
            for (const key in cur) {
                addRow[key] = cur[key];
            }
            addRow["Extra"] = "Testing";
            prev.push(addRow);
            return prev;
        }, []);
        let filterTable = createTable(tableArray);
        let filterUl = createUL(tableArray);
        $("#table").replaceWith(filterTable);
        $("#ul").replaceWith(filterUl);
    })


    document.body.append(myTable);
    document.body.append(myUL);
})

function clear() {
    $("#name").val("");
    $("#code").val("");
    $("#color").val("");
}

function createTable(tableArray) {
    let table = document.createElement("table");
    table.id = "table";
    let header = "<tr>";
    for (let key in tableArray[0]) {
        header += "<th>" + key + "</th>";
    }
    header += "</tr>";

    let row = "<tr>";
    for (let element of tableArray) {
        for (let key in element) {
            row += "<td>" + element[key] + "</td>";
        }
        row += "</tr>";
    }
    table.innerHTML = header + row;
    return table;
}

function createUL(tableArray) {
    let ul = document.createElement("ul");
    ul.id = "ul";
    let li = "";
    for (let element of tableArray) {
        for (let key in element) {
            li += "<li>" + element[key] + "</li>";
        }
    }
    ul.innerHTML = li;
    return ul;
}
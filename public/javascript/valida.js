$(document).ready(function () {
    function resetUI() {
        $('#error').addClass('hidden');
        $('#div').addClass('hidden');
    }

    function showError(error) {
        $('#error').removeClass('hidden');
        $('#error').text(error);
    }
    
    function showResult(result) {
        $('#div').removeClass('hidden');
        $('#traresult').val(result);
    }
    
    function doValidation() {
        const type = $("input[name='translate-method']:checked").val();
        const code = $('#input_code').val();
        const errorMessage = getErrorMessage(code, type);
        if (errorMessage) {
            showError(errorMessage);
            return false;
        }
        
        return true;
    }
    
    function doTranslation() {
        const type = $("input[name='translate-method']:checked").val(); //url
        const code = $('#input_code').val();
        
        $.post(
            type,
            {code: code},
            (data) => {
                showResult(data);
                if (document.getElementById('history')) {
                    document.getElementById('history').remove();
                }
                fetchRecentRecords();
            }
        );
    }

    function translate() {
        resetUI();
        if (!doValidation()) { return; }
        doTranslation();
    }


    function getErrorMessage(input, type) {
        if (type === 'http://127.0.0.1:5000/postcode') {
            return /^\d{5}$|^\d{9}$|^\d{5}-\d{4}$/.test(input)
                ? undefined
                : 'Error Input (zipcode)';
        }
        return /^\|[|: ]+\|$/.test(input)
            ? undefined
            : 'Error Input (barcode)';
    }

    $("#input_code").keypress(function (e) {
        if (e.which !== 13) {
            return;
        }

        e.preventDefault();
        translate();
    });

    $("#input_code").focus(function () {
        resetUI();
        $('#input_code').val('');
    });

    $("#ok").click(function (event) {
        event.preventDefault();
        translate();
    });
});

function fetchRecentRecords() {
    $.get("http://127.0.0.1:5000/records", function (data) {
        dynamicCreateTable(data);
    });
}

function dynamicCreateTable(data) {

    let div = document.getElementById('bug');

    let table = document.createElement('table');
    table.setAttribute('id', 'history');
    table.setAttribute('class', 'table table-condensed');
    table.setAttribute('border', '1px');

    div.appendChild(table);

    let thead = document.createElement('thead');
    table.appendChild(thead);

    let headTr = document.createElement('tr');

    let headCodeText = document.createTextNode('Code');
    let headCodeTd = document.createElement('td');
    // headCodeTd.setAttribute("style","font-size","bold")
    headCodeTd.appendChild(headCodeText);
    headTr.appendChild(headCodeTd);

    let headResultText = document.createTextNode('Result');
    let headResultTh = document.createElement('td');
    headResultTh.appendChild(headResultText);
    headTr.appendChild(headResultTh);

    thead.appendChild(headTr);

    let tbody = document.createElement("tbody");

    for (let r of data) {
        let tr = document.createElement('tr');

        let codeText = document.createTextNode(r.code);
        let codeTd = document.createElement('td');
        codeTd.appendChild(codeText);

        codeTd.setAttribute("data-toggle", "tooltip");
        codeTd.setAttribute("data-placement", "bottom");
        codeTd.setAttribute("title", r.time + ' ' + r.method);

        let resultText = document.createTextNode(r.result);
        let resultTd = document.createElement('td');
        resultTd.appendChild(resultText);

        tr.appendChild(codeTd);
        tr.appendChild(resultTd);

        tbody.appendChild(tr)

    }
    table.appendChild(tbody)
}
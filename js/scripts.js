var editando = false;

$(document).ready(function () {
    goHome();
});

function goHome() {
    $("li").removeClass("active");
    $("#navHome").addClass("active");
    $('#content').load("home.html");
}

function listCliente() {
    $("li").removeClass("active");
    $("#navCliente").addClass("active");
    $("#navCliente").find("li").last().addClass("active");

    $("#content").load("listCliente.php");
}

function addCliente(id) {
    $("li").removeClass("active");
    $("#navCliente").addClass("active");
    $("#navCliente").find("li").first().addClass("active");

    $.ajax({
        url: "addCliente.html",
        cache: false,
        dataType: "html",
        success: function (data) {
            $("#content").html(data);
            if (id) {
                editando = true;
                buscaDadosCliente(id);
            }
            else{
                editando = false;
            }
            saveCliente(id);
        }
    });
}

function buscaDadosCliente(id) {
    var dados = {};

    dados.op = "listCliente";
    dados.id = id;

    $.ajax({
        url: "crud.php",
        type: "POST",
        data: dados,
        success: function (data) {
            retorno = JSON.parse(data);
            $("#nome").val(retorno[0].nome);
            $("#email").val(retorno[0].email);
            $("#telefone").val(retorno[0].telefone);
        },
        fail: function (data) {
            alert("Problemas para recuperar informações");
        }
    });
}

function saveCliente(id) {
    $("#formDados").submit(function (e) {
        var form = this;
        e.preventDefault();
        var dados = {};

        if (editando)
            dados.op = "editCliente";
        else
            dados.op = "addCliente";

        if (id) dados.id = id;

        dados.nome = $("#nome").val();
        dados.email = $("#email").val();
        dados.telefone = $("#telefone").val();

        $.ajax({
            type: "POST",
            url: "crud.php",
            data: dados,
            success: function (data) {
                if (parseInt(data) >= 1){
                    $(form)[0].reset();
                    listCliente();
                }
                else
                    alert("Não foi possível gravar o registro");
            },
            fail: function (data) {
                alert("Não foi possível gravar o registro");
            }
        });

    });
}

function addProduto(id) {
    $("li").removeClass("active");
    $("#navProduto").addClass("active");
    $("#navProduto").find("li").first().addClass("active");

    $.ajax({
        url: "addProduto.html",
        cache: false,
        dataType: "html",
        success: function (data) {
            $("#content").html(data);
            if (id) {
                editando = true;
                buscaDadosProduto(id);
            }
            else
                editando = false;
            saveProduto(id);
        }
    });
}

function saveProduto(id) {
    $("#formDados").submit(function (e) {
        var form = this;
        e.preventDefault();
        var dados = {};

        if (editando)
            dados.op = "editProduto";
        else
            dados.op = "addProduto";

        if (id) dados.id = id;

        dados.nome = $("#nome").val();
        dados.descricao = $("#descricao").val();
        dados.preco = $("#preco").val();

        $.ajax({
            type: "POST",
            url: "crud.php",
            data: dados,
            success: function (data) {
                if (parseInt(data) >= 1){
                    $(form)[0].reset();
                    listProduto();
                }
                else{
                    alert("Não foi possível gravar o registro");
                    console.log(data);
                }

            },
            fail: function (data) {
                alert("Não foi possível gravar o registro");
            }
        });

    });
}


function buscaDadosProduto(id) {
    var dados = {};

    dados.op = "listProduto";
    dados.id = id;

    $.ajax({
        url: "crud.php",
        type: "POST",
        data: dados,
        success: function (data) {
            retorno = JSON.parse(data);
            $("#nome").val(retorno[0].nome);
            $("#descricao").val(retorno[0].descricao);
            $("#preco").val(retorno[0].preco);
        },
        fail: function (data) {
            alert("Problemas para recuperar informações");
        }
    });
}


function listProduto() {
    $("li").removeClass("active");
    $("#navProduto").addClass("active");
    $("#navProduto").find("li").last().addClass("active");

    $("#content").load("listProduto.php");
}


function addPedido(id) {
    $("li").removeClass("active");
    $("#navPedido").addClass("active");
    $("#navPedido").find("li").first().addClass("active");

    $.ajax({
        url: "addPedido.html",
        cache: false,
        dataType: "html",
        success: function (data) {
            $("#content").html(data);
            if (id) {
                editando = true;
                buscaDadosPedido(id);
            }
            else{
                editando = false;
            }
            savePedido(id);
        }
    });
}

function savePedido(id) {
    $("#formDados").submit(function (e) {
        var form = this;
        e.preventDefault();
        var dados = {};

        if (editando)
            dados.op = "editPedido";
        else
            dados.op = "addPedido";

        if (id) dados.id = id;

        dados.cliente = $("#sel1").val();
        dados.produto = $("#sel2").val();

        $.ajax({
            type: "POST",
            url: "crud.php",
            data: dados,
            success: function (data) {
                if (parseInt(data) >= 1){
                    $(form)[0].reset();
                    listPedidos();
                }
                else
                    alert("Não foi possível gravar o registro " + data);
            },
            fail: function (data) {
                alert("Não foi possível gravar o registro");
            }
        });

    });
}

function listPedidos() {
    $("li").removeClass("active");
    $("#navPedido").addClass("active");
    $("#navPedido").find("li").last().addClass("active");

    $("#content").load("listPedido.php");
}


function buscaDadosPedido(id) {
    var dados = {};

    dados.op = "listPedido";
    dados.id = id;

    $.ajax({
        url: "crud.php",
        type: "POST",
        data: dados,
        success: function (data) {
            retorno = JSON.parse(data);
            $("#sel1").val(retorno[0].id_cliente);
            $("#sel2").val(retorno[0].id_produto);
        },
        fail: function (data) {
            alert("Problemas para recuperar informações");
        }
    });
}

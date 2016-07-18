<?php
    include_once('connect.php');

    if ($_POST['op'] == 'addCliente'){
        echo mysql_query("INSERT INTO CLIENTE (nome, email, telefone) VALUES ('" . mysql_real_escape_string($_POST['nome']) . "', '" . mysql_real_escape_string($_POST['email']) ."', '" . mysql_real_escape_string($_POST['telefone']) ."')");
    }

if ($_POST['op'] == 'editCliente'){
        echo mysql_query("UPDATE CLIENTE set nome = '". mysql_real_escape_string($_POST['nome']) ."', email='". mysql_real_escape_string($_POST['email']) . "', telefone='" . mysql_real_escape_string($_POST['telefone']) . "' WHERE id = " . $_POST['id']);
    }

    if ($_POST['op'] == 'listCliente'){
        $sqldata = mysql_query("SELECT * FROM CLIENTE WHERE id = " . $_POST["id"]);

        $rows = array();
        while($r = mysql_fetch_assoc($sqldata)) {
          $rows[] = $r;
        }

        echo json_encode($rows);
    }

    if ($_POST['op'] == 'addProduto'){
        echo mysql_query("INSERT INTO PRODUTO (nome, descricao, preco) VALUES ('" . mysql_real_escape_string($_POST['nome']) . "', '" . mysql_real_escape_string($_POST['descricao']) ."', " . $_POST['preco'] .")");
    }

if ($_POST['op'] == 'editProduto'){
        echo mysql_query("UPDATE PRODUTO set nome = '". mysql_real_escape_string($_POST['nome']) ."', descricao='". mysql_real_escape_string($_POST['descricao']) . "', preco=" . $_POST['preco'] . " WHERE id = " . $_POST['id']);
    }

    if ($_POST['op'] == 'listProduto'){
        $sqldata = mysql_query("SELECT * FROM PRODUTO WHERE id = " . $_POST["id"]);

        $rows = array();
        while($r = mysql_fetch_assoc($sqldata)) {
          $rows[] = $r;
        }

        echo json_encode($rows);
    }

?>

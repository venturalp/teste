<?php
$link = mysql_connect('localhost', 'root', '');
if (!$link) {
    die('Não foi possível conectar: ' . mysql_error());
}
//echo 'Conexão bem sucedida';

if (!mysql_select_db("teste", $link))
    echo "fail";

//mysql_query("INSERT INTO CLIENTE (nome, email, telefone) VALUES ('Guilherme Ventura de Souza', 'venturalp@gmail.com', '(14) 98102-2002')");

?>

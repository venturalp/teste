<html lang="">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>

<body>
    <div class="panel panel-default">
        <div class="panel-body">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                        include_once('connect.php');
                        $retorno = mysql_query("SELECT * FROM PRODUTO");
                        while($row = mysql_fetch_assoc($retorno)){

                         echo "<tr>";
                         echo "<td>". $row["id"] . "</td>";
                         echo "<td>". $row["nome"] . "</td>";
                         echo "<td>". $row["descricao"] . "</td>";
                         echo "<td>". $row["preco"] . "</td>";
                         echo "<td><a href='#' onclick='addProduto(" . $row["id"] . ");'>Editar</a></td>";
                         echo "</tr>";
                        }
                    ?>
                </tbody>
            </table>
        </div>
    </div>
</body>

</html>

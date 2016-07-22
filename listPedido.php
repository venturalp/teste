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
                        <th>Cliente</th>
                        <th>Produto</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                        include_once('connect.php');
                        $retorno = mysql_query("SELECT ped.id, cli.nome as cliente, pro.nome as produto FROM PEDIDOS ped LEFT JOIN Cliente cli on (cli.id = ped.id_cliente) LEFT JOIN produto pro on (pro.id = ped.ID_PRODUTO)");

                        if ($retorno){



                            while($row = mysql_fetch_assoc($retorno)){

                             echo "<tr>";
                             echo "<td>". $row["id"] . "</td>";
                             echo "<td>". $row["cliente"] . "</td>";
                             echo "<td>". $row["produto"] . "</td>";
                             echo "<td><a href='#' onclick='addPedido(" . $row["id"] . ");'>Editar</a></td>";
                             echo "</tr>";
                            }
                        }
                        else{
                        echo "<tr>";
                        echo "<th></th>";
                        echo "<th></th>";
                        echo "<th></th>";
                        echo "<th></th>";
                        echo "</tr>";
                        }
                    ?>
                </tbody>
            </table>
        </div>
    </div>
</body>

</html>

<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gestion des Écoles</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <div class="container">
    <h2>Gestion des Écoles</h2>
    <form action="ajout_ecole.php" method="POST">
      <label>Nom de l'école :</label>
      <input type="text" name="nom_ecole" required>
      <button type="submit">Ajouter</button>
    </form>

    <h3>Liste des écoles</h3>
    <table>
      <tr>
        <th>Nom</th>
        <th>Action</th>
      </tr>
      <tr>
        <td>École 1</td>
        <td><button>Supprimer</button></td>
      </tr>
      <tr>
        <td>École 2</td>
        <td><button>Supprimer</button></td>
      </tr>
    </table>
  </div>
</body>

</html>
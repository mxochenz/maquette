<div class="container">
  <h2>Gestion des Responsables</h2>
  <form action="ajout_responsable.php" method="POST">
    <label>Nom :</label>
    <input type="text" name="nom" required>
    <label>Email :</label>
    <input type="email" name="email" required>
    <button type="submit">Ajouter</button>
  </form>

  <h3>Liste des responsables</h3>
  <table>
    <tr>
      <th>Nom</th>
      <th>Email</th>
      <th>Action</th>
    </tr>
    <tr>
      <td>Jean Dupont</td>
      <td>jean@example.com</td>
      <td><button>Supprimer</button></td>
    </tr>
  </table>
</div>
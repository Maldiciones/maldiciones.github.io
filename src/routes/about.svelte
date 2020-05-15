<script>
var fs = require('fs');
var initSqlJs = require('sql-wasm.js');
var filebuffer = fs.readFileSync('datosWeb.sqlite3');

initSqlJs().then(function(SQL){
  // Load the db
  var db = new SQL.Database(filebuffer);
});

</script>


<svelte:head>
	<title>About</title>
</svelte:head>

<h1>About this site</h1>

<p>This is the 'about' page. There's not much here.</p>
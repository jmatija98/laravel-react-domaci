export function create(predstava, datum, sediste, sala, cena) {

const report =
`<!DOCTYPE html>
<html>
<head>
<title>Departments report</title>
<link rel='shortcut icon' type='image/x-icon' href='img/drama.png' />
<meta content='width=device-width, initial-scale=1.0' name='viewport'>
<meta http-equiv='content-type' content='text-html; charset=utf-8'>

<!-- Custom Fonts -->
<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
</head>
<style>

body {
    margin: 0;
    color: #ffffff;
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 25px;
  }

  .container {
    width: 795px;
    margin: 0 auto;
  }

  article {
    position: relative;
    height: 500px;
    color: orange;
    width: 100%;
    overflow: hidden;
  }
  article .left {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    float: left;
    width: 635px;
    padding: 35px 0 0 60px;
  }
  article .right {
    float: right;
    width: 160px;
    padding-top: 10px;
  }
  article .event {
    margin-bottom: 10px;
    margin-top: 10px;
    font-weight: 700;
    font-size: 0.6em;
    line-height: 35px;
    text-transform: uppercase;
  }
  article .title {
    margin-bottom: 35px;
    color: #F5A623;
    font-family: 'Montserrat';
    font-size: 2em;
    line-height: 72px;
  }
  article .info {
    font-size: 0.6em;
    text-transform: uppercase;
  }
  article .seats {
    margin-bottom: 15px;
    font-size: 0.45em;
    text-transform: uppercase;
    text-align: right;
  }
  article .seats:last-child {
    margin-bottom: 0;
  }
  article .seats span {
    display: inline-block;
    width: 80px;
    margin-left: 15px;
    margin-right: 15px;
    padding: 10px 0;
    color: #F5A623;
    /* background: rgba(255, 255, 255, 0.5); */
    font-family: 'Montserrat';
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
    vertical-align: middle;
  }
  .styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }
  .styled-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
}
.styled-table th,
.styled-table td {
    padding: 12px 15px;
}
  .styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
  }

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid orange;
  }
  .styled-table tbody tr.active-row {
    font-weight: bold;
    color: #009879;
}

</style>
<body>
  <div class='container'>
    <article>
    <h1>Departments report</h1>
    <table class="styled-table">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Faculty Id</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Elab</td>
        <td>1</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Silab</td>
        <td>1</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Labsys</td>
        <td>1</td>
      </tr>
      <tr>
        <td>4</td>
        <td>LABIS</td>
        <td>1</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Marketing department</td>
        <td>1</td>
      </tr>
      <tr>
        <td>6</td>
        <td>LABAI</td>
        <td>1</td>
      </tr>
      <tr>
        <td>7</td>
        <td>Mathematics department</td>
        <td>1</td>
      </tr>
    </table>
  </article>
</div>
</body>
</html>`;

return report;
}
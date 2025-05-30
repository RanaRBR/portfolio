<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Message de contact</title>
</head>
<body>
    <h1>Message reçu</h1>
    <p><strong>Nom :</strong> {{ $data['name'] }}</p>
    <p><strong>Email :</strong> {{ $data['email'] }}</p>
    <p><strong>Message :</strong></p>
    <p>{{ $data['message'] }}</p>
</body>
</html>

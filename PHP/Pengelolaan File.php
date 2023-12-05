$file = fopen("data.txt", "r");
$isi = fread($file, filesize("data.txt"));
fclose($file);

<?php header("Content-Type:text/html; charset=windows-1251");

$month = $_GET['month'];
$year = $_GET['year'];
$today = $_GET['today'];
$dt = $_GET['dt'];
$header = $_GET['header'];
$lives = $_GET['lives'];
$trp = $_GET['trp'];
$scripture = $_GET['scripture'];

$contents = file_get_contents("http://www.holytrinityorthodox.com/ru/calendar/calendar.php?month=$month&today=$today&year=$year&dt=$dt&header=$header&lives=$lives&trp=$trp&scripture=$scripture");

echo $contents;
?>

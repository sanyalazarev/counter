<?php
	define("MYSQL_HOST", "localhost");
	define("MYSQL_DB", "");		// имя БД
	define("MYSQL_USER", "");	// пользователь БД
	define("MYSQL_PASS", "");	// пароль к БД
	
	@mysql_connect(MYSQL_HOST, MYSQL_USER, MYSQL_PASS) or die ("Не могу открыть mySQL-соединение!");
	mysql_query("SET NAMES utf8");
	@mysql_select_db(MYSQL_DB) or die ("Не могу выбрать mySQL БД!");
	
	if($_POST['act'] == "update") {
		// я мог бы сюда поставить проверку на сувществование ID и в случаее отсутствия добавить в таблицу и оповестить об этом javascript что тот изменил cookie[ID] но не стал заморачиватся :)
		mysql_query("UPDATE `users` SET `lastTimeActivity` = '".(int)$_POST['lastTimeActivity']."' WHERE `ID` = ".(int)$_POST['ID']);
	} elseif($_POST['act'] == "new_user") {
		mysql_query("INSERT INTO `users` (`lastTimeActivity`) VALUES (".(int)$_POST['lastTimeActivity'].")");
		echo mysql_insert_id();
	}
	
	mysql_close();
?>
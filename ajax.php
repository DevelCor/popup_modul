<?php
require_once('../../config/config.inc.php');
require_once('../../init.php');


$name = stripcslashes(Tools::getValue('name'));
$emailClient = stripcslashes(Tools::getValue('email'));
$number = stripcslashes(Tools::getValue('number'));
$model = stripcslashes(Tools::getValue('model'));


if(Mail::Send(1,
			'contact',
			$emailClient,
			array(
				'{message}' => 'Nombre/nick del cliente: '. $name .' <br>Modelo del cual el cliente tiene dudas: ' . $model . '<br>Numero de telefono del cliente: '.$number.'<br>Correo del cliente: '.$emailClient,
				'{email}' =>  Configuration::get('PS_SHOP_EMAIL'),
			),
			'reparacion@merkaphone.com',
			null,
			$emailClient,
			$name
        ));
			
	die('true');
<?php

function getResult($num1, $num2, $operation) {
	switch ($operation) {
		case '+':
			return $num1 + $num2;

		case '-':
			return $num1 - $num2;

		case '*':
			return $num1 * $num2;

		case '/':
			if ($num2 == 0) {
				return "Invalid operation";
			}
			return $num1 / $num2;

		case '^2':
			return $num1 ** 2;

		case 'sqrt':
			return sqrt($num1);
		
		default:
			return "Invalid operation";
	}
	return null;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$num1 = isset($_POST['num1']) ? floatval($_POST['num1']) : 0;
  $num2 = isset($_POST['num2']) ? floatval($_POST['num2']) : 0;
  $operation = isset($_POST['operation']) ? $_POST['operation'] : null;
	$result = null;

	if (!isset($operation)) {
		exit();
		header("Location index.html");
	}

	$result = getResult($num1, $num2, $operation);
	echo $result;

} else {
	header("Location index.html");
}

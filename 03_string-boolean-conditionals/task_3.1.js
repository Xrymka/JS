// Задание 1
// В переменную password запишите строку с любым произвольным паролем. Проверьте надёжность пароля. Пароль является надёжным, когда в нём есть хотя бы четыре символа, а также есть хотя бы один из символов '-', '_'. Выведите в консоль сообщения «Пароль надёжный» или «Пароль недостаточно надёжный».

// let password = '1234-';
// let password = '4321_';
// let password = 'qaz-xsw';
// let password = '_zxd';
// let password = '_-a';
// let password = 'qaz';
// let password = '_-3';
// let password = '123456789';


if (password.length > 3 && (password.includes('-') || password.includes('_'))) {
	console.log('Пароль надёжный');
} else {
	console.log('Пароль недостаточно надёжный');
}

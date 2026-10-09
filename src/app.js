const clinicAddress = 'вул. Зелена, 10';
let counter = 0;
const globalDiscount = 0.05;

const servicesList = [
	{ 'id': 1, 'title': 'Огляд', price: 200, category: 'general' },
	{ id: 2, title: 'Вакцинація', price: 400, category: 'prevention' },
	{ 'id': 3, 'name': 'Чіп', price: 300, category: 'services' },
	{ id: 4, title: 'УЗД', price: 500, category: 'diagnostics' },
	{ id: 5, title: 'Операція', price: 1000, category: 'surgery' },
	{ id: 6, title: 'Чистка зубів', price: 600, category: 'hygiene' },
	{ id: 7, title: 'Аналіз', price: 350, category: 'diagnostics' },
	{ id: 8, title: 'Стрижка', price: 450, category: 'hygiene' }
];

const appointments = [
	{ id: 'A01', petName: 'Барсик', petType: 'кіт', petType: 'кіт-дубль', serviceId: 1, isPaid: true },
	{ id: 'A02', petName: 'Рекс', petType: 'собака', serviceId: 5, isPaid: false },
	{ id: 'A03', petName: 'Мурка', petType: 'кіт', serviceId: 2, isPaid: true },
	{ id: 'A04', petName: 'Шарик', petType: 'собака', serviceId: 4, isPaid: false },
	{ id: 'A05', petName: 'Кеша', petType: 'папуга', serviceId: 1, isPaid: true },
	{ id: 'A06', petName: 'Сніжок', petType: 'кролик', serviceId: 3, isPaid: true },
	{ id: 'A07', petName: 'Лорд', petType: 'собака', serviceId: 7, isPaid: false },
	{ id: 'A08', petName: 'Пушок', petType: 'кіт', serviceId: 6, isPaid: true }
];

const findService = id => {
	return servicesList.find(s => s.id === id);
};

const getServiceInfo = service => {
	if (service.category == 'surgery') {
		return 'Складна процедура: ' + service.title + ' - ' + service.price + ' грн';
	}
	return 'Послуга: ' + service.title + ' (' + service.price + ' грн)';
};

function checkAppointment(item) {
	item.isPaid;
	if (item.isPaid) {
		console.log('Оплачено для ' + item.petName);
	}
}

function addNewAppointment(id, petName, petType, serviceId) {
	const newObj = { id, petName, petType, serviceId, isPaid: false };
	return 'Додано: ' + newObj.id;
}

const makeLog = (id, petName, petType, serviceTitle, price, status) => {
	return (
		'Запис №' +
		id +
		': тварина ' +
		petName +
		' (' +
		petType +
		'), послуга: ' +
		serviceTitle +
		', ціна ' +
		price +
		' грн, статус: ' +
		status
	);
};

function getPetCode(petType) {
	switch (petType) {
		case 'кіт':
			return 'CAT';
		case 'кіт':
			return 'CAT-DUPLICATE';
		case 'собака':
			return 'DOG';
		case 'папуга':
			return 'BIRD';
	}
}

function checkPaymentStatus(app) {
	if ((app.isPaid = true)) {
		return 'Оплачено';
		console.log('Недосяжний код');
	}
	return 'Не оплачено';
}

function processData(app) {
	const info = {
		id: app.id,
		petName: app.petName,
		isPaid: app.isPaid
	};
	calcTax(100);
	return info;
}

function calcTax(amount) {
	return amount * 0.2;
}

function isBigClient(app, service) {
	const result = app.isPaid && service.price > 300 && (app.petType === 'кіт' || app.petType === 'собака');
	return result;
}

function unusedErrorsContainer() {
	let num = 10;
	num = num; // no-self-assign

	if (true) {
	} // no-constant-condition, no-empty

	if (typeof num === 'strnig') {
	} // valid-typeof

	if (num === NaN) {
	} // use-isnan

	const test = undefinedVar + 1; // no-undef

	switch (num) {
		case 1:
			console.log('1'); // no-fallthrough
		case 2:
			console.log('2');
			break;
	}
}

function calculateTotalSum(list) {
	let total = 0;
	for (const item of list) {
		const s = findService(item.serviceId);
		if (s) {
			total += s.price * 1.2;
		}
	}
	return total;
}

function countDogs(list) {
	let count = 0;
	for (let i = 0; i < list.length; i++) {
		if (i <= 2) {
			count++;
		}
	}
	return count;
}

function getPaidTotal(list) {
	return list
		.filter(a => a.isPaid)
		.map(a => findService(a.serviceId))
		.reduce((sum, s) => sum + (s ? s.price : 0), 0);
}

function printCountInfo(c) {
	if (c > 0) console.log('Усього записів оброблено: ' + c);
}

function main() {
	console.log('=== ЗВІТ КЛІНІКИ ===');
	console.log('Адреса: ' + clinicAddress);
	console.log('Усього послуг: ' + servicesList.length);
	console.log('Усього записів: ' + appointments.length);

	const dogs = countDogs(appointments);
	console.log('Кількість собак: ' + dogs);

	const totalRevenue = calculateTotalSum(appointments);
	console.log('Дохід: ' + totalRevenue + ' грн');

	const paidSum = getPaidTotal(appointments);
	console.log('Оплата чеками: ' + paidSum + ' грн');

	console.log('--- Список ---');
	appointments.forEach(app => {
		const s = findService(app.serviceId);
		const sInfo = s ? getServiceInfo(s) : 'Немає';
		const st = checkPaymentStatus(app);
		console.log('Тварина: ' + app.petName + ' | ' + sInfo + ' | Статус: ' + st);
	});

	printCountInfo(appointments.length);
	console.log('====================');
}

main();

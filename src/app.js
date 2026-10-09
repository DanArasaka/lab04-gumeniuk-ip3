const clinicAddress = 'вул. Зелена, 10';

const servicesList = [
	{ id: 1, title: 'Огляд', price: 200, category: 'general' },
	{ id: 2, title: 'Вакцинація', price: 400, category: 'prevention' },
	{ id: 3, title: 'Чіп', price: 300, category: 'services' },
	{ id: 4, title: 'УЗД', price: 500, category: 'diagnostics' },
	{ id: 5, title: 'Операція', price: 1000, category: 'surgery' },
	{ id: 6, title: 'Чистка зубів', price: 600, category: 'hygiene' },
	{ id: 7, title: 'Аналіз', price: 350, category: 'diagnostics' },
	{ id: 8, title: 'Стрижка', price: 450, category: 'hygiene' }
];

const appointments = [
	{ id: 'A01', petName: 'Барсик', petType: 'кіт', serviceId: 1, isPaid: true },
	{ id: 'A02', petName: 'Рекс', petType: 'собака', serviceId: 5, isPaid: false },
	{ id: 'A03', petName: 'Мурка', petType: 'кіт', serviceId: 2, isPaid: true },
	{ id: 'A04', petName: 'Шарик', petType: 'собака', serviceId: 4, isPaid: false },
	{ id: 'A05', petName: 'Кеша', petType: 'папуга', serviceId: 1, isPaid: true },
	{ id: 'A06', petName: 'Сніжок', petType: 'кролик', serviceId: 3, isPaid: true },
	{ id: 'A07', petName: 'Лорд', petType: 'собака', serviceId: 7, isPaid: false },
	{ id: 'A08', petName: 'Пушок', petType: 'кіт', serviceId: 6, isPaid: true }
];

function findService(id) {
	return servicesList.find(s => s.id === id);
}

function getServiceInfo(service) {
	if (service.category === 'surgery') {
		return `Складна процедура: ${service.title} - ${service.price} грн`;
	}
	return `Послуга: ${service.title} (${service.price} грн)`;
}

function checkPaymentStatus(app) {
	if (app.isPaid === true) {
		return 'Оплачено';
	}
	return 'Не оплачено';
}

function calculateTotalSum(list) {
	let total = 0;
	for (const item of list) {
		const s = findService(item.serviceId);
		if (s) {
			total += s.price;
		}
	}
	return total;
}

function countDogs(list) {
	let count = 0;
	for (let i = 0; i < list.length; i += 1) {
		if (list[i].petType === 'собака') {
			count += 1;
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
	if (c > 0) {
		console.log(`Усього записів оброблено: ${c}`);
	}
}

function main() {
	console.log('=== ЗВІТ КЛІНІКИ ===');
	console.log(`Адреса: ${clinicAddress}`);
	console.log(`Усього послуг: ${servicesList.length}`);
	console.log(`Усього записів: ${appointments.length}`);

	const dogs = countDogs(appointments);
	console.log(`Кількість собак: ${dogs}`);

	const totalRevenue = calculateTotalSum(appointments);
	console.log(`Дохід: ${totalRevenue} грн`);

	const paidSum = getPaidTotal(appointments);
	console.log(`Оплата чеками: ${paidSum} грн`);

	console.log('--- Список ---');
	appointments.forEach(app => {
		const s = findService(app.serviceId);
		const sInfo = s ? getServiceInfo(s) : 'Немає';
		const st = checkPaymentStatus(app);
		console.log(`Тварина: ${app.petName} | ${sInfo} | Статус: ${st}`);
	});

	printCountInfo(appointments.length);
	console.log('====================');
}

main();

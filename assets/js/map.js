ymaps.ready(init);

function init() {
	// Создание карты.
	var myMap = new ymaps.Map("map", {
		center: [44.9973, 38.9397],
		zoom: 13,
		controls: ["zoomControl"],
		behaviors: ['drag']
	});

	var items = [

		// создание метки Гринстрой
		new ymaps.Placemark([44.9973, 38.9397], {
			id: 'main',
			hintContent: "Отдел продаж ГРИНСТРОЙ",
			balloonContent: "ул. Шоссейная улица, 70/1"
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/location.svg",
				iconImageSize: [54, 66],
				iconImageOffset: [-27, -66],
				zIndex: 9999,
			}),

		// Прочие метки 
		// МЕГА
		new ymaps.Placemark([45.013171, 38.928804], {
			id: 'group-first',
			hintContent: "Мега",
			balloonContent: "Тургеневское Шоссе, 27"
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/1.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		// Столплит
		new ymaps.Placemark([45.023093, 38.940054], {
			id: 'group-first',
			hintContent: "Столплит",
			balloonContent: "Магазин мебелимебель для кухни. Тургеневское Шоссе, 17"
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/3.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		// Монорама
		new ymaps.Placemark([45.001142, 38.927528], {
			id: 'group-3',
			hintContent: "Монарама",
			balloonContent: "Торговый центр/рынок. Тургеневское Шоссе, 33"
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/4.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		// Ашан
		new ymaps.Placemark([45.013392, 38.927918], {
			id: 'group-first',
			hintContent: "Ашан",
			balloonContent: "Тургеневское Шоссе, 27"
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/2.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		// IKEA
		new ymaps.Placemark([45.014858, 38.930280], {
			id: 'group-3',
			hintContent: "IKEA",
			balloonContent: "Тургеневское Шоссе, 27"
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/3.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		// Леруа Мерлен
		new ymaps.Placemark([45.017660, 38.930408], {
			id: 'group-3',
			hintContent: "Леруа Мерлен",
			balloonContent: "Тургеневское Шоссе, 27А"
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/4.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		// Кофейня Континенталь
		new ymaps.Placemark([44.996826, 38.939147], {
			id: 'group-11',
			hintContent: "Continental coffee",
			balloonContent: "Continental coffee Кофейня-кондитерская. Шоссейная ул., 69/1к1"
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/17.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		// Ветеринарная клиника и стационар Айболит 1
		new ymaps.Placemark([44.988251, 38.952115], {
			id: 'group-9',
			hintContent: "Ветеринарная клиника и стационар Айболит",
			balloonContent: "Ветеринарная клиника|ветеринарная лаборатория. Дорожная ул., 26"
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/13.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		// Ветеринарная клиника и стационар Айболит 2
		new ymaps.Placemark([45.014063, 38.917300], {
			id: 'group-9',
			hintContent: "Ветеринарная клиника и стационар Айболит",
			balloonContent: "Ветеринарная клиника|ветеринарная лаборатория. Бжегокайская ул., 31/1к2"
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/13.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		// ВетСервис
		new ymaps.Placemark([44.988623, 38.932203], {
			id: 'group-9',
			hintContent: "ВетСервис",
			balloonContent: "Ветеринарная клиника. ул. Гагарина, 111/1"
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/13.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		// Районный ветеринарный кабинет
		new ymaps.Placemark([45.011536, 38.957593], {
			id: 'group-9',
			hintContent: "Районный ветеринарный кабинет",
			balloonContent: "пр. Олега Кошевого, 124"
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/13.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),

		// СТО
		new ymaps.Placemark([45.001575, 38.943066], {
			id: 'group-10',
			hintContent: "СТО Автосервис, автотехцентр"
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/16.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),

		new ymaps.Placemark([45.000973, 38.942706], {
			id: 'group-10',
			hintContent: "Автосервис, автотехцентр/шиномонтаж"
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/15.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([44.999376, 38.949091], {
			id: 'group-10',
			hintContent: "Автосервис Life in cars Автосервис, автотехцентркузовной ремонт"
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/15.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([44.997012, 38.942292], {
			id: 'group-10',
			hintContent: "Автосервис Лидер. автотехцентр"
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/16.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([44.995819, 38.943019], {
			id: 'group-10',
			hintContent: "СТО Автосервис, автотехцентр"
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/16.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([44.996616, 38.940138], {
			id: 'group-10',
			hintContent: "Dr Шин Шиномонтаж"
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/15.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([44.997032, 38.938271], {
			id: 'group-10',
			hintContent: "Пневмоподвеска Рулевая Рейка"
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/16.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),

		new ymaps.Placemark([44.997625, 38.936231], {
			id: 'group-10',
			hintContent: "Автосервис Лидер"
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/16.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),

		new ymaps.Placemark([44.999480, 38.935220], {
			id: 'group-10',
			hintContent: "СТО"
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/15.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),

		new ymaps.Placemark([44.996300, 38.931100], {
			id: 'group-10',
			hintContent: "Emex"
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/16.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),

		new ymaps.Placemark([45.000559, 38.930550], {
			id: 'group-10',
			hintContent: "Эксперт Авто Юг"
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/15.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),

		new ymaps.Placemark([45.001676, 38.927742], {
			id: 'group-10',
			hintContent: "E-Tuners"
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/16.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),

		new ymaps.Placemark([45.000542, 38.927343], {
			id: 'group-10',
			hintContent: "Diesel-24"
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/15.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),

		new ymaps.Placemark([45.003066, 38.930478], {
			id: 'group-10',
			hintContent: "Автосити"
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/16.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),

		new ymaps.Placemark([45.005652, 38.931130], {
			id: 'group-10',
			hintContent: "Venom Performance"
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/16.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),

		new ymaps.Placemark([45.007808, 38.933999], {
			id: 'group-10',
			hintContent: "Morendi"
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/16.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),

		new ymaps.Placemark([45.010490, 38.933806], {
			id: 'group-10',
			hintContent: "Chery РВ Сервис Кубань"
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/16.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		// Декатлон 
		new ymaps.Placemark([45.010490, 38.933806], {
			id: 'group-8',
			hintContent: "Decathlon"
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/8.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),

		// Магнит Косметик
		new ymaps.Placemark([44.985632, 38.963619], {
			id: 'group-2',
			hintContent: "Магнит Косметик",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/magnit.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		// Магнит Косметик
		new ymaps.Placemark([44.989388, 38.952724], {
			id: 'group-2',
			hintContent: "Магнит Косметик",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/2.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		// Магнит Косметик
		new ymaps.Placemark([44.991405, 38.931337], {
			id: 'group-2',
			hintContent: "Магнит Косметик",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/2.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		// Магнит Косметик
		new ymaps.Placemark([44.996840, 38.941177], {
			id: 'group-2',
			hintContent: "Магнит Косметик",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/magnit.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		// Магнит Косметик
		new ymaps.Placemark([44.999236, 38.931287], {
			id: 'group-2',
			hintContent: "Магнит Косметик",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/magnit.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		// Магнит Косметик
		new ymaps.Placemark([45.003164, 38.961125], {
			id: 'group-2',
			hintContent: "Магнит Косметик",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/magnit.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		// Магнит 
		new ymaps.Placemark([45.013930, 38.917281], {
			id: 'group-2',
			hintContent: "Магнит",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/magnit.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([45.009623, 38.964011], {
			id: 'group-2',
			hintContent: "Магнит",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/magnit.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([45.004793, 38.960623], {
			id: 'group-2',
			hintContent: "Магнит",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/magnit.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([45.005841, 38.939005], {
			id: 'group-2',
			hintContent: "Магнит",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/magnit.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([44.999057, 38.931438], {
			id: 'group-2',
			hintContent: "Магнит",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/magnit.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([44.996519, 38.941190], {
			id: 'group-2',
			hintContent: "Магнит",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/magnit.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([44.991552, 38.931260], {
			id: 'group-2',
			hintContent: "Магнит",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/magnit.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([44.985685, 38.933879], {
			id: 'group-2',
			hintContent: "Магнит",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/magnit.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([44.988673, 38.954728], {
			id: 'group-2',
			hintContent: "Магнит",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/magnit.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([44.985737, 38.963688], {
			id: 'group-2',
			hintContent: "Магнит",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/magnit.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		// Пятёрочки
		new ymaps.Placemark([44.997393, 38.940063], {
			id: 'group-4',
			hintContent: "Пятёрочка",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/five.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([45.005497, 38.940445], {
			id: 'group-4',
			hintContent: "Пятёрочка",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/five.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([45.001541, 38.931949], {
			id: 'group-4',
			hintContent: "Пятёрочка",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/five.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([44.996885, 38.931407], {
			id: 'group-4',
			hintContent: "Пятёрочка",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/five.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([44.989673, 38.925587], {
			id: 'group-4',
			hintContent: "Пятёрочка",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/five.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([44.985855, 38.966486], {
			id: 'group-4',
			hintContent: "Пятёрочка",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/five.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([45.016189, 38.913090], {
			id: 'group-4',
			hintContent: "Пятёрочка",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/five.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([45.018007, 38.958183], {
			id: 'group-4',
			hintContent: "Пятёрочка",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/five.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([45.014592, 38.985547], {
			id: 'group-4',
			hintContent: "Пятёрочка",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/five.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),

		// фитнес клубы 
		new ymaps.Placemark([45.014460, 38.917596], {
			id: 'group-8',
			hintContent: "Семь Я - Оздоровительный центр, фитнес- клуб",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/5.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),

		new ymaps.Placemark([45.001505, 38.932670], {
			id: 'group-8',
			hintContent: "PLATFORMA. Фитнес- клубспортивная база",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/5.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),

		new ymaps.Placemark([44.996440, 38.931870], {
			id: 'group-8',
			hintContent: "Мастер спорта. Фитнес- клуб/спортивный клуб, секция",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/5.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),

		new ymaps.Placemark([44.991517, 38.931421], {
			id: 'group-8',
			hintContent: "Fitness Life. Фитнес- клуб/спортивное питание",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/5.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),

		new ymaps.Placemark([45.014803, 38.957436], {
			id: 'group-8',
			hintContent: "Orange Fitness. Фитнес- клуб",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/5.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),

		new ymaps.Placemark([45.015167, 38.973696], {
			id: 'group-8',
			hintContent: "Проффитнес. Фитнес- клуб/спортивный, тренажёрный зал",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/5.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),

		// Почтовые отделения 
		new ymaps.Placemark([44.989751, 38.951472], {
			id: 'group-7',
			hintContent: "Отделение почтовой связи",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/10.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([44.981878, 38.936650], {
			id: 'group-7',
			hintContent: "Отделение почтовой связи",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/10.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		// МФЦ
		new ymaps.Placemark([44.991429, 38.932960], {
			id: 'group-7',
			hintContent: "МФЦ Мои документы",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/9.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),

		// Медцентры и клиники 
		new ymaps.Placemark([44.998235, 38.929948], {
			id: 'group-6',
			hintContent: "ЗимаМед. Медцентр, клиника, диагностический центр",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/11.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([44.990605, 38.931902], {
			id: 'group-6',
			hintContent: "Инвитро. Медицинская лаборатория, медцентр, клиника",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/11.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([44.980112, 38.937045], {
			id: 'group-6',
			hintContent: "Здоровье. Медцентр, клиника",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/11.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([44.990008, 38.932633], {
			id: 'group-6',
			hintContent: "Поликлиника для взрослыхбольница для взрослых",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/11.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		// Аптеки 
		new ymaps.Placemark([44.980016, 38.936317], {
			id: 'group-6',
			hintContent: "Аптека",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/apteka.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([44.989997, 38.951926], {
			id: 'group-6',
			hintContent: "Аптека",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/apteka.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([44.987641, 38.940009], {
			id: 'group-6',
			hintContent: "Аптека",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/apteka.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([44.989279, 38.932427], {
			id: 'group-6',
			hintContent: "Аптека",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/apteka.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([45.003547, 38.937363], {
			id: 'group-6',
			hintContent: "Аптека",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/apteka.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([45.005299, 38.940831], {
			id: 'group-6',
			hintContent: "Аптека",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/apteka.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		// Детские садики 
		new ymaps.Placemark([44.993408, 38.949852], {
			id: 'group-5',
			hintContent: "Детский сад Общеразвивающего Вида № 10 Ручеек",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/7.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([44.995513, 38.930882], {
			id: 'group-5',
			hintContent: "Детский сад Непоседы",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/7.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([44.988463, 38.944231], {
			id: 'group-5',
			hintContent: "Детский сад Общеразвивающего Вида № 15 Нэбзый",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/7.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([44.987582, 38.930450], {
			id: 'group-5',
			hintContent: "Детский сад Общеразвивающего Вида № 14 Солнышко",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/7.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([44.978763, 38.937116], {
			id: 'group-5',
			hintContent: "МБДОУ детский сад общеразвивающего вида № 12 Ласточка",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/7.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([44.974141, 38.940228], {
			id: 'group-5',
			hintContent: "МБДОУ № 13 Вишенка",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/7.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([45.006931, 38.966843], {
			id: 'group-5',
			hintContent: "МБДОУ МО г.Краснодар детский сад № 81, корпус 2",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/7.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([45.000893, 38.948814], {
			id: 'group-5',
			hintContent: "Яблоновский Пашуня",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/7.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([45.001880, 38.941178], {
			id: 'group-5',
			hintContent: "Почемучка",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/7.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),


		// Вуз 
		new ymaps.Placemark([44.984836, 38.958281], {
			id: 'group-5',
			hintContent: "Филиал ФГБОУ ВО Майкопский государственный технологический университет",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/6.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		// Школы 
		new ymaps.Placemark([44.992563, 38.948950], {
			id: 'group-5',
			hintContent: "Средняя общеобразовательная школа № 15",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/6.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([44.988128, 38.943397], {
			id: 'group-5',
			hintContent: "МБОУ Средняя общеобразовательная школа № 5",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/6.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([44.982118, 38.942692], {
			id: 'group-5',
			hintContent: "Муниципальное бюджетное общеобразовательное учреждение Средняя школа № 3 п.Яблоновский",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/6.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			}),
		new ymaps.Placemark([45.007884, 38.962052], {
			id: 'group-5',
			hintContent: "МБОУ СОШ № 31",
		},
			{
				iconLayout: "default#image",
				iconImageHref: "/wp-content/themes/reboot_child/assets/images/map/6.svg",
				iconImageSize: [35, 35],
				iconImageOffset: [-17.5, -35],
			})
	];


	$('.map__filter-button').on('click', function () {

		var filter = $(this).data('filter');

		console.log(filter)

		var re = new RegExp(filter, "ig");

		var re2 = new RegExp('main', "ig");

		// Показать всё
		if (!filter) {
			var _items = items.filter(item => item.properties._data.id.search(re2) != -1);
			myMap.geoObjects.removeAll();
			_items.forEach(item => myMap.geoObjects.add(item));
		} else {
			var _items = items;
			if (filter != 'all') {
				_items = items.filter(item => (item.properties._data.id.search(re) != -1 || item.properties._data.id.search(re2) != -1));
			}

			myMap.geoObjects.removeAll();
			_items.forEach(item => myMap.geoObjects.add(item));
		}

		return false;
	});

	$('.map__filter-button.map__filter-main').trigger('click');

}

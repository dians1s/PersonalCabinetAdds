# Выполненное тестовое задание AVITO (АВИТО) Frontend React

Веб-приложение личного кабинета продавца на маркетплейсе, в котором есть возможность управлять своими объявлениями и заказами.

## Функциональные требования

### Приложение должно состоять из:

    Страницы объявления
    Страницы всех объявлений
    Страницы заказов
    Панели навигации

### На странице всех объявлений:

    Отображается список всех объявлений продавца
    Реализована пагинация показа объявлений
    Реализован выбор количества объявлений для показа на странице (по умолчанию должно быть 10)
    Реализован поиск по названию объявления
    Можно перейти на страницу объявления (по клику на карточку)
    В карточке объявления есть следующая информация о нем:
    Картинка
    Название;
    Стоимость;
    Количество просмотров;
    Количество лайков;
    Есть возможность создавать новые объявления (Модальное окно с input):
    Картинка (текстовое поле для ввода URL);
    Название (текстовое поле);
    Описание (текстовое поле)
    Стоимость (числовое поле);

### На странице объявления:

    Есть возможность просмотра объявления
    В редактировании объявления есть возможность:
    Менять картинку;
    Менять название;
    Менять цену;
    Менять описание.

### На странице заказов:

    Отображается список заказов с фильтрами по статусу
    Возможно сделать сортировку по сумме заказа
    На карточке заказа изображена следующая информация:
    Количество товаров;
    Возможность завершения заказа;
    Стоимость заказа;
    Дата создания заказа;
    Статус (текстом);
    Номер заказа;
    Кнопка “Показать все товары”, показывающая все товары в данном заказе (можно отображать их в этой же карточке или сделать модальное окно)
    При клике на товар в заказе есть возможность перейти в объявление продавца по этому товару

### Панель навигации:

    Вкладка “Объявления” - реализован переход на страницу объявлений
    Вкладка “Заказы” - реализован переход на страницу заказов

### Дополнительное задание

    На странице заказов реализована пагинация показа заказов.

## Нефункциональные требования

### Стек технологий:

    Frontend фреймворк: React, версия 18
    сборщик: Webpack
    Node.js: v20.17.0
    пакетный менеджер: npm
    Роутинг выполнен с использованием React Router v6

### Плюсом данного проекта было:

Использование TypeScript (tsx, ts), настройка проверки кода с помощью ESLint;

## Технологии:

Веб-приложение написано на React (template typescript). В качестве API использовался json-server.

## Проблемы, которые возникли:

Не смог найти запрос к API с поиском (читал json-server там было написано про ?q=, но оно не работает, также пробовал \_q, query, \_query \_s, \_search), поэтому поиск перестал работать как сделал пагинацию.

## Методологии:

В процессе разработки использовал методологию БЭМ и придерживался Feature-Sliced Design, любое грамотное разделение проекта на соответствующие папки поднимет скорость разработки на любом этапе, как говорится пишем код мы один раз, а читаем его много, соответственно, нужно сделать так, чтобы сам разработчик не путался где и какой файл.

## Настройка:

По стандарту обращение к API идет через "http://localhost:3001/", но вы можете поменять это в следующей директории => "./frontend/src/components/API" => в файлах AdService.ts и OrderService.ts необходимо заменить ссылки на свои.

## Инструкция по запуску:

ВАЖНО: У вас должны быть установлены [зависимости проекта](https://github.com/dians1s/PersonalCabinetAdds#зависимости) и изменены настройки (см. выше, если у вас занят 3000 и 3001 порт).

1. Необходимо склонировать репозиторий

`git clone https://github.com/dians1s/PersonalCabinetAdds.git`

2. Запуск API json-server

`cd ./server/`
`npm run server`

3. Можете запускать проект

`cd ./frontend/`
`npm run start`

## Поддержка

Если у вас возникли какие-либо проблемы или вопросы по использованию, создайте [обсуждение](https://github.com/dians1s/PersonalCabinetAdds/issues/new/choose) в данном репозитории или напишите на электронную почту <danis11255@gmail.com>.

## Зависимости

Запускалось и разрабатывалось на React: v18.3.1, (С использованием React-router-dom: v6.26.2,, TypeScript: v4.9.5, sass: v1.78.0, Node.js: v20.17.0). Если вы заметили, что данное ПО можно запустить на версии ниже, или он не работает на какой-либо версии, то напишите в [поддержку](https://github.com/dians1s/PersonalCabinetAdds#поддержка)

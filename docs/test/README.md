# Тестування працездатності системи



## Засоби тестування
Тестування CRUD застосунку проводиться за допомогою online Postman.

Примітка: Перед цим необхідно інсталювати Postman Agent, щоб тестувати запроси на локальному сервері.

### Отримання інформації по всім Useram

<img src="./media_labs6/Users.png">

<img src="./media_labs6/Users1.png">

### Отримання інформації по id Usera

<img src="./media_labs6/User_id.png">

### Створення нового юзера

<img src="./media_labs6/User_created.png">

#### Помилка створення юзера по причині: "Така пошта вже існує"

<img src="./media_labs6/User_email.png">

#### Помилка створення юзера по причині: "Такий нікнейм вже існує"

<img src="./media_labs6/User_nickname.png">

### Видалення юзеру

<img src="./media_labs6/User_delete.png">

#### Помилка видалення юзеру по причині: "Такого юзеру не знайдено"

<img src="./media_labs6/User_not_found.png">

### Вміст таблиці 'User' у базі 'quiz' даних після видалення юзеру

<img src="./media_labs6/User_delete_SQL.png">

### Оновлення юзеру

<img src="./media_labs6/User_update.png">

### Вміст таблиці 'User' у базі 'quiz'  даних після виконання усіх операцій

<img src="./media_labs6/Users_SQL.png">
















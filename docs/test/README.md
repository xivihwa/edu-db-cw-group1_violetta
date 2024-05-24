# Тестування працездатності системи



## Засоби тестування
Тестування CRUD застосунку проводиться за допомогою online Postman. 

Примітка: Перед цим необхідно інсталювати Postman Agent, щоб тестувати запроси на локальному сервері.

### Отримання інформації по всім Useram

<img src="./media/Users.png">

### Отримання інформації по id Usera

<img src="./media/User1.png">

### Створення нового юзера

<img src="./media/User_create.png">

#### Помилка створення юзера по причині: "Така пошта вже існує"

<img src="./media/User_email.png">

#### Помилка створення юзера по причині: "Такий нікнейм вже існує"

<img src="./media/User_nickname.png">

### Видалення юзеру

<img src="./media/User_delete.png">

#### Помилка видалення юзеру по причині: "Такого юзеру не знайдено"

<img src="./media/User_not_found.png">


### База даних після видалення юзеру

<img src="./media/User_delete_SQL.png">

### Оновлення юзеру

<img src="./media/User_update.png">

### База даних після виконання усіх операцій

<img src="./media/Users_SQL.png">
















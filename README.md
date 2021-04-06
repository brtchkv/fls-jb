# UI для управления списками автоматической рассылки писем

    Disclaimer: 

    Тестовые данные статистики за 19-20ые года, поэтому для отображения графиков надо отмотать на соответствующий период


#### Production build: 
Доступен по [ссылке](https://fls-bratchikov.herokuapp.com/) на хостинге *herokuapp*

##### Для роли студента:
    Логин: student
    Пароль: 123
    
##### Для роли обычного юзера:
    Логин: user
    Пароль: 123   

#### Local build: 
* Процесс ручной сборки на *Linux* / *macOS*:

    1. В корне проекта запустить ```./gradlew clean :backend:bootRun -Denv=development```
    2. Перейти на http://localhost:8080/

Параметры логина аналогичны продовым, см выше.

#### Тех-Стек: 
* **Frontend**: 
    1. *Yarn* для управления зависимостями
    2. *TypeScript* для строгой типизации
    3. *StyledComponents* для динамичных стилей
    4. *React.Context* для хранения глобального стейта
    5. *PrimeReact* для готовых компонентов
    6. *Axios* для запросов 
    7. *i18next* для локализации
    8. *Recharts* для рендера графиков

* **Backend**:
    1. *JAVA 11*
    1. *Spring Boot*
    2. *Univocity-parsers* для парсинга *CSV*

* **Devops**:
    1. *Gradle* скрипты для сборки фронта и сборки в ресурсы спринга (локально) или джарника (продово)
    2. *Heroku* в качестве сервера под все приложение


#### Реализованные features: 
* **Frontend**: 
    1. Создано разделение по ролям для задела на различный фунционал, например, для студентов, обычных юзеров и администраторов
    2. Добавлена локализация на двух языках -- русском и английском
    3. Загрузка персонального файла статистики в личном кабинете
    4. Панель для слабовидящих в соответствии со стандартами *(WCAG) 2.0* и ГОСТ Р 52872-2019
    5. Темная темная тема сайта
    6. Отображение данных статистики в виде таблицы со средними показателями и графиков по каждому из продуктов (*Webstorm*, *Idea*, *Goland*)
    7. Фильтрация данных по различным промежуткам (*day*, *week*, *month*, *quarter*, *year) 
  
* **Backend**: 
    1. Аутентификация и авторизация пользователя 
    2. Обработка персональных файлов статистики пользователя
    3. Фильтрация предоставленного файла

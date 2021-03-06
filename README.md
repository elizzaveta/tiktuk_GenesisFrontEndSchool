# TikTuk
## В проекте реализовано:
- страница трендовых видео:
    - контент: видео, текст
    - аватар и имя юзера. Нажатие на любой из них ведет к странице юзера
    - хештеги (в тексте видео они уже есть, но есть закомментированный код, который работает именно с набором хештегов в ответе)
    - количество лайков, комментариев, нажатий поделиться
- страница пользователя:
    - информация про юзера(аватар, имя, ник, био, количество подписчиков, подписок, лайков)
    - список видео(обложек видео), количество просмотров каждого
- получение данных с помощью fetch от RapidApi
 
## Дополнительные функции:
- видео на странице трендовых видео можно ставить на паузу нажатием на соответствующую иконку в углу видео
- адаптив под мобильную версию:
    - хедер сворачивается в название и меню, всплывающее при нажатии
    - контент страниц видоизменяется в зависимости от ширины экрана
- кликабельные так же:
    - название сайта (ведет к домашней странице)
    - меню мобильной версии(с изменением иконки меню, сворачиванием при нажатии на поле вокруг)
    - поле Trending в боковом меню

## Комментарии:
Для доступа к апи нужна подписка, к проекту подключен ключ с бесплатной подпиской, с ограничением в 100 подключений в месяц и 10 запросов в минуту. Если лимит окажется исчерпанным в процессе проверки проекта, заметить ключ можно в файле ./src/commonFunctions.js на 51й строчке. 


Так же ответ апи на получение постов пользователя (get user feed) иногда некорректный (код ответа 200, но содержимое не соответствует ожидаемому ответу), потому для проверки отображения можно заменить ссылку для fetch в файле ./src/User/UserFeed.js на ссылку на апи typicode json server (содержится информация о 3х постах пользователей kikakiim и elaine.victoria), строчки файла 18, 19.

Update: теперь можно воспользоваться набором данных Trending Feed для проверки отображения сетки видео пользователя

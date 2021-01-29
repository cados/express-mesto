# В 13-й проектной работе express-mesto реализовано

1. Подключена MongoDB.
2. Созданы схемы и модели для пользователей и карточек.
3. Созданы контроллеры и роуты для пользователей и карточек:
  GET /users — возвращает всех пользователей
  GET /users/:userId - возвращает пользователя по _id
  POST /users — создаёт пользователя
  PATCH /users/me — обновляет профиль
  PATCH /users/me/avatar — обновляет аватар

  GET /cards — возвращает все карточки
  POST /cards — создаёт карточку
  DELETE /cards/:cardId — удаляет карточку по идентификатору
  PATCH /users/me — обновляет профиль
  PATCH /users/me/avatar — обновляет аватар
  PUT /cards/:cardId/likes — поставить лайк карточке
  DELETE /cards/:cardId/likes — убрать лайк с карточки

## Запуск проекта

`npm run start` — запускает сервер  
`npm run dev` — запускает сервер с hot-reload

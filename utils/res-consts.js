// Статусы ответов
const OK_STATUS = 200;
const CREATED_STATUS = 201;
const BAD_REQUEST_ERROR_STATUS = 400;
const UNAUTHORIZED_ERROR_STATUS = 401;
const FORBIDDEN_ERROR_STATUS = 403;
const NOT_FOUND_ERROR_STATUS = 404;
const CONFLICT_ERROR_STATUS = 409;
const SERVER_ERROR_STATUS = 500;

// Сообщения ошибок
const BAD_REQUEST_ERROR_MESSAGE = 'Передан невалидный id!';
const UNAUTHORIZED_ERROR_MESSAGE = 'Необходима авторизация!';
const FORBIDDEN_ERROR_MESSAGE = 'Можно удалять только свои фильмы!';
const NOT_FOUND_ERROR_MESSAGE = 'Запрашиваемые данные не найдены!';
const CONFLICT_ERROR_MESSAGE = 'Пользователь с таким email уже существует!';
const SERVER_ERROR_MESSAGE = 'На сервере произошла ошибка!';
const PAGE_404_ERROR_MESSAGE = 'Страница по указанному маршруту не найдена!';

// Ссобщения ответов
const DELETE_MOVIE_MESSAGE = 'Фильм удалён!';
const LOGIN_MESSAGE = 'Вы вошли на сайт!';
const LOGOUT_MESSAGE = 'Вы покинули сайт!';

module.exports = {
  OK_STATUS,
  CREATED_STATUS,
  BAD_REQUEST_ERROR_STATUS,
  UNAUTHORIZED_ERROR_STATUS,
  FORBIDDEN_ERROR_STATUS,
  NOT_FOUND_ERROR_STATUS,
  CONFLICT_ERROR_STATUS,
  SERVER_ERROR_STATUS,
  BAD_REQUEST_ERROR_MESSAGE,
  UNAUTHORIZED_ERROR_MESSAGE,
  FORBIDDEN_ERROR_MESSAGE,
  NOT_FOUND_ERROR_MESSAGE,
  CONFLICT_ERROR_MESSAGE,
  SERVER_ERROR_MESSAGE,
  PAGE_404_ERROR_MESSAGE,
  DELETE_MOVIE_MESSAGE,
  LOGIN_MESSAGE,
  LOGOUT_MESSAGE,
};

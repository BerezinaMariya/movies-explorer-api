const { celebrate, Joi } = require('celebrate');

const {
  isIdValid,
  strReq,
  numReq,
  urlReq,
} = require('../../utils/validators-consts');

module.exports.validateMovieData = celebrate({
  body: Joi.object().keys({
    // страна создания фильма. Обязательное поле-строка.
    country: strReq,
    // режиссёр фильма. Обязательное поле-строка.
    director: strReq,
    // длительность фильма. Обязательное поле-число.
    duration: numReq,
    // год выпуска фильма. Обязательное поле-строка.
    year: strReq,
    // описание фильма. Обязательное поле-строка.
    description: strReq,
    // ссылка на постер к фильму. Обязательное поле-строка. URL-адрес.
    image: urlReq,
    // ссылка на трейлер фильма. Обязательное поле-строка. URL-адрес.
    trailerLink: urlReq,
    // миниатюрное изображение постера к фильму. Обязательное поле-строка.URL-адрес.
    thumbnail: urlReq,
    // id фильма, который содержится в ответе сервиса MoviesExplorer.
    // Обязательное поле. (Валидируем как число).
    movieId: numReq,
    // название фильма на русском языке. Обязательное поле-строка.
    nameRU: strReq,
    // название фильма на английском языке. Обязательное поле-строка.
    nameEN: strReq,
  }),
});

module.exports.validateMovieId = celebrate({
  params: Joi.object().keys({
    _id: isIdValid,
  }),
});

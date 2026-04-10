# Cats App

Приложение для просмотра изображений котиков с возможностью добавления в избранное.

## Функционал

- Загрузка котиков с API
- Infinite scroll
- Добавление и удаление из избранного
- Переключение между всеми котиками и избранными
- Адаптивная сетка карточек

## Стек

- React + TypeScript
- Vite
- TanStack Query
- Zod
- CSS

## API

<https://thecatapi.com/>

## Запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

## Особенности

- Используется useInfiniteQuery для подгрузки данных
- Кэширование через React Query
- Избранное хранится по id на клиенте

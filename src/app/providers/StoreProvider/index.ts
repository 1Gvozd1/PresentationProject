import type { StateSchema } from './config/StateSchema'; // запрещено экспортировать из вышестоящих в нижестоящие, но в качестве исключения поодходят типы

export { createReduxStore } from './config/store'; // для работы в storybook
export { StoreProvider } from './ui/StoreProvider';

export { StateSchema };

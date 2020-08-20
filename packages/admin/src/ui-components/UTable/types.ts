import { PossiblePaths } from '@@types/utils/PossiblePaths';

export interface IColumn<RecordType> {
  /** Заголовок колонки */
  title: string;
  /** Путь по объекту данных для отображения значения */
  field: keyof RecordType | PossiblePaths<RecordType>;
  /** Уникальное название колонки (по-умолчанию берётся из field) */
  key?: string;
}

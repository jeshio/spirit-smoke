declare namespace UTableTypes {
  interface IColumn {
    /** Заголовок колонки */
    title: string;
    /** Путь по объекту данных для отображения значения */
    field: string;
    /** Уникальное название колонки (по-умолчанию берётся из field) */
    key?: string;
  }
}

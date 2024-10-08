import Component from '@ember/component';
import { EmberTableColumn,  EmberTableRow, TableColumnMeta, TableRowMeta } from 'ember-table';

export interface EmberTdSignature<RowType, ColumnType> {
  Element: HTMLTableCellElement;
  Args: {
    /**
     * Action sent when the user clicks this element.
     */
    onClick?: ((row: RowType, event: Event) => void) | undefined;

    /**
     * Action sent when the user double clicks this element.
     */
    onDoubleClick?: ((row: RowType, event: Event) => void) | undefined;
  };
  Blocks: {
    default: [
      cellValue: RowType[keyof RowType],
      columnValue: ColumnType,
      rowValue: RowType,
      cellMeta: unknown,
      columnMeta: TableColumnMeta,
      rowMeta: TableRowMeta,
    ];
    select?: [
      rowMeta: TableRowMeta,
      onSelectionToggled: () => void,
    ];
    collapse?: [
      rowMeta: TableRowMeta,
      onCollapseToggled: () => void,
    ];
  };
}

export default class EmberTdComponent<
  RowType extends EmberTableRow = EmberTableRow,
  ColumnType extends EmberTableColumn = EmberTableColumn
> extends Component<EmberTdSignature<RowType, ColumnType>> {}

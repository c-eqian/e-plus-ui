import Table from './packages/Table';
import TableColumn from './packages/TableColumn';
import { withInstall } from '../../utils';
const EpTable = withInstall(Table);
const EpTableColumn = withInstall(TableColumn);
export { EpTable, EpTableColumn };

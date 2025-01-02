import { projectRoot } from '../paths';
import { run } from '../run';
export const buildResolver = async () => await run('pnpm run build:resolver', projectRoot);

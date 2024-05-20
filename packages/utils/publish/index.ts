import run from '../../../script/utils/run';
import { series } from 'gulp';
export const publishComponent = async () => {
  run('release-it', `.`);
};
export default series(async () => publishComponent());

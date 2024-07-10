import Comment from './Comment';
import { withInstall } from '../utils';
export * from './API';
const EpComment = withInstall(Comment);
export default EpComment;

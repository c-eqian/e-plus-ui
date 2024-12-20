import { withInstall, type SFCWithInstall } from '@e-plus-ui/utils';
import Card from './src/Card.vue';
export const EpCard: SFCWithInstall<typeof Card> = withInstall(Card);
export * from './src/type';

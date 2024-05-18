import VPDemo from './components/vp-demo.vue';
import VPApp from './components/vp-app.vue';
import type { Component } from 'vue';

import './styles/code.scss'

export default VPApp;

export { default as NotFound } from './components/vp-not-found.vue'

export const globals: [string, Component][] = [['Demo', VPDemo]];
import Workspace from './work-space'
const Home = () => import('~/pages/index.vue')

export default {
  Home,
  ...Workspace,
}

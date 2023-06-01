import Workspace from './work-space'
import Dashboard from './dashboard'
const Home = () => import('~/pages/index.vue')

export default {
  Home,
  ...Workspace,
  ...Dashboard,
}

import { NEl } from 'naive-ui'
import QueryForm from './query-form/index'
import BasicTable from './basic-table/index'
import './styles/index.less'

const proTable = defineComponent({
  name: 'ProTable',
  setup() {
    return () => {
      return (
        <NEl tag={'div'} class={'pro-table'}>
          <QueryForm />
          <BasicTable />
        </NEl>
      )
    }
  }
})

export default proTable

import { NEl } from 'naive-ui'
import QueryForm from './query-form/index'
import BasicTable from './basic-table/index'
import './styles/index.less'
import { proTableProps } from './typing'

const proTable = defineComponent({
  name: 'ProTable',
  props: {
    ...proTableProps
  },
  setup(props, { slots }) {
    return () => {
      const basicTableSlots = {
        empty: slots.empty,
        loading: slots.loading
      }
      return (
        <NEl tag={'div'} class={'pro-table'}>
          <QueryForm />
          <BasicTable {...props} v-slots={basicTableSlots} />
        </NEl>
      )
    }
  }
})

export default proTable

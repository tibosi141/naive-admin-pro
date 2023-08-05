import QueryForm from './query-form/index'
import BasicTable from './basic-table/index'

const proTable = defineComponent({
  name: 'ProTable',
  setup() {
    return () => {
      return (
        <div>
          <QueryForm />
          <BasicTable />
        </div>
      )
    }
  }
})

export default proTable

import { NDataTable, dataTableProps } from 'naive-ui'

const basicTable = defineComponent({
  name: 'BasicTable',
  props: {
    ...dataTableProps
  },
  setup(props, { slots }) {
    const prefixCls = 'pro-table-basic-table'
    return () => {
      const tableSlots = {
        empty: slots.empty,
        loading: slots.loading
      }
      return (
        <div class={prefixCls}>
          <NDataTable {...props} v-slots={tableSlots}></NDataTable>
        </div>
      )
    }
  }
})

export default basicTable

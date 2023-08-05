import type { PropType, VNodeChild } from '@vue/runtime-core'
import type { DataTableColumn } from 'naive-ui'
import { dataTableProps } from 'naive-ui'

export interface ProTableValueEnum {
  label: string | (() => VNodeChild)
  value: string | number
}

export type ProTableColumn = DataTableColumn & {
  valueType?: 'input' | 'select'
  valueEnum?: Record<string, ProTableValueEnum>
}

export const proTableProps = {
  ...dataTableProps,
  columns: {
    type: Array as PropType<ProTableColumn[]>,
    default: () => []
  }
}

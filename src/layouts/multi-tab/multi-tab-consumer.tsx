export const MultiTabConsumer = defineComponent({
  name: 'MultiTabConsumer',
  setup(props, { slots }) {
    /**
     * 这里是类似于我们的setup的写法
     */
    console.log(props)

    return () => {
      /**
       * 类似于我们的template部分
       */
      return (<>{slots?.default?.()}</>)
    }
  },
})

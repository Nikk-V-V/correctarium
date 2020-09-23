import {shallowMount} from '@vue/test-utils'
import MakeOrder from "../../src/views/MakeOrder"
import moment from 'moment'

describe('MakeOrder.vue', () => {

  const wrapper = shallowMount(MakeOrder)
  const vm = wrapper.vm
  const data = moment().clone()
  let result

  // Price calculation tests

  it('if the text length is < 1000 and the language type is not Latin, the price should be 50', function () {
    vm.langType = 'slav'
    vm.priceCalculate()
    expect(vm.price).toBe(50)
  })

  it('if the length of the text is < 1000 and the type of language is not Slavic, the price should be 120', function () {
    vm.langType = 'latin'
    vm.priceCalculate()
    expect(vm.price).toBe(120)
  })

  it('if the length of the text is > 1000 and the type of language is not Latin, the price should be the length of the text multiplied by 0.05 ', function () {
    vm.langType = 'slav'
    const result = 1250 * 0.05
    vm.priceCalculate(1250, 0.05)
    expect(vm.price).toBe(result)
  })

  it('if length of the text is > 1000 and the type of language is not Slavic, the price should be the length of the text multiplied by 0.12 ', function () {
    vm.langType = 'latin'
    const result = 1250 * 0.12
    vm.priceCalculate(1250, 0.12)
    expect(vm.price).toBe(result)
  })

  // Deadline time calculation tests

  //--------Block of tests for the Latin language----------
  it('if the text length is 166 or less and the language type is Latin, the execution time is one hour', function () {
    data.set({month: 8, day: 1, hour: 13})
    vm.setTime(166, data)
    expect(vm.executionTime).toBe(`Здамо за: одну годину`)
  })

  it('if the text length is 499 or less and the language type is Latin, the execution time is two hours ', function () {
    data.set({month: 7, day: 2, hour: 14})
    vm.setTime(499, data)
    expect(vm.executionTime).toBe(`Здамо за: дві години`)
  })

  it('if the text length is 832 or less and the language type is Latin, the execution time is three hours ', function () {
    data.set({month: 5, day: 3, hour: 15})
    vm.setTime(832, data)
    expect(vm.executionTime).toBe(`Здамо за: три години`)
  })

  //--------Block of tests for the Slavic language----------

  it('if the text length is 666 or less and the Slavic language type, the execution time is one hour', function () {
    vm.langType = 'slav'
    data.set({month: 8, day: 1, hour: 13})
    result = `Здамо за: одну годину`
    vm.setTime(666, data)
    expect(vm.executionTime).toBe(result)
  })

  it('if the text length is 1999 or less and the language type is Slavic, the execution time is two hours', function () {
    data.set({month: 8, day: 1, hour: 13})
    vm.setTime(1999, data)
    expect(vm.executionTime).toBe(`Здамо за: дві години`)
  })

  it('if the text length is 3332 or less and the language type is Slavic, the execution time is three hours', function () {
    data.set({month: 8, day: 1, hour: 13})
    vm.setTime(3332, data)
    expect(vm.executionTime).toBe(`Здамо за: три години`)
  })

  //--------Block of general tests----------

  it('If the order was placed after 19 o\'clock, then the execution time is calculated from the next day at 10 o\'clock', function () {
    data.set({month: 8, date: 23, hour: 20})
    vm.setTime(166, data)
    data.set({date: 24, hour: 10, minute: 30})
    expect(vm.executionTime).toBe(`Термін виконання: ${data.format('L')} о ${data.format('LT')}`)
  })

  it('If the order is on Friday at 19 o\'clock, then the delivery date starts the following Monday ', function () {
    data.set({month: 8, date: 25, hour: 19})
    vm.setTime(166, data)
    data.set({date: 28, hour: 10, minute: 30})
    expect(vm.executionTime).toBe(`Термін виконання: ${data.format('L')} о ${data.format('LT')}`)
  })

  it('If the order is on a Saturday, then the delivery date starts next Monday', function () {
    data.set({month: 8, date: 26})
    vm.setTime(166, data)
    data.set({date: 28, hour: 11, minute: 30})
    expect(vm.executionTime).toBe(`Термін виконання: ${data.format('L')} о ${data.format('LT')}`)
  })

  it('If the order is on a Sunday, then the delivery date starts next Monday', function () {
    data.set({month: 8, date: 27})
    vm.setTime(166, data)
    data.set({date: 28, hour: 12, minute: 30})
    expect(vm.executionTime).toBe(`Термін виконання: ${data.format('L')} о ${data.format('LT')}`)
  })

})
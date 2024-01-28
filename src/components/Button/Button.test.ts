import { test, describe } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'

describe('Button.vue', () => {
    test('basic button', () => {
        const wrapper = mount(Button, {
            props: {
                type: 'primary'
            },
            slots: {
                default: () => 'button'
            }
        })
        expect(wrapper.classes()).toContain('yt-button')
        expect(wrapper.get('button').text()).toBe('button')
        wrapper.get('button').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('click')
    })
})

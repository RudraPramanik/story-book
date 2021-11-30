import { Meta, Story } from '@storybook/react'
import {SimpleGreeting, Props} from './Lit'

const litcomp: Meta ={
    title: 'Lit element',
    component: SimpleGreeting
}
export default litcomp
export const Default = () => <SimpleGreeting></SimpleGreeting>
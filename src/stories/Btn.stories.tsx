import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Btn, Props } from './Btn'


const meta: Meta ={
    title: 'Btn',
    component:Btn
}

export default meta
export const Default = () => <Btn varient="primary"> default button  </Btn>
export const Primary = () => <Btn varient="secondary"> Primary button </Btn>
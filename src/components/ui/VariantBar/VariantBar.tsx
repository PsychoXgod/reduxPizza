import React from 'react'
import classNames from 'classnames'

import { PizzaSizeVariant, PizzaTypeVariant, PizzaInfo } from 'models/EntityModels/pizzas'
import { PizzaSize, PizzaType } from 'models/apiModels/ApiEntities/pizzas'

import styles from './styles.module.scss'


interface Props {
  variants: PizzaSizeVariant[] | PizzaTypeVariant[]
  onSetVariant: (id: PizzaSize | PizzaType) => void
  currentPizzaInfo: PizzaInfo
}
const VariantBar = ({ variants, onSetVariant, currentPizzaInfo }: Props) => {
  return (
    <div className={styles['variants-bar-root']}>
      {variants.slice(0, 3).map(variant => (
        <button
          className={classNames(
            styles['variant'],
            currentPizzaInfo.size === variant.id || currentPizzaInfo.type === variant.id ? styles['variant-active'] : ''
          )}
          key={variant.id}
          onClick={() => onSetVariant(variant.id)}
        >
          {variant.value}
        </button>
      ))}
    </div>
  )
}

export default VariantBar

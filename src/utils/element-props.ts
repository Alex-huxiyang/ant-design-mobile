import React from 'react'
import type { CSSProperties, ReactElement } from 'react'
import classNames from 'classnames'

export interface ElementProps<S extends string = never> {
  className?: string
  style?: CSSProperties & Partial<Record<S, string>>
  // id?: string
}

export function withElementProps<P extends ElementProps>(
  props: P,
  element: ReactElement
) {
  const p = {
    ...element.props,
  }
  if (props.className) {
    p.className = classNames(element.props.className, props.className)
  }
  if (props.style) {
    p.style = {
      ...p.style,
      ...props.style,
    }
  }
  // for (const key in props) {
  //   if (!props.hasOwnProperty(key)) continue
  //   if (key.startsWith('data-') || key.startsWith('aria-')) {
  //     p[key] = props[key]
  //   }
  // }
  // if (props.id) {
  //   p.id = props.id
  // }
  return React.cloneElement(element, p)
}

/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/
import { type SVGProps } from 'react'

import { cn } from '@/lib/utils'

export function Logo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      id='frycat-logo'
      viewBox='0 0 48 48'
      xmlns='http://www.w3.org/2000/svg'
      height='48'
      width='48'
      className={cn('size-6', className)}
      {...props}
    >
      <title>薯条猫API</title>
      {/*
        Win95 复古风 logo:深蓝方块(#000080,标题栏色)做底,
        白色像素风猫剪影居中,呼应 Win95 视觉语言。
        猫用几何方块构成(耳朵三角 + 头部方块 + 眼睛/鼻子),
        模拟早期图标像素感。整体只用蓝白两色,与复古主题统一。
      */}
      {/* 蓝色底板(圆角 0,呼应 Win95 直角风格) */}
      <rect x='2' y='2' width='44' height='44' fill='#000080' />
      {/* 像素风白色描边(模拟 Win95 图标的亮边) */}
      <rect
        x='2'
        y='2'
        width='44'
        height='44'
        fill='none'
        stroke='#ffffff'
        strokeWidth='1'
        opacity='0.3'
      />
      {/* 猫耳朵:两个白色三角 */}
      <path d='M14 18 L11 10 L19 16 Z' fill='#ffffff' />
      <path d='M34 18 L37 10 L29 16 Z' fill='#ffffff' />
      {/* 猫头部:白色圆角方块 */}
      <rect x='13' y='16' width='22' height='20' rx='2' fill='#ffffff' />
      {/* 猫眼睛:深蓝方块(像素感) */}
      <rect x='18' y='22' width='3' height='4' fill='#000080' />
      <rect x='27' y='22' width='3' height='4' fill='#000080' />
      {/* 猫鼻子:深蓝小三角 */}
      <path d='M22 28 L24 30 L26 28 Z' fill='#000080' />
      {/* 猫嘴:深蓝线条 */}
      <path
        d='M24 30 L24 32 M24 32 L21 33 M24 32 L27 33'
        fill='none'
        stroke='#000080'
        strokeWidth='1'
        strokeLinecap='round'
      />
      {/* 胡须:浅蓝细线(呼应 Win95 的细节质感) */}
      <line x1='8' y1='24' x2='13' y2='25' stroke='#8080ff' strokeWidth='0.8' strokeLinecap='round' />
      <line x1='8' y1='28' x2='13' y2='28' stroke='#8080ff' strokeWidth='0.8' strokeLinecap='round' />
      <line x1='35' y1='25' x2='40' y2='24' stroke='#8080ff' strokeWidth='0.8' strokeLinecap='round' />
      <line x1='35' y1='28' x2='40' y2='28' stroke='#8080ff' strokeWidth='0.8' strokeLinecap='round' />
    </svg>
  )
}

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
      {/* Cat ears */}
      <path d='M10 18 L8 8 L16 14 Z' fill='#FFB6C1' stroke='#FF69B4' strokeWidth='1' strokeLinejoin='round'/>
      <path d='M38 18 L40 8 L32 14 Z' fill='#FFB6C1' stroke='#FF69B4' strokeWidth='1' strokeLinejoin='round'/>
      {/* Cat face */}
      <circle cx='24' cy='26' r='14' fill='#FFF0F5' stroke='#FF69B4' strokeWidth='1.5'/>
      {/* Cat eyes */}
      <ellipse cx='18' cy='24' rx='2.5' ry='3.5' fill='#FF69B4'/>
      <ellipse cx='30' cy='24' rx='2.5' ry='3.5' fill='#FF69B4'/>
      <circle cx='18.5' cy='23' r='1' fill='#FFF'/>
      <circle cx='30.5' cy='23' r='1' fill='#FFF'/>
      {/* Cat nose */}
      <path d='M22 29 L24 31 L26 29 Z' fill='#FF69B4'/>
      {/* Cat mouth */}
      <path d='M24 31 Q21 34 19 32' fill='none' stroke='#FF69B4' strokeWidth='1.2' strokeLinecap='round'/>
      <path d='M24 31 Q27 34 29 32' fill='none' stroke='#FF69B4' strokeWidth='1.2' strokeLinecap='round'/>
      {/* French fry on top */}
      <rect x='20' y='4' width='2' height='8' rx='1' fill='#FFD700' stroke='#FFA500' strokeWidth='0.5'/>
      <rect x='23' y='3' width='2' height='9' rx='1' fill='#FFD700' stroke='#FFA500' strokeWidth='0.5'/>
      <rect x='26' y='4' width='2' height='8' rx='1' fill='#FFD700' stroke='#FFA500' strokeWidth='0.5'/>
      {/* Whiskers */}
      <line x1='6' y1='26' x2='14' y2='27' stroke='#FFB6C1' strokeWidth='1' strokeLinecap='round'/>
      <line x1='6' y1='29' x2='14' y2='29' stroke='#FFB6C1' strokeWidth='1' strokeLinecap='round'/>
      <line x1='34' y1='27' x2='42' y2='26' stroke='#FFB6C1' strokeWidth='1' strokeLinecap='round'/>
      <line x1='34' y1='29' x2='42' y2='29' stroke='#FFB6C1' strokeWidth='1' strokeLinecap='round'/>
      {/* Blush */}
      <circle cx='14' cy='30' r='2' fill='#FFB6C1' opacity='0.6'/>
      <circle cx='34' cy='30' r='2' fill='#FFB6C1' opacity='0.6'/>
    </svg>
  )
}

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
import { motion, useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'

import { ConfigDrawer } from '@/components/config-drawer'
import { LanguageSwitcher } from '@/components/language-switcher'
import { NotificationPopover } from '@/components/notification-popover'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { useNotifications } from '@/hooks/use-notifications'
import { MOTION_TRANSITION } from '@/lib/motion'

/**
 * FloatingDock — 底部中央悬浮导航栏。
 *
 * 所有操作按钮(语言 / 通知 / 主题 / 个人)集中在这里,
 * 取代原来散落在 header 和 sidebar footer 的布局。
 *
 * 视觉:固定在视口底部中央,半透明玻璃质感,hover 时按钮放大。
 * Win95 主题下会自动继承 3D 凸起边框(由 theme-presets.css 控制)。
 *
 * 主内容区需要在底部留出 padding,避免被 dock 遮挡
 * (见 authenticated-layout 的 main padding-bottom)。
 */
export function FloatingDock() {
  const shouldReduce = useReducedMotion()
  const notifications = useNotifications()
  const { t } = useTranslation()

  return (
    <motion.div
      initial={shouldReduce ? false : { y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={MOTION_TRANSITION.spring}
      className='fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 pointer-events-none'
    >
      <div
        className='pointer-events-auto flex items-center gap-1 rounded-full border border-border bg-card/80 p-1.5 shadow-lg backdrop-blur-md sm:gap-1.5 sm:p-2'
        role='toolbar'
        aria-label={t('Quick actions')}
      >
        <LanguageSwitcher />
        <NotificationPopover
          open={notifications.popoverOpen}
          onOpenChange={notifications.setPopoverOpen}
          unreadCount={notifications.unreadCount}
          activeTab={notifications.activeTab}
          onTabChange={notifications.setActiveTab}
          notice={notifications.notice}
          announcements={notifications.announcements}
          loading={notifications.loading}
        />
        <ConfigDrawer />
        <div className='mx-0.5 h-6 w-px shrink-0 bg-border' aria-hidden='true' />
        <ProfileDropdown />
      </div>
    </motion.div>
  )
}

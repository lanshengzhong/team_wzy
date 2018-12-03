import Layout from '@/pages/layout/Layout'

const boardRouter = {
  path: '/board',
  component: Layout,
  redirect: 'noredirect',
  name: 'board',
  meta: {
    title: '看板',
    icon: 'navbar_data'
  },
  children: [
    {
      path: 'keyboard',
      component: () => import('@/pages/index/index'),
      name: 'KeyboardChart',
      meta: { title: 'keyboardChart', noCache: true }
    },
    {
      path: 'line',
      component: () => import('@/pages/index/index'),
      name: 'LineChart',
      meta: { title: 'lineChart', noCache: true }
    }
  ]
}

export default boardRouter

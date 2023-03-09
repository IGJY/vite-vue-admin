export type rolesValueItemType = {
  hidden: number
  icon?: string
  id: number
  level: number
  name: string
  parentId: number
  sort?: number
  title?: string
}

export type rolesType = {
  [s: string]: rolesValueItemType[]
}
const roles: rolesType = {
  admin: [
    {
      hidden: 1,
      icon: 'vitezujian',
      id: 1,
      level: 0,
      name: 'modules',
      parentId: 0,
      sort: 997,
      title: '组件列表',
    },
    {
      hidden: 1,
      icon: 'viteyonghuliebiao',
      id: 18,
      level: 1,
      name: 'form',
      parentId: 1,
      sort: 997,
      title: '表单',
    },
    {
      hidden: 1,
      icon: 'viteZJ-biaoge',
      id: 11,
      level: 1,
      name: 'table',
      parentId: 1,
      sort: 997,
      title: '表格',
    },
    {
      hidden: 1,
      icon: 'vitequanping',
      id: 19,
      level: 1,
      name: 'export',
      parentId: 1,
      sort: 997,
      title: '导出表格',
    },
    {
      hidden: 1,
      icon: 'viteZJ-fuwenben',
      id: 12,
      level: 1,
      name: 'richText',
      parentId: 1,
      sort: 997,
      title: '富文本',
    },
    {
      hidden: 1,
      icon: 'viteZJ-shangchuan',
      id: 13,
      level: 1,
      name: 'upload',
      parentId: 1,
      sort: 997,
      title: '上传文件',
    },
    {
      hidden: 1,
      icon: 'viteantv',
      id: 15,
      level: 1,
      name: 'antv-x6',
      parentId: 1,
      sort: 997,
      title: 'antv-x6',
    },
    {
      hidden: 1,
      icon: 'vitei',
      id: 16,
      level: 1,
      name: 'icon',
      parentId: 1,
      sort: 997,
      title: '图标',
    },
    {
      hidden: 1,
      icon: 'vitesign',
      id: 17,
      level: 1,
      name: 'sign',
      parentId: 1,
      sort: 997,
      title: '签名',
    },
    {
      hidden: 1,
      icon: 'vitetubiao',
      id: 2,
      level: 0,
      name: 'eCharts',
      parentId: 0,
      sort: 997,
      title: '图表',
    },
    {
      hidden: 1,
      icon: 'vitezhexiantu',
      id: 21,
      level: 1,
      name: 'eChartLine',
      parentId: 2,
      sort: 997,
      title: '折线图',
    },
    {
      hidden: 1,
      icon: 'vitezhuzhuangtu',
      id: 22,
      level: 1,
      name: 'eChartPillar',
      parentId: 2,
      sort: 997,
      title: '饼状图',
    },
    {
      hidden: 1,
      icon: 'vitebingzhuangtu',
      id: 23,
      level: 1,
      name: 'eChartCake',
      parentId: 2,
      sort: 997,
      title: '柱状图',
    },
    {
      hidden: 1,
      icon: 'vitebullseye',
      id: 3,
      level: 0,
      name: 'log',
      parentId: 0,
      sort: 997,
      title: '日志',
    },
    {
      hidden: 1,
      icon: 'vitebug',
      id: 31,
      level: 1,
      name: 'error-log',
      parentId: 3,
      sort: 997,
      title: '错误日志',
    },
    {
      hidden: 1,
      icon: 'viteAPI',
      id: 32,
      level: 1,
      name: 'ajax-log',
      parentId: 3,
      sort: 997,
      title: 'ajax 错误',
    },
    {
      hidden: 1,
      icon: 'viteyumaobi',
      id: 32,
      level: 1,
      name: 'add-log',
      parentId: 3,
      sort: 997,
      title: '添加日志',
    },
    {
      hidden: 1,
      icon: 'viteiframe',
      id: 4,
      level: 0,
      name: 'iframe',
      parentId: 0,
      sort: 997,
      title: '内嵌页面',
    },
    {
      hidden: 1,
      icon: 'viteiframe',
      id: 41,
      level: 1,
      name: 'iframe-',
      parentId: 4,
      sort: 997,
      title: '内嵌',
    },
    {
      hidden: 1,
      icon: 'vitelianjie',
      id: 5,
      level: 0,
      name: 'interlink',
      parentId: 0,
      sort: 997,
      title: '外链',
    },
    {
      hidden: 1,
      icon: 'vitelianjie',
      id: 51,
      level: 1,
      name: 'link',
      parentId: 5,
      sort: 997,
      title: '外链',
    },
    {
      hidden: 1,
      icon: 'vitemarkdown',
      id: 6,
      level: 0,
      name: 'markDown',
      parentId: 0,
      sort: 997,
      title: 'markdown',
    },
    {
      hidden: 1,
      icon: 'vitemarkdown',
      id: 61,
      level: 1,
      name: 'markDownEditor',
      parentId: 6,
      sort: 997,
      title: 'markdown',
    },
    {
      hidden: 1,
      icon: 'viteyanjing',
      id: 62,
      level: 1,
      name: 'markDownPreview',
      parentId: 6,
      sort: 997,
      title: 'markdown预览',
    },
    {
      hidden: 1,
      icon: 'vitedirective',
      id: 7,
      level: 0,
      name: 'directives',
      parentId: 0,
      sort: 997,
      title: '指令',
    },
    {
      hidden: 1,
      icon: 'vitenumber',
      id: 71,
      level: 1,
      name: 'number-directive',
      parentId: 7,
      sort: 997,
      title: '数字指令',
    },
    {
      hidden: 1,
      icon: 'vitepress-key',
      id: 72,
      level: 1,
      name: 'press-key-directive',
      parentId: 7,
      sort: 997,
      title: '按键指令',
    },
    {
      hidden: 1,
      icon: 'vitethrottle',
      id: 73,
      level: 1,
      name: 'debounce-throttle',
      parentId: 7,
      sort: 997,
      title: '防抖节流指令',
    },
    {
      hidden: 1,
      icon: 'vitejiaose',
      id: 74,
      level: 1,
      name: 'demo-directive',
      parentId: 7,
      sort: 9,
      title: '权限演示',
    },
    {
      hidden: 1,
      icon: 'vitecopy',
      id: 75,
      level: 1,
      name: 'copy-directive',
      parentId: 7,
      sort: 9,
      title: '复制文本指令',
    },
    // 多级路由
    {
      hidden: 1,
      icon: 'viteroute',
      id: 8,
      level: 0,
      name: 'much-router',
      parentId: 0,
      sort: 997,
      title: '嵌套路由',
    },
    {
      hidden: 1,
      icon: 'viteantv',
      id: 81,
      level: 1,
      name: 'much-menu-one',
      parentId: 8,
      sort: 997,
      title: '二级菜单（一）',
    },
    {
      hidden: 1,
      icon: 'vitecaidanliebiao',
      id: 82,
      level: 1,
      name: 'much-menu-two',
      parentId: 8,
      sort: 997,
      title: '二级菜单（二）',
    },
    {
      hidden: 1,
      icon: 'viteZJ-fuwenben',
      id: 821,
      level: 2,
      name: 'much-menu-two-one',
      parentId: 82,
      sort: 997,
      title: '三级级菜单（一）',
    },
    {
      hidden: 1,
      icon: 'vitecaidanliebiao',
      id: 822,
      level: 2,
      name: 'much-menu-two-two',
      parentId: 82,
      sort: 997,
      title: '三级级菜单（二）',
    },
    {
      hidden: 1,
      icon: 'viteviteZJ-ditu',
      id: 8221,
      level: 3,
      name: 'much-menu-three-one',
      parentId: 822,
      sort: 997,
      title: '四级级菜单（一）',
    },
    {
      hidden: 1,
      icon: 'vitei',
      id: 8222,
      level: 3,
      name: 'much-menu-three-two',
      parentId: 822,
      sort: 997,
      title: '四级级菜单（二）',
    },
    // 权限管理
    {
      hidden: 1,
      icon: 'vitequanxianguanli-02',
      id: 9,
      level: 0,
      name: 'authority',
      parentId: 0,
      sort: 997,
      title: '权限管理',
    },
    {
      hidden: 1,
      icon: 'viteyonghuliebiao',
      id: 91,
      level: 1,
      name: 'admin',
      parentId: 9,
      sort: 9,
      title: '用户列表',
    },
    {
      hidden: 1,
      icon: 'vitejiaose',
      id: 92,
      level: 1,
      name: 'demo',
      parentId: 9,
      sort: 9,
      title: '权限演示',
    },
    {
      hidden: 1,
      icon: 'vitecaidanliebiao',
      id: 93,
      level: 1,
      name: 'menu',
      parentId: 9,
      sort: 2,
      title: '菜单列表',
    },
    {
      hidden: 1,
      icon: 'viteviteZJ-ditu',
      id: 10,
      level: 0,
      name: 'maps',
      parentId: 0,
      sort: 997,
      title: '地图',
    },
    {
      hidden: 1,
      icon: 'vitefence',
      id: 101,
      level: 10,
      name: 'ali-map-fence',
      parentId: 10,
      sort: 997,
      title: '高德地图电子围栏',
    },
    {
      hidden: 1,
      icon: 'vitecompass',
      id: 102,
      level: 1,
      name: 'qq-map',
      parentId: 10,
      sort: 997,
      title: '腾讯地图选点',
    },
    {
      hidden: 1,
      icon: 'viteAmap',
      id: 103,
      level: 10,
      name: 'ali-map',
      parentId: 10,
      sort: 997,
      title: '高德地图选点',
    },
  ],
  ordinary: [
    {
      hidden: 1,
      icon: 'vitezujian',
      id: 1,
      level: 0,
      name: 'modules',
      parentId: 0,
      sort: 997,
      title: '组件列表',
    },
    {
      hidden: 1,
      icon: 'viteZJ-biaoge',
      id: 11,
      level: 1,
      name: 'table',
      parentId: 1,
      sort: 997,
      title: '表格',
    },
    {
      hidden: 1,
      icon: 'viteZJ-fuwenben',
      id: 12,
      level: 1,
      name: 'richText',
      parentId: 1,
      sort: 997,
      title: '富文本',
    },
    {
      hidden: 1,
      icon: 'viteZJ-shangchuan',
      id: 13,
      level: 1,
      name: 'upload',
      parentId: 1,
      sort: 997,
      title: '上传文件',
    },
    {
      hidden: 1,
      icon: 'viteantv',
      id: 15,
      level: 1,
      name: 'antv-x6',
      parentId: 1,
      sort: 997,
      title: 'antv-x6',
    },
    {
      hidden: 1,
      icon: 'vitei',
      id: 16,
      level: 1,
      name: 'icon',
      parentId: 1,
      sort: 997,
      title: '图标',
    },
    {
      hidden: 1,
      icon: 'vitesign',
      id: 17,
      level: 1,
      name: 'sign',
      parentId: 1,
      sort: 997,
      title: '签名',
    },
    // 权限管理
    {
      hidden: 1,
      icon: 'vitequanxianguanli-02',
      id: 9,
      level: 0,
      name: 'authority',
      parentId: 0,
      sort: 997,
      title: '权限管理',
    },
    {
      hidden: 1,
      icon: 'viteyonghuliebiao',
      id: 91,
      level: 1,
      name: 'admin',
      parentId: 9,
      sort: 9,
      title: '用户列表',
    },
    {
      hidden: 1,
      icon: 'vitejiaose',
      id: 92,
      level: 1,
      name: 'demo',
      parentId: 9,
      sort: 9,
      title: '权限演示',
    },
  ],
  test: [
    // 权限管理
    {
      hidden: 1,
      icon: 'vitequanxianguanli-02',
      id: 9,
      level: 0,
      name: 'authority',
      parentId: 0,
      sort: 997,
      title: '权限管理',
    },
    {
      hidden: 1,
      icon: 'viteyonghuliebiao',
      id: 91,
      level: 1,
      name: 'admin',
      parentId: 9,
      sort: 9,
      title: '用户列表',
    },
    {
      hidden: 1,
      icon: 'vitejiaose',
      id: 92,
      level: 1,
      name: 'demo',
      parentId: 9,
      sort: 9,
      title: '权限演示',
    },
  ],
}

export default roles

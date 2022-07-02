module.exports = {
    title: 'Wang zhilong',
    description: '前端开发记录',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/images/bg.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/wzl_blog/', // 这是部署到github相关的配置
    markdown: {
      extractHeaders: [ 'h2', 'h3', 'h4'],
      lineNumbers: true // 代码块显示行号
    },
    theme: 'vdoing',
    themeConfig: {
      blogger: {
        avatar: '/images/avatar.jpg',
        name: '汪志龙',
        slogan: '行到水穷处，坐看云起时'
      },
      logo: '/images/banner.png',
      bodyBgImg: '/images/bg.jpg',
      nav:[ // 导航栏配置
        { text: '首页', link: '/' },
        {
          text: '前端',
          link: '/frontEnd/',
          items: [
              { text: '知识总结', link: '/pages/1a89bc/' },
              { text: '问题记录', link: '/pages/ecc339/' }
          ]
        },
        { 
          text: '页面',
          // link: '/layout/',
          items: [
            { text: 'html', link: '/pages/7054e9/' },
            { text: 'css', link: '/pages/0c1bb9/' }
          ]

        },
        { text: '微博', link: 'https://baidu.com' }  
      ],
      sidebar: 'structuring', // 侧边栏配置
      sidebarDepth: 2, // 侧边栏显示2级
      footer: {
        createYear: 2022
      }
    }
}
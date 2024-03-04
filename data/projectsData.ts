interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'CV Matcher',
    description: `使用opencv 对图片相似度进行匹配，server模块提供restful规范接口与前端通信。`,
    imgSrc: '/static/images/matches.jpg',
    href: 'https://github.com/dawnapproaching/matcher',
  }
]

export default projectsData

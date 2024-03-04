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
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  }
]

export default projectsData

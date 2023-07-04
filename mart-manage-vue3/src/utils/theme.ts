/*
 * @Author: heinan
 * @Date: 2023-07-04 16:20:53
 * @Last Modified by: heinan
 * @Last Modified time: 2023-07-04 23:04:17
 */
export const darkThemeSwitch = (flag: boolean = false) => {
  // id要与前面一致
  const theme_element: HTMLElement | null = document.querySelector('#dark-theme-style')
  if (!theme_element && flag == false) {
    const new_dark_Theme = document.createElement('link')
    new_dark_Theme.setAttribute('rel', 'stylesheet')
    //刚刚设置的css路径
    new_dark_Theme.setAttribute('href', '/dark.theme.css')
    // id可以自由设置
    new_dark_Theme.setAttribute('id', 'dark-theme-style')
    const docHead = document.querySelector('head')
    docHead?.append(new_dark_Theme)
  } else {
    const parentNode = theme_element?.parentNode
    parentNode?.removeChild(theme_element as HTMLElement)
  }
}

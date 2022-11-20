// HACK 封装本地存储函数

// 存数数据
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.parse(value)
  }
  window.localStorage.setItem(key, value)
}

// 获得数据
export const getItem = key => {
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (e) {
    return data
  }
}

// 删除指定数据
export const removeItem = key => {
  window.localStorage.removeItem(key)
}

// 删除所有数据
export const remvoeAllItem = () => {
  window.localStorage.clear()
}

const bannerUrlEdit = 'upload/c_fill,g_auto,h_250,w_970/e_gradient_fade,y_-0.5/'

const cloudEdit = (url) => {
  const splitedUrl = url.split('upload/')
  const concatUrl = splitedUrl[0] + bannerUrlEdit + splitedUrl[1]
  return concatUrl
}

export default cloudEdit

// Primeira forma que pensei em fazer

// const resizeCharts = () => {
//   let width = 600
//   const mediaQueryList = [
//     window.matchMedia('(max-width: 1435px)'),
//     window.matchMedia('(max-width: 1200px)'),
//     window.matchMedia('(max-width: 1024px)')
//   ]

//   if (mediaQueryList[0].matches === true) {
//     width = 500
//   }

//   return width
// }

// const widthChart = resizeCharts()
// export default widthChart

// A segunda forma

const ResizeCharts = () => {
  let resize = 600
  const mediaQueryList = [
    window.matchMedia('(max-width: 1435px)'),
    window.matchMedia('(max-width: 1200px)'),
    window.matchMedia('(max-width: 1024px)'),
    window.matchMedia('(max-width: 850px)'),
    window.matchMedia('(max-width: 600px)'),
    window.matchMedia('(max-width: 500px)'),
    window.matchMedia('(max-width: 425px)')
  ]

  if (mediaQueryList[0].matches === true) {
    resize = 500
    if (mediaQueryList[1].matches === true) {
      resize = 460
      if (mediaQueryList[2].matches === true) {
        resize = 380
        if (mediaQueryList[3].matches === true) {
          resize = 550
          if (mediaQueryList[4].matches === true) {
            resize = 450
            if (mediaQueryList[5].matches === true) {
              resize = 380
              if (mediaQueryList[6].matches === true) {
                resize = 280
              }
            }
          }
        }
      }
    }
  } else {
    resize = 600
  }

  return resize
}

export default ResizeCharts

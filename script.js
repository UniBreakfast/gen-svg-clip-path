// const svg = buildCornerCutSVG(400, 15, 80, [0, 1, 2, 3])

updateSVG()

controls.onchange = updateSVG

function buildCornerCutSVG(size, radius, cutSize, cutCorners=[]) {
  const corners = [
    {x: 0, y: 0},
    {x: size, y: 0},
    {x: size, y: size},
    {x: 0, y: size},
  ]
  const subCorners = {}
  if (cutCorners.includes(0)) {
    subCorners[0] = [
      {x: 0, y: cutSize},
      {x: cutSize, y: cutSize},
      {x: cutSize, y: 0},
    ]
  }
  if (cutCorners.includes(1)) {
    subCorners[1] = [
      {x: size - cutSize, y: 0},
      {x: size - cutSize, y: cutSize},
      {x: size, y: cutSize},
    ]
  }
  if (cutCorners.includes(2)) {
    subCorners[2] = [
      {x: size, y: size - cutSize},
      {x: size - cutSize, y: size - cutSize},
      {x: size - cutSize, y: size},
    ]
  }
  if (cutCorners.includes(3)) {
    subCorners[3] = [
      {x: cutSize, y: size},
      {x: cutSize, y: size - cutSize},
      {x: 0, y: size - cutSize},
    ]
  }

  return `
    <?xml
      version="1.0"
      encoding="UTF-8"
      standalone="no"
    ?>

    <svg
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:cc="http://creativecommons.org/ns#"
      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      xmlns:svg="http://www.w3.org/2000/svg"
      xmlns="http://www.w3.org/2000/svg"
      version="142.0"
      width="100%"
      height="100%"
      id="svg2"
    >
      <clipPath id="cutSquare">
        <path
          d="${
            subCorners[0]
              ? `
                M ${subCorners[0][0].x},${subCorners[0][0].y + radius}
                C ${subCorners[0][0].x},${subCorners[0][0].y + radius/2}
                  ${subCorners[0][0].x + radius/2},${subCorners[0][0].y}
                  ${subCorners[0][0].x + radius},${subCorners[0][0].y}
                H ${subCorners[0][1].x - radius}
                C ${subCorners[0][1].x - radius/2},${subCorners[0][1].y}
                  ${subCorners[0][1].x},${subCorners[0][1].y - radius/2}
                  ${subCorners[0][1].x},${subCorners[0][1].y - radius}
                V ${subCorners[0][2].y + radius}
                C ${subCorners[0][2].x},${subCorners[0][2].y + radius/2}
                  ${subCorners[0][2].x + radius/2},${subCorners[0][2].y}
                  ${subCorners[0][2].x + radius},${subCorners[0][2].y}
              ` : `
                M ${corners[0].x},${corners[0].y + radius}
                C ${corners[0].x},${corners[0].y + radius/2}
                  ${corners[0].x + radius/2},${corners[0].y}
                  ${corners[0].x + radius},${corners[0].y}
              `
          } ${
            subCorners[1]
              ? `
                H ${subCorners[1][0].x - radius}
                C ${subCorners[1][0].x - radius/2},${subCorners[1][0].y}
                  ${subCorners[1][0].x},${subCorners[1][0].y + radius/2}
                  ${subCorners[1][0].x},${subCorners[1][0].y + radius}
                V ${subCorners[1][1].y - radius}
                C ${subCorners[1][1].x},${subCorners[1][1].y - radius/2}
                  ${subCorners[1][1].x + radius/2},${subCorners[1][1].y}
                  ${subCorners[1][1].x + radius},${subCorners[1][1].y}
                H ${subCorners[1][2].x - radius}
                C ${subCorners[1][2].x - radius/2},${subCorners[1][2].y}
                  ${subCorners[1][2].x},${subCorners[1][2].y + radius/2}
                  ${subCorners[1][2].x},${subCorners[1][2].y + radius}
              ` : `
                H ${corners[1].x - radius}
                C ${corners[1].x - radius/2},${corners[1].y}
                  ${corners[1].x},${corners[1].y + radius/2}
                  ${corners[1].x},${corners[1].y + radius}
              `
          } ${
            subCorners[2]
              ? `
                V ${subCorners[2][0].y - radius}
                C ${subCorners[2][0].x},${subCorners[2][0].y - radius/2}
                  ${subCorners[2][0].x - radius/2},${subCorners[2][0].y}
                  ${subCorners[2][0].x - radius},${subCorners[2][0].y}
                H ${subCorners[2][1].x + radius}
                C ${subCorners[2][1].x + radius/2},${subCorners[2][1].y}
                  ${subCorners[2][1].x},${subCorners[2][1].y + radius/2}
                  ${subCorners[2][1].x},${subCorners[2][1].y + radius}
                V ${subCorners[2][2].y - radius}
                C ${subCorners[2][2].x},${subCorners[2][2].y - radius/2}
                  ${subCorners[2][2].x - radius/2},${subCorners[2][2].y}
                  ${subCorners[2][2].x - radius},${subCorners[2][2].y}
            ` : `
                V ${corners[2].y - radius}
                C ${corners[2].x},${corners[2].y - radius/2}
                  ${corners[2].x - radius/2},${corners[2].y}
                  ${corners[2].x - radius},${corners[2].y}
              `
          } ${
            subCorners[3]
              ? `
                H ${subCorners[3][0].x + radius}
                C ${subCorners[3][0].x + radius/2},${subCorners[3][0].y}
                  ${subCorners[3][0].x},${subCorners[3][0].y - radius/2}
                  ${subCorners[3][0].x},${subCorners[3][0].y - radius}
                V ${subCorners[3][1].y + radius}
                C ${subCorners[3][1].x},${subCorners[3][1].y + radius/2}
                  ${subCorners[3][1].x - radius/2},${subCorners[3][1].y}
                  ${subCorners[3][1].x - radius},${subCorners[3][1].y}
                H ${subCorners[3][2].x + radius}
                C ${subCorners[3][2].x + radius/2},${subCorners[3][2].y}
                  ${subCorners[3][2].x},${subCorners[3][2].y - radius/2}
                  ${subCorners[3][2].x},${subCorners[3][2].y - radius}
                V ${(subCorners[0]?.[0].y ?? corners[0].y) + radius}
              ` : `
                H ${corners[3].x + radius}
                C ${corners[3].x + radius/2},${corners[3].y}
                  ${corners[3].x},${corners[3].y - radius/2}
                  ${corners[3].x},${corners[3].y - radius}
                V ${(subCorners[0]?.[0].y ?? corners[0].y) + radius}
              `
          }"
        />
      </clipPath>
    </svg>
  `
}

function updateSVG() {
  const size = +sizeInp.value
  const radius = +radInp.value
  const cutSize = +cutInp.value
  const corners = [...controls.querySelectorAll(':checked')]
    .map(box => +box.id.at(-1))
  svgHolder.innerHTML =
    buildCornerCutSVG(size, radius, cutSize, corners)
}

function marioTower(height) {

  // let blocks = 1
 

  // console.log(spaces)
  // console.log(blocks)
  
  

  
  for (let blocks = 1; blocks <= height; blocks++) {

    let spaces = height - blocks
    let halfLine = []

    for (let i = 0; i < spaces; i++) {
      
      halfLine.push(' ')

    }
    

    for (let j = 0; j < blocks; j++) {
      
      halfLine.push('z')
      
    }


    fullLine = `${halfLine.join('')}  ${halfLine.reverse().join('')}`
 
    console.log(fullLine)
   
  }

}


console.log(marioTower(5))


// e.g. marioTower(5)
// results in
//     z  z     
//    zz  zz
//   zzz  zzz
//  zzzz  zzzz
// zzzzz  zzzzz




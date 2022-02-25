const INITIAL_ARRAY = []
const testArr = ['fiveStarWeapon', 'fiveStarOffRate1', 'fiveStarOffRate2']

function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// Tower of DOOOOM
// Will rewrite one day, sorry
function getItem (int) {
  if (int < 400) {
    return 'signatureWeapon'
  } else if (int < 1600) {
    return 'fiveStarWeapon'
  } else if (int < 1650) {
    return 'signatureOffRate1'
  } else if (int < 1700) {
    return 'signatureOffRate2'
  } else if (int < 1850) {
    return 'fiveStarOffRate1'
  } else if (int < 2000) {
    return 'fiveStarOffRate1'
  } else if (int < 5340) {
    return 'fourStarWeapon'
  } else if (int < 8130) {
    return 'threeStarWeapon'
  } else if (int < 9065) {
    return 'cogBox'
  } else if (int >= 9065) {
    return 'overclockMat'
  }
}

const checkPity = (input) => testArr.includes(input)

const handleSummonPool = item => {
  switch (item) {
    case 'signatureWeapon':
      return [
        'Crimson Birch',
        'https://res.cloudinary.com/dyfbbcvhc/image/upload/v1640677733/weapons/150px-Weapon-CrimsonBirch-Icon_p48ytd.webp'
      ]
    case 'signatureOffRate1':
      return [
        'Hydro Heat',
        'https://res.cloudinary.com/dyfbbcvhc/image/upload/v1640677734/weapons/150px-Weapon-HydroHeat-Icon_kn1wk4.webp'
      ]
    case 'signatureOffRate2':
      return [
        'Fusion Dragon',
        'https://res.cloudinary.com/dyfbbcvhc/image/upload/v1641053735/weapons/Weapon-FusionDragon-Icon_x8ay7v.webp'
      ]
    case 'fiveStarWeapon':
      return [
        'Kuji no Sada',
        'https://res.cloudinary.com/dyfbbcvhc/image/upload/v1645693358/weapons/fiveStars/Weapon-KujinoSada-Icon_kje6kn.webp'
      ]
    case 'fiveStarOffRate1':
      return [
        'Lightning Spark',
        'https://res.cloudinary.com/dyfbbcvhc/image/upload/v1645693359/weapons/fiveStars/Weapon-LightningSpark-Icon_wrlqwt.webp'
      ]
    case 'fiveStarOffRate2':
      return [
        'Magma Pillar',
        'https://res.cloudinary.com/dyfbbcvhc/image/upload/v1645693358/weapons/fiveStars/Weapon-MagmaPillar-Icon_bwdd0r.webp'
      ]
    case 'threeStarWeapon':
      return [
        'Four Stars Weapon',
        'https://res.cloudinary.com/dyfbbcvhc/image/upload/v1645695205/Weapon-CombatKnife-Icon_mqt1ui.webp'
      ]
    case 'fourStarWeapon':
      return [
        'Four Stars Weapon',
        'https://res.cloudinary.com/dyfbbcvhc/image/upload/v1645695206/Weapon-UnbrandedBlade-Icon_jlzih1.webp'
      ]
    case 'cogBox':
      return [
        'Cog Pack',
        'https://res.cloudinary.com/dyfbbcvhc/image/upload/v1641446993/Item-CogPackXXL_si9oju.webp'
      ]
    case 'overclockMat':
      return [
        'Overclock Material Box',
        'https://res.cloudinary.com/dyfbbcvhc/image/upload/v1641446994/Item-OverclockMaterialBoxBeta_owpcjj.webp'
      ]
  }
}

const handleColorType = color => {
  switch (color) {
    case 'signatureWeapon':
    case 'signatureOffRate1':
    case 'signatureOffRate2':
      return 'red'
    case 'fiveStarWeapon':
    case 'fiveStarOffRate1':
    case 'fiveStarOffRate2':
      return 'orange'
    case 'fourStarWeapon':
      return 'purple'
    default:
      return 'blue'
  }
}

export { checkPity, handleSummonPool, handleColorType, getItem, getRandomInt, INITIAL_ARRAY }
